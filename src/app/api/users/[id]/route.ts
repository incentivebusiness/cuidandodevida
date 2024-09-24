// app/api/user/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assumindo que você está usando Prisma como ORM

// Função para buscar o usuário pelo ID
async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

// Handler para requisições GET
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params; // Extrai o ID dos parâmetros da URL

  // Verifica se o 'id' pode ser convertido para número
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    // Busca o usuário pelo ID
    const user = await getUserById(userId);

    // Se o usuário não for encontrado
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Retorna os dados do usuário
    return NextResponse.json(user, { status: 200 });

  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return NextResponse.json({ error: 'Erro ao buscar usuário' }, { status: 500 });
  }
}
