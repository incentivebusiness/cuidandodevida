import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const hashPassword = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: {
          name,
          email,
          passwordHash: hashPassword,
        },
      });

      res.status(200).json({ message: 'Conta criada com sucesso!' });
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      res.status(500).json({ error: 'Erro ao criar conta' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
