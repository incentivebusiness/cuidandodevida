


// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Buscar usuários com um plano específico
//     const assistencias = await prisma.user.findMany({
//       where: {
//         plan_selected: 'BASICO', // Altere conforme o plano desejado
//       },
//       include: {
//         adesao: true,
//         address: true,
//       },
//     });

//     if (assistencias.length === 0) {
//       return new NextResponse('Nenhum usuário encontrado com o plano especificado.', { status: 404 });
//     }

//     // Gerar uma sequência única para o arquivo (seqüência do arquivo)
//     const fileSequence = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sequência numérica com 10 dígitos

//     // Quantidade de inclusões, exclusões e alterações (exemplo fixo por enquanto)
//     const inclusoesCount = assistencias.length.toString().padStart(10, '0');  // Supondo que cada usuário é uma inclusão
//     const exclusoesCount = '0000000000'; // Suponha que não há exclusões
//     const alteracoesCount = '0000000000'; // Suponha que não há alterações
//     const totalRegistros = assistencias.length.toString().padStart(10, '0');  // Total de registros é a quantidade de assistências

//     // Cabeçalho conforme regras
//     const header = [
//       "H",                         // 1: Identificação de cabeçalho (fixo "H")
//       fileSequence,                // 2: Sequência do arquivo (10 dígitos)
//       "0000000000006231",          // 3: Código do cliente (fixo "6231", completado com zeros à esquerda)
//       "I",                         // 4: Identificador de inclusões (fixo "I")
//       inclusoesCount,              // 5: Quantidade de inclusões (10 dígitos)
//       "E",                         // 6: Identificador de exclusões (fixo "E")
//       exclusoesCount,              // 7: Quantidade de exclusões (10 dígitos)
//       "A",                         // 8: Identificador de alterações (fixo "A")
//       alteracoesCount,             // 9: Quantidade de alterações (10 dígitos)
//       totalRegistros,              // 10: Total de registros do arquivo (10 dígitos)
//       "F"                          // 11: Identificação de fim de cabeçalho (fixo "F")
//     ].join(''); // Junta todos os campos do header sem separadores

//     // Formatar os dados dos usuários de acordo com o modelo fornecido
//     const formattedData = assistencias.map((user) => {
//       const adesao = user.adesao || {}; // Garante que adesao não seja null
//       const fixedCNPJ = '12345678000195'; // Substitua pelo seu CNPJ fixo

//       // Concatenar os dados em um único formato conforme exemplo
//       const userData = [
//         '22244430301515', // Exemplo de prefixo fixo
//         user.name.replace(/\s+/g, '').toUpperCase(), // Nome sem espaços e em maiúsculo
//         'YYYYMMDD', // Data de início no formato YYYYMMDD (aqui substitua por uma data real)
//         'YYYYMMDD', // Data de fim (novamente, substitua pela data real)
//         fixedCNPJ, // CNPJ fixo
//         fixedCNPJ, // CNPJ fixo
//         fixedCNPJ, // CNPJ fixo
//         user.cpf.padStart(11, '0'), // CPF com 11 dígitos
//         user.cpf.padStart(11, '0'), // CPF novamente (como no modelo)
//         user.address?.street?.replace(/\s+/g, '') || '', // Endereço sem espaços
//         user.address?.state || '', // UF
//         user.address?.city || '', // Cidade
//         user.address?.neighborhood || '', // Bairro
//         user.address?.zipCode || '', // CEP
//         '32323232', // Exemplo fixo para telefone ou outros dados
//         user.email || '', // E-mail
//       ]
//       .map(field => field.padStart(30, '0').slice(0, 30)) // Ajusta o tamanho de cada campo para 30 caracteres
//       .join(''); // Junta todos os campos sem separadores

//       return userData;
//     });

//     // Gerar o conteúdo do arquivo txt
//     const fileContent = [header, ...formattedData].join('\n');

//     // Caminho para salvar o arquivo
//     const today = new Date();
//     const assistenciaDir = path.join(process.cwd(), 'assistenciaArquivos');
//     const filePath = path.join(assistenciaDir, `assistencia_report_${today.toISOString().split('T')[0]}.txt`);

//     // Garantir que a pasta assistenciaArquivos exista
//     if (!fs.existsSync(assistenciaDir)) {
//       await fs.promises.mkdir(assistenciaDir, { recursive: true });
//     }

//     // Salvar o arquivo .txt de forma assíncrona
//     await fs.promises.writeFile(filePath, fileContent);

//     // Retorna uma resposta confirmando o sucesso da operação
//     return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });

//   } catch (error) {
//     console.error('Erro ao gerar arquivo:', error);
//     return new NextResponse('Erro ao gerar o arquivo', { status: 500 });
//   }
// }


// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Buscar usuários com um plano específico
//     const assistencias = await prisma.user.findMany({
//       where: {
//         plan_selected: 'BASICO', // Altere conforme o plano desejado
//       },
//       include: {
//         adesao: true,
//         address: true,
//       },
//     });

//     if (assistencias.length === 0) {
//       return new NextResponse('Nenhum usuário encontrado com o plano especificado.', { status: 404 });
//     }

//     // Gerar uma sequência única para o arquivo (seqüência do arquivo)
//     const fileSequence = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sequência numérica com 10 dígitos

//     // Quantidade de inclusões, exclusões e alterações (exemplo fixo por enquanto)
//     const inclusoesCount = assistencias.length.toString().padStart(10, '0');  // Supondo que cada usuário é uma inclusão
//     const exclusoesCount = '0000000000'; // Suponha que não há exclusões
//     const alteracoesCount = '0000000000'; // Suponha que não há alterações
//     const totalRegistros = assistencias.length.toString().padStart(10, '0');  // Total de registros é a quantidade de assistências

//     // Cabeçalho conforme regras
//     const header = [
//       "H",                         // 1: Identificação de cabeçalho (fixo "H")
//       fileSequence,                // 2: Sequência do arquivo (10 dígitos)
//       "0000000000006231",          // 3: Código do cliente (fixo "6231", completado com zeros à esquerda)
//       "I",                         // 4: Identificador de inclusões (fixo "I")
//       inclusoesCount,              // 5: Quantidade de inclusões (10 dígitos)
//       "E",                         // 6: Identificador de exclusões (fixo "E")
//       exclusoesCount,              // 7: Quantidade de exclusões (10 dígitos)
//       "A",                         // 8: Identificador de alterações (fixo "A")
//       alteracoesCount,             // 9: Quantidade de alterações (10 dígitos)
//       totalRegistros,              // 10: Total de registros do arquivo (10 dígitos)
//       "F"                          // 11: Identificação de fim de cabeçalho (fixo "F")
//     ].join(''); // Junta todos os campos do header sem separadores

//     // Formatar os dados dos usuários de acordo com o modelo fornecido
//     const formattedData = assistencias.map((user) => {
//       const adesao = user.adesao || {}; // Garante que adesao não seja null
//       const fixedCNPJ = '12345678000195'; // Substitua pelo seu CNPJ fixo

//       // Concatenar os dados em um único formato conforme exemplo
//       const userData = [
//         '22244430301515', // Exemplo de prefixo fixo (não precisa de preenchimento de zeros)
//         user.name.replace(/\s+/g, '').toUpperCase().padEnd(30, ' '), // Nome sem espaços e em maiúsculo, ajustado para 30 caracteres
//         'YYYYMMDD', // Data de início no formato YYYYMMDD (aqui substitua por uma data real)
//         'YYYYMMDD', // Data de fim (novamente, substitua pela data real)
//         fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
//         fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
//         fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
//         user.cpf.padStart(11, '0'), // CPF com 11 dígitos, preenchido com zeros à esquerda
//         user.cpf.padStart(11, '0'), // CPF novamente (como no modelo)
//         user.address?.street?.replace(/\s+/g, '')?.padEnd(30, ' ') || '', // Endereço sem espaços, ajustado para 30 caracteres
//         user.address?.state?.padEnd(2, ' ') || '', // UF (estado), ajustado para 2 caracteres
//         user.address?.city?.padEnd(30, ' ') || '', // Cidade, ajustado para 30 caracteres
//         user.address?.neighborhood?.padEnd(30, ' ') || '', // Bairro, ajustado para 30 caracteres
//         user.address?.zipCode?.padStart(8, '0') || '', // CEP, preenchido com zeros à esquerda se necessário
//         '32323232', // Exemplo fixo para telefone ou outros dados
//         user.email?.padEnd(30, ' ') || '', // E-mail, ajustado para 30 caracteres
//       ]
//       .join(''); // Junta todos os campos sem separadores

//       return userData;
//     });

//     // Gerar o conteúdo do arquivo txt
//     const fileContent = [header, ...formattedData].join('\n');

//     // Caminho para salvar o arquivo
//     const today = new Date();
//     const assistenciaDir = path.join(process.cwd(), 'assistenciaArquivos');
//     const filePath = path.join(assistenciaDir, `assistencia_report_${today.toISOString().split('T')[0]}.txt`);

//     // Garantir que a pasta assistenciaArquivos exista
//     if (!fs.existsSync(assistenciaDir)) {
//       await fs.promises.mkdir(assistenciaDir, { recursive: true });
//     }

//     // Salvar o arquivo .txt de forma assíncrona
//     await fs.promises.writeFile(filePath, fileContent);

//     // Retorna uma resposta confirmando o sucesso da operação
//     return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });

//   } catch (error) {
//     console.error('Erro ao gerar arquivo:', error);
//     return new NextResponse('Erro ao gerar o arquivo', { status: 500 });
//   }
// }


import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Buscar usuários com um plano específico
    const assistencias = await prisma.user.findMany({
      where: {
        contrated_plan: {
          in: ['MEDIUM', 'PLUS'],
        },
      },
      include: {
        adesao: true,
        address: true,
      },
    });

    if (assistencias.length === 0) {
      return new NextResponse('Nenhum usuário encontrado com o plano especificado.', { status: 404 });
    }

    // Gerar uma sequência única para o arquivo (seqüência do arquivo)
    const fileSequence = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0'); // Sequência numérica com 10 dígitos

    // Quantidade de inclusões, exclusões e alterações (exemplo fixo por enquanto)
    const inclusoesCount = assistencias.length.toString().padStart(10, '0');  //cada usuário é uma inclusão
    const exclusoesCount = '0000000000'; // Suponha que não há exclusões
    const alteracoesCount = '0000000000'; // Suponha que não há alterações
    const totalRegistros = assistencias.length.toString().padStart(10, '0');  // Total de registros é a quantidade de assistências

    // Cabeçalho conforme regras
    const header = [
      "H",                         // 1: Identificação de cabeçalho (fixo "H")
      fileSequence,                // 2: Sequência do arquivo (10 dígitos)
      "0000000000006231",          // 3: Código do cliente (fixo "6231", completado com zeros à esquerda)
      "I",                         // 4: Identificador de inclusões (fixo "I")
      inclusoesCount,              // 5: Quantidade de inclusões (10 dígitos)
      "E",                         // 6: Identificador de exclusões (fixo "E")
      exclusoesCount,              // 7: Quantidade de exclusões (10 dígitos)
      "A",                         // 8: Identificador de alterações (fixo "A")
      alteracoesCount,             // 9: Quantidade de alterações (10 dígitos)
      totalRegistros,              // 10: Total de registros do arquivo (10 dígitos)
      "F"                          // 11: Identificação de fim de cabeçalho (fixo "F")
    ].join(''); // Junta todos os campos do header sem separadores

    // Formatar os dados dos usuários de acordo com o modelo fornecido
    const formattedData = assistencias.map((user) => {
      const adesao = user.adesao || {}; // Garante que adesao não seja null
      const fixedCNPJ = '12345678000195'; // Substitua pelo seu CNPJ fixo

      // Concatenar os dados em um único formato conforme exemplo
      const userData = [
        '22244430301515', // Exemplo de prefixo fixo (não precisa de preenchimento de zeros)
        user.name.replace(/\s+/g, '').toUpperCase().slice(0, 30), // Nome sem espaços e em maiúsculo, ajustado para 30 caracteres
        'YYYYMMDD', // Data de início no formato YYYYMMDD (aqui substitua por uma data real)
        'YYYYMMDD', // Data de fim (novamente, substitua pela data real)
        fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
        fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
        fixedCNPJ, // CNPJ fixo (15 caracteres, não precisa de preenchimento de zeros)
        user.cpf.padStart(11, '0'), // CPF com 11 dígitos, preenchido com zeros à esquerda
        user.cpf.padStart(11, '0'), // CPF novamente (como no modelo)
        user.address?.street?.replace(/\s+/g, '').slice(0, 30) || '', // Endereço sem espaços, ajustado para 30 caracteres
        user.address?.state?.slice(0, 2) || '', // UF (estado), ajustado para 2 caracteres
        user.address?.city?.slice(0, 30) || '', // Cidade, ajustado para 30 caracteres
        user.address?.neighborhood?.slice(0, 30) || '', // Bairro, ajustado para 30 caracteres
        user.address?.zipCode?.padStart(8, '0') || '', // CEP, preenchido com zeros à esquerda se necessário
        '32323232', // Exemplo fixo para telefone ou outros dados
        user.email?.slice(0, 30) || '', // E-mail, ajustado para 30 caracteres
      ]
        .join(''); // Junta todos os campos sem separadores

      return userData;
    });

    // Gerar o conteúdo do arquivo txt
    const fileContent = [header, ...formattedData].join('\n');

    // Caminho para salvar o arquivo
    const today = new Date();
    const assistenciaDir = path.join(process.cwd(), 'assistenciaArquivos');
    const filePath = path.join(assistenciaDir, `assistencia_report_${today.toISOString().split('T')[0]}.txt`);

    // Garantir que a pasta assistenciaArquivos exista
    if (!fs.existsSync(assistenciaDir)) {
      await fs.promises.mkdir(assistenciaDir, { recursive: true });
    }

    // Salvar o arquivo .txt de forma assíncrona
    await fs.promises.writeFile(filePath, fileContent);

    // Retorna uma resposta confirmando o sucesso da operação
    return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });

  } catch (error) {
    console.error('Erro ao gerar arquivo:', error);
    return new NextResponse('Erro ao gerar o arquivo', { status: 500 });
  }
}
