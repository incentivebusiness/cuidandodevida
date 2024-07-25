import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function authenticated(fn: Function) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      jwt.verify(token, process.env.JWT_SECRET!);

      return await fn(req, res);
    } catch (error) {
      res.status(401).json({ message: 'Não autorizado' });
    }
  };
}
