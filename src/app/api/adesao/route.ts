
// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   const today = new Date();
//   const startOfDay = new Date(today.setHours(0, 0, 0, 0));
//   const endOfDay = new Date(today.setHours(23, 59, 59, 999));

//   // Buscar usuários que foram criados hoje
//   const newUsers = await prisma.user.findMany({
//     where: {
//       created: {
//         gte: startOfDay,
//         lte: endOfDay,
//       },
//     },
//     include: {
//       adesao: true, // Para trazer a adesão associada ao usuário
//     },
//   });

//   // Formatando os dados
//   const formattedData = newUsers.map(user => ({
//     actionType: user.adesao?.actionType || '',
//     cnpj: user.adesao?.cnpj || '',
//     productCode: user.adesao?.productCode || '',
//     cpf: user.cpf,
//     completeName: user.name,
//     birthDate: user.birthDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
//     cel: user.cel,
//     gender: user.gender,
//     email: user.email,
//   }));

//   // Gerando conteúdo do arquivo
//   let fileContent = 'TIPO DE ACAO\tCNPJ\tPRODUTO\tCPF\tNOME COMPLETO\tDATA DE NASCIMENTO\tTELEFONE\tSEXO\tE-mail\n';
//   formattedData.forEach(user => {
//     fileContent += `${user.actionType}\t${user.cnpj}\t${user.productCode}\t${user.cpf}\t${user.completeName}\t${user.birthDate}\t${user.cel}\t${user.gender}\t${user.email}\n`;
//   });

//   // Caminho para salvar o arquivo
//   const filePath = path.join(process.cwd(), 'new_users_report.txt');

//   // Salvando o arquivo de forma assíncrona
//   await fs.promises.writeFile(filePath, fileContent);

//   // Lendo o arquivo de forma assíncrona
//   const fileBuffer = await fs.promises.readFile(filePath);

//   // Retornando o arquivo como um download
//   return new NextResponse(fileBuffer, {
//     status: 200,
//     headers: {
//       'Content-Type': 'text/plain',
//       'Content-Disposition': 'attachment; filename="new_users_report.txt"',
//     },
//   });
// }
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET() {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  // Buscar usuários que foram criados hoje
  const newUsers = await prisma.user.findMany({
    where: {
      created: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    include: {
      adesao: true, // Para trazer a adesão associada ao usuário
    },
  });

  // Formatando os dados
  const formattedData = newUsers.map(user => ({
    actionType: user.adesao?.actionType || '',
    cnpj: user.adesao?.cnpj || '',
    productCode: user.adesao?.productCode || '',
    cpf: user.cpf,
    completeName: user.name,
    birthDate: user.birthDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
    cel: user.cel,
    gender: user.gender,
    email: user.email,
  }));

  // Gerando conteúdo do arquivo CSV
  let fileContent = 'TIPO DE ACAO,CNPJ,PRODUTO,CPF,NOME COMPLETO,DATA DE NASCIMENTO,TELEFONE,SEXO,E-mail\n';
  formattedData.forEach(user => {
    fileContent += `${user.actionType},${user.cnpj},${user.productCode},${user.cpf},${user.completeName},${user.birthDate},${user.cel},${user.gender},${user.email}\n`;
  });

  // Caminho para salvar o arquivo dentro da pasta adesaoArquivos
  const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
  const filePath = path.join(adesaoDir, `new_users_report_${today.toISOString().split('T')[0]}.csv`);

  // Garantir que a pasta adesaoArquivos exista
  if (!fs.existsSync(adesaoDir)) {
    await fs.promises.mkdir(adesaoDir, { recursive: true });
  }

  // Salvando o arquivo CSV de forma assíncrona
  await fs.promises.writeFile(filePath, fileContent);

  // Retorna uma resposta confirmando o sucesso da operação
  return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });
}
