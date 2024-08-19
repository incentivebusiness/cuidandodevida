import { PrismaClient } from '@prisma/client';
import { parseFile } from '../../utils/parseFile';
import { promises as fsPromises } from 'fs';
import path from 'path';
import multer from 'multer';
import { withMiddleware } from '../../middleware/withMiddleware';

const prisma = new PrismaClient();

// Configurar multer para armazenar o arquivo na memória
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
      if (file.mimetype !== 'text/plain') {
        return cb(new Error('Apenas arquivos .txt são permitidos'));
      }
      cb(null, true);
    },
  });
  



// Desabilitar o bodyParser padrão do Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
      }

      // Criar a pasta tmp se não existir
      const tmpDir = path.join(process.cwd(), 'tmp');
      await fsPromises.mkdir(tmpDir, { recursive: true });

      const tempPath = path.join(tmpDir, file.originalname);

      // Salvar o arquivo temporariamente
      await fsPromises.writeFile(tempPath, file.buffer);

      // Processar o arquivo
      const records = await parseFile(tempPath);

      // Salvar os dados no banco
      await prisma.luckyNumber.createMany({
        data: records,
      });

      // Limpar o arquivo temporário
      await fsPromises.unlink(tempPath);

      res.status(200).json({ message: 'Arquivo processado e dados salvos com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao processar o arquivo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};

// Aplicar o middleware de upload antes do handler
export default withMiddleware(upload.single('file'), handler);
