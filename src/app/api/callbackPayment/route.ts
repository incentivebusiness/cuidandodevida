// pages/api/mercadopago/callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma'; // Ajuste de acordo com a sua estrutura de pastas

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { payment_id, status, external_reference } = req.query;

  if (status === 'approved') {
    try {
      // Gere um número da sorte aleatório
      const luckyNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

      // Atualize o usuário com o luckyNumber no banco de dados
      await prisma.user.update({
        where: { id: parseInt(external_reference as string) },
        data: { luckyNumber }
      });

      // Redirecione o usuário para uma página de sucesso com o número da sorte
      res.redirect(`/success?luckyNumber=${luckyNumber}`);
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      res.status(500).json({ error: 'Erro ao processar o pagamento' });
    }
  } else {
    res.redirect('/failed'); // Redireciona para uma página de falha, se necessário
  }
}
