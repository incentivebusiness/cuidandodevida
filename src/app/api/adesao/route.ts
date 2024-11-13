

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
//     actionType: 1,
//     cnpj: '12345678000195', 
//     productCode: user.adesao?.productCode || '',
//     cpf: user.cpf,
//     completeName: user.name,
//     birthDate: user.birthDate.toISOString().split('T')[0], // Formato YYYY-MM-DD
//     cel: user.cel,
//     gender: user.gender,
//     email: user.email,
//   }));

//   // Gerando conteúdo do arquivo CSV
//   let fileContent = 'TIPO DE ACAO,CNPJ,PRODUTO,CPF,NOME COMPLETO,DATA DE NASCIMENTO,TELEFONE,SEXO,E-mail\n';
//   formattedData.forEach(user => {
//     fileContent += `${user.actionType},${user.cnpj},${user.productCode},${user.cpf},${user.completeName},${user.birthDate},${user.cel},${user.gender},${user.email}\n`;
//   });

//   // Caminho para salvar o arquivo dentro da pasta adesaoArquivos
//   const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
//   const filePath = path.join(adesaoDir, `new_users_report_${today.toISOString().split('T')[0]}.csv`);

//   // Garantir que a pasta adesaoArquivos exista
//   if (!fs.existsSync(adesaoDir)) {
//     await fs.promises.mkdir(adesaoDir, { recursive: true });
//   }

//   // Salvando o arquivo CSV de forma assíncrona
//   await fs.promises.writeFile(filePath, fileContent);

//   // Retorna uma resposta confirmando o sucesso da operação
//   return new NextResponse(`Arquivo gerado com sucesso em: ${filePath}`, { status: 200 });
// }


//------------------------------------------------------------------------

// import { PrismaClient } from '@prisma/client';
// import { User } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const prisma = new PrismaClient();

// export async function GET() {
//   const today = new Date();
//   const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Nova data para o início do dia
//   const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // Nova data para o fim do dia

//   // Buscar usuários novos (adesões) e usuários alterados (alterações) para o dia
//   const newUsers = await prisma.user.findMany({
//     where: { created: { gte: startOfDay, lte: endOfDay } },
//     include: { adesao: true },
//   });

//   const updatedUsers = await prisma.user.findMany({
//     where: { updated: { gte: startOfDay, lte: endOfDay } },
//     include: { adesao: true },
//   });

//   // Lista para armazenar os arquivos criados
//   const filesCreated: string[] = [];

//   // Função para gerar arquivos CSV
//   async function generateCsvFile(users: (User & { adesao: any })[], actionPrefix: string) {
//     const formattedData = users.map(user => ({
//       actionType: actionPrefix === 'ADESAO' ? 'INCLUSAO' : 'ALTERACAO',
//       cnpj: '12345678000195',
//       productCode: user.adesao?.productCode || '', // Verificar se adesao existe
//       cpf: user.cpf,
//       completeName: user.name.toUpperCase(),
//       birthDate: user.birthDate.toISOString().split('T')[0],
//       cel: user.cel,
//       gender: user.gender.toUpperCase(),
//       email: user.email.toUpperCase(),
//     }));

//     // Criar conteúdo do arquivo CSV
//     let fileContent = 'TIPO DE ACAO;CNPJ;PRODUTO;CPF;NOME COMPLETO;DATA DE NASCIMENTO;TELEFONE;SEXO;EMAIL\n';
//     formattedData.forEach(user => {
//       fileContent += `${user.actionType};${user.cnpj};${user.productCode};${user.cpf};${user.completeName};${user.birthDate};${user.cel};${user.gender};${user.email}\n`;
//     });

//     // Gerar nome único para o arquivo com timestamp
//     const timestamp = `${today.getDate().toString().padStart(2, '0')}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}${today.getMinutes().toString().padStart(2, '0')}${today.getSeconds().toString().padStart(2, '0')}`;
//     const fileName = `${actionPrefix}_ONIX_${timestamp}.csv`;

//     // Caminho para salvar o arquivo
//     const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
//     const filePath = path.join(adesaoDir, fileName);

//     // Garantir que a pasta exista
//     if (!fs.existsSync(adesaoDir)) {
//       await fs.promises.mkdir(adesaoDir, { recursive: true });
//     }

//     // Escrever o conteúdo no arquivo
//     await fs.promises.writeFile(filePath, fileContent, { encoding: 'utf-8' });

//     filesCreated.push(filePath);
//   }

//   // Gerar arquivos para adesão e alteração se houver usuários
//   const promises = [];

//   if (newUsers.length > 0) {
//     promises.push(generateCsvFile(newUsers, 'ADESAO')); // Geração de arquivo de adesão
//   }

//   if (updatedUsers.length > 0) {
//     promises.push(generateCsvFile(updatedUsers, 'ALTERACAO')); // Geração de arquivo de alteração
//   }

//   // Esperar que todos os arquivos sejam gerados
//   await Promise.all(promises);

//   // Responder com os caminhos dos arquivos criados
//   if (filesCreated.length > 0) {
//     return new NextResponse(`Arquivos gerados com sucesso:\n${filesCreated.join('\n')}`, { status: 200 });
//   } else {
//     return new NextResponse('Nenhum novo usuário ou alteração encontrada para gerar arquivos.', { status: 200 });
//   }
// }


import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET() {
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  // Buscar novos usuários (adesões) e usuários alterados (alterações) do dia
  const newUsers = await prisma.user.findMany({
    where: { created: { gte: startOfDay, lte: endOfDay } },
    include: { adesao: true },
  });

  const updatedUsers = await prisma.user.findMany({
    where: { updated: { gte: startOfDay, lte: endOfDay } },
    include: { adesao: true },
  });

  const filesCreated: string[] = [];

  // Função para gerar arquivos CSV
  async function generateCsvFile(users: (User & { adesao: any })[], actionPrefix: string) {
    const formattedData = users.map(user => ({
      actionType: actionPrefix === 'ADESAO' ? '1' : '3', // Padrão como '3' para cancelamento
      cnpj: '12345678000195',
      productCode: user.adesao?.productCode || '',
      cpf: user.cpf,
      completeName: user.name.toUpperCase(),
      birthDate: user.birthDate.toISOString().split('T')[0].replace(/-/g, ''), // Remover hífens
      cel: user.cel,
      gender: user.gender.toUpperCase(),
      email: user.email.toUpperCase(),
    }));

    let fileContent = 'TIPO DE ACAO;CNPJ;PRODUTO;CPF;NOME COMPLETO;DATA DE NASCIMENTO;TELEFONE;SEXO;EMAIL\n';
    formattedData.forEach(user => {
      fileContent += `${user.actionType};${user.cnpj};${user.productCode};${user.cpf};${user.completeName};${user.birthDate};${user.cel};${user.gender};${user.email}\n`;
    });

    const timestamp = `${today.getDate().toString().padStart(2, '0')}${(today.getMonth() + 1).toString().padStart(2, '0')}${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}${today.getMinutes().toString().padStart(2, '0')}${today.getSeconds().toString().padStart(2, '0')}`;
    const fileName = `${actionPrefix}_ONIX_${timestamp}.csv`;

    const adesaoDir = path.join(process.cwd(), 'adesaoArquivos');
    const filePath = path.join(adesaoDir, fileName);

    if (!fs.existsSync(adesaoDir)) {
      await fs.promises.mkdir(adesaoDir, { recursive: true });
    }

    await fs.promises.writeFile(filePath, fileContent, { encoding: 'utf-8' });
    filesCreated.push(filePath);
  }

  const promises = [];

  if (newUsers.length > 0) {
    promises.push(generateCsvFile(newUsers, 'ADESAO'));
  }

  if (updatedUsers.length > 0) {
    promises.push(generateCsvFile(updatedUsers, 'ALTERACAO'));
  }

  await Promise.all(promises);

  if (filesCreated.length > 0) {
    return new NextResponse(`Arquivos gerados com sucesso:\n${filesCreated.join('\n')}`, { status: 200 });
  } else {
    return new NextResponse('Nenhum novo usuário ou alteração encontrada para gerar arquivos.', { status: 200 });
  }
}
