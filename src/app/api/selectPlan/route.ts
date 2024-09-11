import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
  try {
    // Obtenha o token JWT usando a função getToken
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token || !token.email) {
      return NextResponse.json({ message: 'Usuário não autenticado ou e-mail não encontrado' }, { status: 401 });
    }

    const { planType } = await req.json();

    if (!planType) {
      return NextResponse.json({ message: 'Tipo de plano não fornecido' }, { status: 400 });
    }

    // Agora, temos certeza de que o e-mail é uma string válida
    const userEmail = token.email as string;

    // Atualize o plano selecionado para o usuário autenticado
    const user = await prisma.user.update({
      where: { email: userEmail },
      data: { plan_selected: planType },
    });

    return NextResponse.json({ message: 'Plano selecionado atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar o plano selecionado:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
