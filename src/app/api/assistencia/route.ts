// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   try {
//     const today = new Date();
//     const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//     const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//     // Buscar usuários criados hoje
//     const users = await prisma.user.findMany({
//       where: {
//         created: {
//           gte: startOfDay,
//           lte: endOfDay,
//         },
//       },
//       include: {
//         adesao: true,
//       },
//     });

//     if (users.length === 0) {
//       return NextResponse.json({ message: 'Nenhum usuário encontrado hoje' }, { status: 404 });
//     }

//     // Formatar os dados
//     const formattedData = users.map((user) => {
//       const adesao = user.adesao || {};

//       return [
//         user.contractNumber.padEnd(18), // Número do contrato (1-18)
//         adesao.versionNumber?.toString().padEnd(15), // Número da versão do contrato (19-33)
//         adesao.mainKey?.padEnd(30), // Chave principal (34-63)
//         adesao.subKey?.padEnd(15), // Sub-chave principal (64-78)
//         'I', // Tipo de movimento (79)
//         user.name.padEnd(80), // Nome completo do usuário (80-159)
//         user.startDate.toISOString().split('T')[0].replace(/-/g, ''), // Data de início (160-167)
//         user.endDate.toISOString().split('T')[0].replace(/-/g, ''), // Data de fim (168-175)
//         user.cnpj.padStart(14, '0'), // CNPJ (176-189)
//         user.cpf.padStart(11, '0'), // CPF (190-200)
//         user.address.padEnd(80), // Endereço (201-280)
//         user.uf.padEnd(2), // UF (281-282)
//         user.city.padEnd(35), // Cidade (283-317)
//         user.district.padEnd(35), // Bairro (318-352)
//         user.cep.padEnd(10), // CEP (353-362)
//         user.phone.padEnd(20), // Telefone (363-382)
//         user.email.padEnd(60), // E-mail (1066-1125)
//       ].join(''); // Unir todos os campos em uma única string
//     });

//     // Gerar o conteúdo do arquivo
//     const fileContent = formattedData.join('\n');

//     // Caminho para salvar o arquivo
//     const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
//     const filePath = path.join(adesaoDir, `adesao_report_${today.toISOString().split('T')[0]}.csv`);

//     // Garantir que a pasta adesaoArquivos exista
//     if (!fs.existsSync(adesaoDir)) {
//       await fs.promises.mkdir(adesaoDir, { recursive: true });
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
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    // Buscar usuários criados hoje
    const users = await prisma.user.findMany({
      where: {
        created: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        adesao: true,
      },
    });

    if (users.length === 0) {
      return NextResponse.json({ message: 'Nenhum usuário encontrado hoje' }, { status: 404 });
    }

    // Formatar os dados
    const formattedData = users.map((user) => {
      const adesao = user.adesao || {};

      return [
        'FIXED_CONTRACT_12345'.padEnd(18), // Valor fixo para Número do contrato (1-18)
        adesao.versionNumber?.toString().padEnd(15), // Número da versão do contrato (19-33)
        adesao.mainKey?.padEnd(30), // Chave principal (34-63)
        adesao.subKey?.padEnd(15), // Sub-chave principal (64-78)
        'I', // Tipo de movimento (79)
        user.name.padEnd(80), // Nome completo do usuário (80-159)
        user.startDate.toISOString().split('T')[0].replace(/-/g, ''), // Data de início (160-167)
        user.endDate.toISOString().split('T')[0].replace(/-/g, ''), // Data de fim (168-175)
        user.cnpj.padStart(14, '0'), // CNPJ (176-189)
        user.cpf.padStart(11, '0'), // CPF (190-200)
        user.address.padEnd(80), // Endereço (201-280)
        user.uf.padEnd(2), // UF (281-282)
        user.city.padEnd(35), // Cidade (283-317)
        user.district.padEnd(35), // Bairro (318-352)
        user.cep.padEnd(10), // CEP (353-362)
        user.phone.padEnd(20), // Telefone (363-382)
        user.email.padEnd(60), // E-mail (1066-1125)
      ].join(''); // Unir todos os campos em uma única string
    });

    // Gerar o conteúdo do arquivo
    const fileContent = formattedData.join('\n');

    // Caminho para salvar o arquivo
    const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
    const filePath = path.join(adesaoDir, `adesao_report_${today.toISOString().split('T')[0]}.csv`);

    // Garantir que a pasta adesaoArquivos exista
    if (!fs.existsSync(adesaoDir)) {
      await fs.promises.mkdir(adesaoDir, { recursive: true });
    }

    // Salvar o arquivo de forma assíncrona
    await fs.promises.writeFile(filePath, fileContent);

    return NextResponse.json({ message: `Arquivo gerado com sucesso: ${filePath}` }, { status: 200 });
  } catch (error) {
    console.error('Erro ao gerar arquivo:', error);
    return NextResponse.json({ error: 'Erro ao gerar o arquivo' }, { status: 500 });
  }
}
