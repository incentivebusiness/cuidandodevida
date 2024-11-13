// import fs from 'fs';
// import path from 'path';
// import { format } from 'date-fns';
// import { prisma } from '@/lib/prisma'; // Sua conexão com o Prisma
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   await gerarArquivoPAG();
//   return NextResponse.json({ message: 'Arquivo gerado com sucesso' });
// }

// async function gerarArquivoPAG() {
//   const codigoPlano = '0684'; // Código de plano fixo
//   const codigoCliente = '6231'; // Código de cliente fixo
//   const codEstipulante = '0000';
//   const dataAtual = format(new Date(), 'ddMMyy'); // Data de geração

//   const anoAtual = new Date().getFullYear(); // Ano atual
//   const mesAtual = format(new Date(), 'MM'); // Mês atual
//   const sequencialEnvio = await obterSequencial(anoAtual); // Função para obter o sequencial
//   const nomeArquivo = `MCAP_PAG_${codigoPlano}_${dataAtual}_${sequencialEnvio}.TXT`;

//   const pastaPagArquivos = path.join(process.cwd(), 'pagArquivos'); // Caminho para a pasta "pagArquivos"

//   // Cria a pasta se não existir
//   if (!fs.existsSync(pastaPagArquivos)) {
//     fs.mkdirSync(pastaPagArquivos);
//   }

//   const filePath = path.join(pastaPagArquivos, nomeArquivo); // Local de armazenamento do arquivo gerado
//   const writeStream = fs.createWriteStream(filePath);

//   // 1. Header
//   const header = `H${codigoCliente}${codigoPlano}${codEstipulante}${format(new Date(), 'yyyyMMdd')}${anoAtual.toString()}${sequencialEnvio.toString().padStart(6, '0')}333\n`;
//   writeStream.write(header);

//   // 2. Buscar os dados necessários do banco de dados
//   const usuarios = await prisma.user.findMany({
//     where: {
//       document_signed: true,   // Apenas usuários com documentos assinados
//       payment_completed: true, // Apenas usuários com pagamento completo
//       plan_selected: {         // Apenas usuários que selecionaram algum plano
//         not: null,
//       }
//     },
//     select: {
//       cpf: true,
//       luckyNumber: {
//         select: {
//           number: true,  // Número da sorte
//         },
//       },
//       birthDate: true,
//       contrated_plan: true, // O plano contratado
//     },
//   });

//   // 3. Mapeamento de valores de planos (ajuste conforme necessário)
//   const planoValores: Record<string, string> = {
//     'BASIC': '00000000000002630',  // Exemplo: PLANO_1 -> 100,00 (ajuste conforme os planos)
//     'MEDIUM': '000000000004748',  // Exemplo: PLANO_2 -> 200,00
//     'PLUS': '00000000000005101',  // Exemplo: PLANO_3 -> 300,00
    
//   };

//   // 4. Iterar sobre os registros para gerar as linhas de detalhes (Detail)
//   for (const [index, usuario] of usuarios.entries()) {
//     const valorPlano = planoValores[usuario.contrated_plan] || '00000000000000000';
//     const detalhe = 
//       `D${anoAtual}${mesAtual}` +                                     // AAAAMM
//       `${'999'}` +                                                  // Número da Série de Distribuição (ajuste conforme necessário)
//       `${usuario.luckyNumber?.number?.padStart(8, '0') || '00000000'}` + // Número de Sorte
//       `${'99999999999999'}` +                                       // Valor fixo (ajuste conforme necessário)
//       `${format(new Date(), 'yyyyMMdd')}` +                        // AAAAMMDD Data de Vigência do Sorteio
//       `${usuario.cpf.padStart(25, '0')}` +                         // CPF do cliente (25 caracteres)
//       `${(index + 1).toString().padStart(9, '0')}`;                // Número sequencial dos registros (9 caracteres)

//     writeStream.write(detalhe + '\n');
//   }

//   // // 4. Trailer - Sempre iniciando com "T"
//   // const totalRegistros = usuarios.length.toString().padStart(9, '0'); // Total de registros
//   // const trailer = `T0001${totalRegistros}0000000000000000000000\n`; // Trailer com soma dos valores (ajustável)
//   // writeStream.write(trailer);

//   // 4. Trailer - Sempre iniciando com "T"
// const totalRegistros = usuarios.length.toString().padStart(9, '0'); // Total de registros (9 caracteres)

// // O valor total dos títulos é a quantidade de registros vezes o custo unitário (0,266666)
// const valorTotalTitulos = (usuarios.length * 0.266666).toFixed(6).replace('.', '').padStart(17, '0');

// // Trailer com total de registros e valor total dos títulos
// const trailer = `T${totalRegistros}${valorTotalTitulos}\n`;
// writeStream.write(trailer);

//   // Finalizando o arquivo
//   writeStream.end(() => {
//     console.log('Arquivo PAG gerado com sucesso:', nomeArquivo);
//   });
// }

// async function obterSequencial(anoAtual:any) {
//   const registro = await prisma.sequenciais.findUnique({
//     where: { ano: anoAtual },
//   });

//   if (registro) {
//     // Se o registro existe, incrementa o sequencial
//     const novoSequencial = registro.sequencial + 1;
//     await prisma.sequenciais.update({
//       where: { ano: anoAtual },
//       data: { sequencial: novoSequencial },
//     });
//     return novoSequencial;
//   } else {
//     // Se não existe, cria um novo registro começando com 1
//     await prisma.sequenciais.create({
//       data: { ano: anoAtual, sequencial: 1 },
//     });
//     return 1;
//   }
// }



import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import { prisma } from '@/lib/prisma'; // Sua conexão com o Prisma
import { NextResponse } from 'next/server';
import { addDays, startOfMonth, getDay, getWeeksInMonth } from 'date-fns';


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

  const pastaPagArquivos = path.join(process.cwd(), 'pagArquivos'); // Caminho para a pasta "pagArquivos"

  // Cria a pasta se não existir
  if (!fs.existsSync(pastaPagArquivos)) {
    fs.mkdirSync(pastaPagArquivos);
  }

  const filePath = path.join(pastaPagArquivos, nomeArquivo); // Local de armazenamento do arquivo gerado
  const writeStream = fs.createWriteStream(filePath);

  // 1. Header
  const header = `H${codigoCliente}${codigoPlano}${codEstipulante}${format(new Date(), 'yyyyMMdd')}${anoAtual.toString()}${sequencialEnvio.toString().padStart(6, '0')}333\n`;
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

  // 3. Mapeamento de valores de planos (ajuste conforme necessário)
  const planoValores: Record<string, string> = {
    'BASIC': '00000000000002630',  // Exemplo: PLANO_1 -> 26,30
    'MEDIUM': '000000000004748',  // Exemplo: PLANO_2 -> 47,48
    'PLUS': '00000000000005101',  // Exemplo: PLANO_3 -> 51,01
  };

  // Função para obter a data de vigência do sorteio
function obterDataVigenciaSorteio() {
  const primeiroDiaMes = startOfMonth(new Date());
  const primeiroSabado = addDays(primeiroDiaMes, (6 - getDay(primeiroDiaMes) + 7) % 7); // Primeiro sábado do mês
  
  const numeroDeSemanas = getWeeksInMonth(primeiroDiaMes);
  
  // Verifica se o mês tem 5 sábados e usa o segundo sábado, se necessário
  if (numeroDeSemanas === 5) {
    return addDays(primeiroSabado, 7); // Retorna o segundo sábado
  }
  
  return primeiroSabado; // Retorna o primeiro sábado
}

// No código principal, substitua `format(new Date(), 'yyyyMMdd')` pela data de vigência de sorteio
const dataVigenciaSorteio = format(obterDataVigenciaSorteio(), 'yyyyMMdd');

  // Variável para armazenar a soma total dos valores dos planos
  let somaTotalPlanos = 0;

  // 4. Iterar sobre os registros para gerar as linhas de detalhes (Detail)
  for (const [index, usuario] of usuarios.entries()) {
    // Verifica se usuario.contrated_plan é uma string válida antes de acessar o mapeamento
    const plano = usuario.contrated_plan;
    const valorPlano = plano && planoValores[plano] ? planoValores[plano] : '00000000000000000';
    
    const valorPlanoNumerico = parseInt(valorPlano, 10);  // Converte o valor do plano para número
    somaTotalPlanos += valorPlanoNumerico;  // Soma o valor do plano
 

    const detalhe = 
      `D${anoAtual}${mesAtual}` +                                      // AAAAMM
      `${'999'}` +                                                   // Número da Série de Distribuição (ajuste conforme necessário)
      `${usuario.luckyNumber?.number?.padStart(8, '0') || '00000000'}` +  // Número de Sorte
      `${valorPlano}` +                                              // Valor do plano
      `${dataVigenciaSorteio}` +                         // AAAAMMDD Data de Vigência do Sorteio
      `${usuario.cpf.padStart(25, '0')}` +                           // CPF do cliente (25 caracteres)
      `${(index + 1).toString().padStart(9, '0')}`;                   // Número sequencial dos registros (9 caracteres)

    writeStream.write(detalhe + '\n');
  }

  // 5. Trailer - Sempre iniciando com "T"
  const totalRegistros = usuarios.length.toString().padStart(9, '0'); // Total de registros (9 caracteres)

  // O valor total dos títulos é a soma de todos os planos contratados
  const valorTotalTitulos = (somaTotalPlanos).toFixed(6).replace('.', '').padStart(17, '0');

  // Trailer com total de registros e valor total dos títulos
  const trailer = `T${totalRegistros}${valorTotalTitulos}\n`;
  writeStream.write(trailer);

  // Finalizando o arquivo
  writeStream.end(() => {
    console.log('Arquivo PAG gerado com sucesso:', nomeArquivo);
  });
}

async function obterSequencial(anoAtual: number) {
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
