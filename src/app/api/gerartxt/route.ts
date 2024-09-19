import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import {prisma} from '@/lib/prisma'; // Sua conexão com o Prisma

export async function gerarArquivoPAG() {
  const codigoPlano = '0684'; // Código de plano fixo
  const codigoCliente = '6231'; // Código de cliente fixo
  const dataAtual = format(new Date(), 'ddMMyy'); // Data de geração
  const sequencialEnvio = '01'; // Defina o sequencial do envio
  const nomeArquivo = `MCAP_PAG_${codigoPlano}_${dataAtual}_${sequencialEnvio}.TXT`;

  const filePath = path.join(process.cwd(), 'public', nomeArquivo); // Local de armazenamento do arquivo gerado
  const writeStream = fs.createWriteStream(filePath);

  // 1. Header - Sempre iniciando com "H"
  const header = `H222211110000${format(new Date(), 'yyyyMMdd')}${sequencialEnvio.padStart(6, '0')}333\n`;
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

  // 3. Iterar sobre os registros para gerar a linha de detalhes (Detail)
  usuarios.forEach((usuario) => {
    const detalhe = 
      `D${codigoPlano}` +                                         // Código de plano (fixo)
      `${'0000000000000000000000000'}` +                          // 25 caracteres fixos com zeros
      `${usuario.luckyNumber?.number?.padStart(8, '0') || '00000000'}` + // Número da sorte (8 caracteres)
      `${format(new Date(), 'yyyyMMdd')}` +                       // Data do sorteio (substitua se necessário)
      `${usuario.cpf.padStart(25, '0')}` +                        // CPF do cliente (25 caracteres)
      `${'000000001'}`;                                           // Valor fixo de exemplo (ajuste conforme necessário)

    writeStream.write(detalhe + '\n');
  });

  // 4. Trailer - Sempre iniciando com "T"
  const totalRegistros = usuarios.length.toString().padStart(9, '0'); // Total de registros
  const trailer = `T0001${totalRegistros}0000000000000000000000\n`; // Trailer com soma dos valores (ajustável)
  writeStream.write(trailer);

  // Finalizando o arquivo
  writeStream.end();
  console.log('Arquivo PAG gerado com sucesso:', nomeArquivo);
}
