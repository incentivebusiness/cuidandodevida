// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import * as bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     try {
//       const user = await prisma.user.findUnique({
//         where: { email },
//       });

//       if (!user) {
//         return res.status(401).json({ error: 'Email ou senha inválidos' });
//       }

//       const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: 'Email ou senha inválidos' });
//       }

//       // Defina a sessão do usuário aqui, por exemplo, usando cookies ou JWT
//       res.status(200).json({ message: 'Login bem-sucedido!' });
//     } catch (error) {
//       console.error('Erro ao fazer login:', error);
//       res.status(500).json({ error: 'Erro ao fazer login' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Método ${req.method} não permitido`);
//   }
// }
