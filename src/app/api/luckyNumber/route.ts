// app/api/lucky-number/route.ts
import { prisma } from '../../../lib/prisma'; // Ajuste o caminho conforme necessário
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId'); // Pega o ID do usuário da query string

    if (!userId) {
      return NextResponse.json({ error: 'Usuário não fornecido' }, { status: 400 });
    }

    // Busca o número da sorte associado ao usuário
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: { luckyNumber: true }, // Inclui o número da sorte relacionado
    });

    if (!user || !user.luckyNumber) {
      return NextResponse.json({ error: 'Número da sorte não encontrado para o usuário' }, { status: 404 });
    }

    // Retorna o número da sorte
    return NextResponse.json({ number: user.luckyNumber.number });
  } catch (error) {
    console.error('Erro ao buscar número da sorte:', error);
    return NextResponse.json({ error: 'Erro ao buscar número da sorte' }, { status: 500 });
  }
}
