// // // import { NextApiRequest, NextApiResponse } from 'next';
// // // import { PrismaClient } from '@prisma/client';
// // // import * as bcrypt from 'bcrypt';
// // // import jwt from 'jsonwebtoken';

// // // const prisma = new PrismaClient();

// // // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// // //   if (req.method === 'POST') {
// // //     const { email, password } = req.body;

// // //     try {
// // //       const user = await prisma.user.findUnique({
// // //         where: { email },
// // //       });

// // //       if (!user) {
// // //         return res.status(401).json({ error: 'Email ou senha inválidos' });
// // //       }

// // //       const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

// // //       if (!isPasswordValid) {
// // //         return res.status(401).json({ error: 'Email ou senha inválidos' });
// // //       }

// // //       // Gerar um token JWT
// // //       const token = jwt.sign(
// // //         { id: user.id, email: user.email },
// // //         process.env.JWT_SECRET as string,
// // //         { expiresIn: '1h' }
// // //       );

// // //       res.status(200).json({ message: 'Login bem-sucedido!', token });
// // //     } catch (error) {
// // //       console.error('Erro ao fazer login:', error);
// // //       res.status(500).json({ error: 'Erro ao fazer login' });
// // //     }
// // //   } else {
// // //     res.setHeader('Allow', ['POST']);
// // //     res.status(405).end(`Método ${req.method} não permitido`);
// // //   }
// // // }
// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { PrismaClient } from '@prisma/client';
// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';

// // const prisma = new PrismaClient();

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === 'POST') {
// //     const { email, password } = req.body;

// //     try {
// //       const user = await prisma.user.findUnique({
// //         where: { email },
// //       });

// //       if (!user) {
// //         return res.status(401).json({ error: 'Email ou senha inválidos' });
// //       }

// //       const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

// //       if (!isPasswordValid) {
// //         return res.status(401).json({ error: 'Email ou senha inválidos' });
// //       }

// //       // Gerar um token JWT
// //       const token = jwt.sign(
// //         { id: user.id, email: user.email },
// //         process.env.JWT_SECRET as string,
// //         { expiresIn: '1h' }
// //       );

// //       res.status(200).json({ message: 'Login bem-sucedido!', token });
// //     } catch (error) {
// //       console.error('Erro ao fazer login:', error);
// //       res.status(500).json({ error: 'Erro ao fazer login' });
// //     }
// //   } else {
// //     res.setHeader('Allow', ['POST']);
// //     res.status(405).end(`Método ${req.method} não permitido`);
// //   }
// // }
// // Em /pages/api/login.ts ou similar
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

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

//       const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

//       if (!isPasswordValid) {
//         return res.status(401).json({ error: 'Email ou senha inválidos' });
//       }

//       // Gerar um token JWT
//       const token = jwt.sign(
//         { id: user.id, email: user.email },
//         process.env.JWT_SECRET as string,
//         { expiresIn: '1h' }
//       );

//       res.status(200).json({ success: true, message: 'Login bem-sucedido!', token });
//     } catch (error) {
//       console.error('Erro ao fazer login:', error);
//       res.status(500).json({ error: 'Erro ao fazer login' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Método ${req.method} não permitido`);
//   }
// }
// Em /pages/api/login.ts ou similar
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Email ou senha inválidos' });
      }

      // Gerar um token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
      );

      res.status(200).json({ success: true, message: 'Login bem-sucedido!', token });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
