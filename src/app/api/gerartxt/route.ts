import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import { prisma } from '@/lib/prisma'; // Sua conexão com o Prisma
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  await gerarArquivoPAG();
  return NextResponse.json({ message: 'Arquivo gerado com sucesso' });
}

async function gerarArquivoPAG() {
  const codigoPlano = '0684'; // Código de plano fixo
  const codigoCliente = '6231'; // Código de cliente fixo
  const codEstipulante = '0000';
  const dataAtual = format(new Date(), 'ddMMyy'); // Data de geração

  const anoAtual = new Date().getFullYear(); // Ano atual
  const mesAtual = format(new Date(), 'MM'); // Mês atual
  const sequencialEnvio = await obterSequencial(anoAtual); // Função para obter o sequencial
  const nomeArquivo = `MCAP_PAG_${codigoPlano}_${dataAtual}_${sequencialEnvio}.TXT`;

  const filePath = path.join(process.cwd(), 'public', nomeArquivo); // Local de armazenamento do arquivo gerado
  const writeStream = fs.createWriteStream(filePath);

  // 1. Header
  const header = `H${codigoCliente}${codigoPlano}${codEstipulante}${format(new Date(), 'yyyyMMdd')}${anoAtual.toString().slice(-2)}${sequencialEnvio.toString().padStart(6, '0')}333\n`;
  writeStream.write(header);

  // 2. Buscar os dados necessários do banco de dados
  const usuarios = await prisma.user.findMany({
    where: {
      document_signed: true,   // Apenas usuários com documentos assinados
      payment_completed: true, // Apenas usuários com pagamento completo
      plan_selected: {         // Apenas usuários que selecionaram algum plano
        not: null,
      }
    },
    select: {
      cpf: true,
      luckyNumber: {
        select: {
          number: true,  // Número da sorte
        },
      },
      birthDate: true,
      contrated_plan: true, // O plano contratado
    },
  });

  // 3. Iterar sobre os registros para gerar as linhas de detalhes (Detail)
  for (const [index, usuario] of usuarios.entries()) {
    const detalhe = 
      `D${anoAtual}${mesAtual}` +                                     // AAAAMM
      `${'999'}` +                                                  // Número da Série de Distribuição (ajuste conforme necessário)
      `${usuario.luckyNumber?.number?.padStart(8, '0') || '00000000'}` + // Número de Sorte
      `${'99999999999999'}` +                                       // Valor fixo (ajuste conforme necessário)
      `${format(new Date(), 'yyyyMMdd')}` +                        // AAAAMMDD Data de Vigência do Sorteio
      `${usuario.cpf.padStart(25, '0')}` +                         // CPF do cliente (25 caracteres)
      `${(index + 1).toString().padStart(9, '0')}`;                // Número sequencial dos registros (9 caracteres)

    writeStream.write(detalhe + '\n');
  }

  // 4. Trailer - Sempre iniciando com "T"
  const totalRegistros = usuarios.length.toString().padStart(9, '0'); // Total de registros
  const trailer = `T0001${totalRegistros}0000000000000000000000\n`; // Trailer com soma dos valores (ajustável)
  writeStream.write(trailer);

  // Finalizando o arquivo
  writeStream.end(() => {
    console.log('Arquivo PAG gerado com sucesso:', nomeArquivo);
  });
}

async function obterSequencial(anoAtual) {
  const registro = await prisma.sequenciais.findUnique({
    where: { ano: anoAtual },
  });

  if (registro) {
    // Se o registro existe, incrementa o sequencial
    const novoSequencial = registro.sequencial + 1;
    await prisma.sequenciais.update({
      where: { ano: anoAtual },
      data: { sequencial: novoSequencial },
    });
    return novoSequencial;
  } else {
    // Se não existe, cria um novo registro começando com 1
    await prisma.sequenciais.create({
      data: { ano: anoAtual, sequencial: 1 },
    });
    return 1;
  }
}
