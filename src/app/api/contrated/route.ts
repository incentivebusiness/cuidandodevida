import { getSession } from 'next-auth/react';
import { prisma } from '@/lib/prisma'; 

export default async function handler(req: any, res: any) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Não autorizado' });
  }

  const userEmail = session?.user?.email;

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { contrated_plan: true }, 
    });

    if (!user || !user.contrated_plan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    return res.status(200).json({ plan: user.contrated_plan });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar plano' });
  }
}
