// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
// import { parseFile } from '../../utils/parseFile';
// import { promises as fsPromises } from 'fs';
// import path from 'path';
// import multer from 'multer';

// const prisma = new PrismaClient();

// const upload = multer({
//   storage: multer.memoryStorage(),
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype !== 'text/plain') {
//       return cb(new Error('Apenas arquivos .txt são permitidos'));
//     }
//     cb(null, true);
//   },
// });

// // Desativar o parsing do body padrão do Next.js para lidar com FormData
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   // Aplicar multer manualmente no middleware
//   upload.single('file')(req, res, async function (err) {
//     if (err) {
//       console.error('Erro no upload:', err);
//       return res.status(400).json({ error: err.message });
//     }

//     try {
//       const file = req.file;
//       console.log('Requisição recebida. Arquivo:', file); // Verifica se o arquivo foi recebido

//       if (!file) {
//         console.log('Nenhum arquivo foi enviado'); // Log se o arquivo estiver ausente
//         return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
//       }

//       const tmpDir = path.join(process.cwd(), 'tmp');
//       await fsPromises.mkdir(tmpDir, { recursive: true });
//       console.log('Diretório temporário criado:', tmpDir); // Log para verificar a criação do diretório

//       const tempPath = path.join(tmpDir, file.originalname);
//       await fsPromises.writeFile(tempPath, file.buffer);
//       console.log('Arquivo temporário salvo:', tempPath); // Log para verificar o salvamento do arquivo

//       const records = await parseFile(tempPath);
//       console.log('Registros extraídos:', records); // Log para verificar os registros extraídos

//       await prisma.luckyNumber.createMany({ data: records });
//       console.log('Dados salvos no banco de dados'); // Log para confirmar a inserção no banco de dados

//       await fsPromises.unlink(tempPath);
//       console.log('Arquivo temporário excluído:', tempPath); // Log para confirmar a exclusão do arquivo

//       return res.status(200).json({ message: 'Arquivo processado e dados salvos com sucesso!' });
//     } catch (error) {
//       console.error('Erro ao processar a requisição:', error); // Log para capturar e mostrar qualquer erro
//       return res.status(500).json({ error: 'Erro ao processar o arquivo' });
//     }
//   });
// }
// pages/api/upload.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import multer from 'multer';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const upload = multer({ storage: multer.memoryStorage() }); // Armazenamento em memória

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     upload.single('file')(req, res, async (err) => {
//       if (err) {
//         return res.status(400).json({ error: err.message });
//       }

//       if (!req.file) {
//         return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
//       }

//       try {
//         const fileContent = req.file.buffer.toString(); // Lê o conteúdo do arquivo como string
//         const records = processFileContent(fileContent); // Processa o conteúdo

//         await prisma.luckyNumber.createMany({ data: records }); // Insere os dados no banco
//         return res.status(200).json({ message: 'Dados salvos com sucesso!' });
//       } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Erro ao processar o arquivo' });
//       }
//     });
//   } else {
//     return res.status(405).json({ error: 'Método não permitido' });
//   }
// };

// // Função para processar o conteúdo do arquivo
// const processFileContent = (content: string) => {
//   const lines = content.split('\n'); // Separa as linhas
//   const records = lines.map((line) => ({
//     number: line.trim(), // Adiciona o número da sorte
//   })).filter(record => record.number); // Remove linhas vazias

//   return records;
// };

// export default handler;
// pages/api/luckyNumbers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '@/lib/prisma'; // Ajuste o caminho conforme sua estrutura

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { numbers } = req.body;

    if (!numbers || !Array.isArray(numbers)) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    try {
      const createdNumbers = await prisma.luckyNumber.createMany({
        data: numbers.map((number: string) => ({ number })),
      });
      return res.status(200).json({ message: 'Numbers saved successfully', createdNumbers });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save numbers' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
