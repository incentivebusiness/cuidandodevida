

// // app/api/assistencia/route.ts
// import { PrismaClient, User } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     // Buscar usuários com um plano específico
//     const assistencias: User[] = await prisma.user.findMany({
//       where: {
//         plan_selected: 'BASICO', // Altere conforme o plano desejado
//       },
//       include: {
//         adesao: true,
//         address: true,
//       },
//     });

//     if (assistencias.length === 0) {
//       return NextResponse.json({ message: 'Nenhum usuário encontrado com o plano especificado.' }, { status: 404 });
//     }

//     // Formatar os dados
//     const formattedData = assistencias.map((user) => {
//       const adesao = user.adesao;
    
//       return [
//         'FIXED_CONTRACT_12345'.padEnd(18), // Número do contrato
//         adesao?.versionNumber?.padEnd(15) || ''.padEnd(15), // Número da versão
//         adesao?.mainKey?.padEnd(30) || ''.padEnd(30), // Chave principal
//         adesao?.subKey?.padEnd(15) || ''.padEnd(15), // Sub-chave
//         'I', // Tipo de movimento
//         user.name.padEnd(80), // Nome completo
//         user.created.toISOString().split('T')[0].replace(/-/g, ''), // Data de início
//         user.updated.toISOString().split('T')[0].replace(/-/g, ''), // Data de fim
//         adesao?.cnpj?.padStart(14, '0'), // CNPJ
//         user.cpf.padStart(11, '0'), // CPF
//         (user.address?.street || '').padEnd(80), // Endereço
//         (user.address?.state || '').padEnd(2), // UF
//         (user.address?.city || '').padEnd(35), // Cidade
//         (user.address?.neighborhood || '').padEnd(35), // Bairro
//         (user.address?.zipCode || '').padEnd(10), // CEP
//         user.cel.padEnd(20), // Telefone
//         user.email.padEnd(60), // E-mail
//       ].join(''); // Unir todos os campos em uma única string
//     });

//     // Gerar o conteúdo do arquivo
//     const fileContent = formattedData.join('\n');

//     // Caminho para salvar o arquivo
//     const today = new Date();
//     const assistenciaDir = path.join(process.cwd(), 'assistenciaArquivos');
//     const filePath = path.join(assistenciaDir, `assistencia_report_${today.toISOString().split('T')[0]}.csv`);

//     // Garantir que a pasta assistenciaArquivos exista
//     if (!fs.existsSync(assistenciaDir)) {
//       await fs.promises.mkdir(assistenciaDir, { recursive: true });
//     }

//     // Salvar o arquivo de forma assíncrona
//     await fs.promises.writeFile(filePath, fileContent);

//     return NextResponse.json({ message: `Arquivo gerado com sucesso: ${filePath}` }, { status: 200 });
//   } catch (error) {
//     console.error('Erro ao gerar arquivo:', error);
//     return NextResponse.json({ error: 'Erro ao gerar o arquivo' }, { status: 500 });
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
        plan_selected: 'BASICO', // Altere conforme o plano desejado
      },
      include: {
        adesao: true,
        address: true,
      },
    });

    if (assistencias.length === 0) {
      return new NextResponse('Nenhum usuário encontrado com o plano especificado.', { status: 404 });
    }

    // Formatar os dados
    const formattedData = assistencias.map((user) => {
      const adesao = user.adesao || {}; // Garante que adesao não seja null

      return [
        'FIXED_CONTRACT_12345'.padEnd(18), // Número do contrato
        '1'.padEnd(15), // Número da versão (fixo)
        '2'.padEnd(30), // Chave principal (fixa)
        '3'.padEnd(15), // S
        'I', // Tipo de movimento
        user.name.padEnd(80), // Nome completo
        user.created.toISOString().split('T')[0].replace(/-/g, ''), // Data de início
        user.updated.toISOString().split('T')[0].replace(/-/g, ''), // Data de fim
        adesao?.cnpj?.padStart(14, '0') || ''.padStart(14, '0'), // CNPJ
        user.cpf.padStart(11, '0'), // CPF
        (user.address?.street || '').padEnd(80), // Endereço
        (user.address?.state || '').padEnd(2), // UF
        (user.address?.city || '').padEnd(35), // Cidade
        (user.address?.neighborhood || '').padEnd(35), // Bairro
        (user.address?.zipCode || '').padEnd(10), // CEP
        user.cel.padEnd(20), // Telefone
        user.email.padEnd(60), // E-mail
      ].join(''); // Unir todos os campos em uma única string
    });

    // Gerar o conteúdo do arquivo
    let fileContent = formattedData.join('\n');

    // Caminho para salvar o arquivo
    const today = new Date();
    const assistenciaDir = path.join(process.cwd(), 'assistenciaArquivos');
    const filePath = path.join(assistenciaDir, `assistencia_report_${today.toISOString().split('T')[0]}.csv`);

    // Garantir que a pasta assistenciaArquivos exista
    if (!fs.existsSync(assistenciaDir)) {
      await fs.promises.mkdir(assistenciaDir, { recursive: true });
    }

    // Salvar o arquivo CSV de forma assíncrona
    await fs.promises.writeFile(filePath, fileContent);

    // Retorna uma resposta confirmando o sucesso da operação
    return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });

  } catch (error) {
    console.error('Erro ao gerar arquivo:', error);
    return new NextResponse('Erro ao gerar o arquivo', { status: 500 });
  }
}
