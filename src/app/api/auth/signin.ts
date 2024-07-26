// // pages/api/auth/signin.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';
// import { compare } from 'bcryptjs';

// const secret = process.env.JWT_SECRET || 'your_secret_key'; // Defina uma chave secreta segura no .env

// // Mock database user
// const mockUser = {
//   email: 'user@example.com',
//   password: '$2a$10$U4sL03PTP7KnJ1PeQqDJ5u6l7n4L4vOdydxkzE8P6AtP4HDC7jv/a' // hashed 'password123'
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     // Validate user credentials (replace with real database logic)
//     if (email === mockUser.email && await compare(password, mockUser.password)) {
//       // Generate JWT
//       const token = jwt.sign({ email }, secret, { expiresIn: '1h' });
//       res.status(200).json({ token });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
