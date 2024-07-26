// import { PrismaClient } from '@prisma/client';
// import fs from 'fs';
// import path from 'path';
// import { parse } from 'json2csv';

// // Crie uma instância do PrismaClient
// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email } = req.body;

//     try {
//       // Conecte ao banco de dados e insira o novo usuário
//       await prisma.user.create({
//         data: { name, email },
//       });

//       // Salve os dados em um arquivo CSV
//       const filePath = path.resolve('data.csv');
//       const data = [{ name, email }];
//       const csv = parse(data);

//       fs.appendFileSync(filePath, csv + '\n');

//       res.status(200).json({ message: 'Dados inseridos e salvos com sucesso!' });
//     } catch (error) {
//       console.error('Erro:', error);
//       res.status(500).json({ error: 'Erro ao processar dados' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Método ${req.method} não permitido`);
//   }
// }
