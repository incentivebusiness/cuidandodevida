// import { getSession } from 'next-auth/react';
// import { prisma } from '@/lib/prisma'; 

// export default async function handler(req: any, res: any) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ message: 'Não autorizado' });
//   }

//   const userEmail = session?.user?.email;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: userEmail },
//       select: { contrated_plan: true }, 
//     });

//     if (!user || !user.contrated_plan) {
//       return res.status(404).json({ message: 'Plano não encontrado' });
//     }

//     return res.status(200).json({ plan: user.contrated_plan });
//   } catch (error) {
//     return res.status(500).json({ message: 'Erro ao buscar plano' });
//   }
// }
// app/api/user/plan/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; 
import { getServerSession } from 'next-auth'; // Importando o getServerSession
import { authOptions } from '@/lib/auth'; // Ajuste conforme o caminho do seu arquivo de opções

export async function GET(request: Request) {
  const session = await getServerSession(authOptions); // Obtém a sessão do usuário

  if (!session) {
    return NextResponse.json({ message: 'Não autorizado' }, { status: 401 });
  }

  const userEmail = session.user?.email;

  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { contrated_plan: true }, 
    });

    if (!user || !user.contrated_plan) {
      return NextResponse.json({ message: 'Plano não encontrado' }, { status: 404 });
    }

    return NextResponse.json({ plan: user.contrated_plan }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar plano:', error);
    return NextResponse.json({ message: 'Erro ao buscar plano' }, { status: 500 });
  }
}
