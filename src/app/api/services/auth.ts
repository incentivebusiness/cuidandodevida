// // import React, { createContext, useState, ReactNode } from 'react';
// // import { signInRequest } from '../api'; // Ajuste o caminho conforme necessário

// // type AuthContextType = {
// //     isAuthenticated: boolean;
// //     signIn: (email: string, password: string) => Promise<void>;
// // };

// // export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // type AuthProviderProps = {
// //     children: ReactNode;
// // };

// // export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
// //     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

// //     const signIn = async (email: string, password: string) => {
// //         try {
// //             const response = await signInRequest({ email, password });
// //             // Supondo que a resposta define se o login foi bem-sucedido
// //             if (response.success) {
// //                 setIsAuthenticated(true);
// //             } else {
// //                 // Lidar com falha de autenticação
// //                 setIsAuthenticated(false);
// //             }
// //         } catch (error) {
// //             console.error('Failed to sign in', error);
// //             setIsAuthenticated(false);
// //         }
// //     };

// //     return (
// //         <AuthContext.Provider value={{ isAuthenticated, signIn }}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };
// import type { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// // Exemplo de uma função fictícia para encontrar um usuário pelo e-mail
// async function findUserByEmail(email: string) {
//   // Implemente sua lógica para encontrar um usuário no banco de dados
//   return {
//     id: 'user-id',
//     email: 'user@example.com',
//     passwordHash: '$2a$10$W6/.uT5KpG1jq77T9.NKrOZBq/xBOfAQ9CV.PfeF7dZvs5fr6u5z6', // Senha: "password123"
//   };
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     // Verifique se o e-mail e a senha foram fornecidos
//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email e senha são obrigatórios' });
//     }

//     try {
//       const user = await findUserByEmail(email);

//       if (!user) {
//         return res.status(401).json({ message: 'Usuário não encontrado' });
//       }

//       // Verifique a senha
//       const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

//       if (!isPasswordValid) {
//         return res.status(401).json({ message: 'Senha inválida' });
//       }

//       // Crie o JWT
//       const token = jwt.sign(
//         { id: user.id, email: user.email },
//         process.env.JWT_SECRET!,
//         { expiresIn: '1h' }
//       );

//       // Envie o token como resposta
//       res.status(200).json({ token });
//     } catch (error) {
//       res.status(500).json({ message: 'Erro no servidor' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
