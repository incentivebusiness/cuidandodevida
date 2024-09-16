import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Dados recebidos:', body);
    const { name, cpf, email, companyId, role } = body;

    // Verifica se o CPF já foi pré-cadastrado
    const existing = await prisma.preRegister.findUnique({
      where: { cpf },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'Funcionário já cadastrado' },
        { status: 400 }
      );
    }

    // Cria o pré-cadastro
    const preRegistered = await prisma.preRegister.create({
      data: {
        name,
        cpf,
        email,
        role,  // Incluindo o papel
        companyId: parseInt(companyId, 10),
        completed: false,
      },
    });

    return NextResponse.json(
      { success: true, message: 'Pré-cadastro realizado com sucesso', preRegistered },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro no pré-cadastro:', error);
    return NextResponse.json(
      { message: 'Erro no pré-cadastro', error: error },
      { status: 500 }
    );
  }
}
