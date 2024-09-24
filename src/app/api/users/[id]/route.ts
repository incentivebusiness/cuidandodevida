// pages/api/user/[id].js
import { getUserById } from '@/lib/user'; 

export default async function handler(req: any, res : any) {
  const {
    query: { id },
  } = req;

  if (req.method === 'GET') {
    try {
      const user = await getUserById(id); 
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
