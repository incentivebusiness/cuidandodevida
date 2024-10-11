import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export async function GET(req) {
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

  // Gerando conteúdo do arquivo
  let fileContent = 'TIPO DE ACAO\tCNPJ\tPRODUTO\tCPF\tNOME COMPLETO\tDATA DE NASCIMENTO\tTELEFONE\tSEXO\tE-mail\n';
  formattedData.forEach(user => {
    fileContent += `${user.actionType}\t${user.cnpj}\t${user.productCode}\t${user.cpf}\t${user.completeName}\t${user.birthDate}\t${user.cel}\t${user.gender}\t${user.email}\n`;
  });

  // Caminho para salvar o arquivo
  const filePath = path.join(process.cwd(), 'new_users_report.txt');

  // Salvando o arquivo
  fs.writeFileSync(filePath, fileContent);

  return new Response('Arquivo gerado com sucesso: new_users_report.txt', { status: 200 });
}
