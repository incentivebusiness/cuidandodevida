// pages/api/user/[id].js
import { getUserById } from '../../../lib/db'; // Função que busca o usuário no banco de dados

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  if (req.method === 'GET') {
    try {
      const user = await getUserById(id); // Implemente essa função de acordo com seu ORM
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
