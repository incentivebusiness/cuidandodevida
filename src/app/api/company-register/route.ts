// src/pages/api/company/register.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cnpj, name, email, password } = body;

    // Verifica se o e-mail já está registrado
    const existingCompany = await prisma.company.findUnique({
      where: { email },
    });

    if (existingCompany) {
      return NextResponse.json(
        { message: 'E-mail já registrado' },
        { status: 400 }
      );
    }

    // Cria uma nova empresa
    const hashedPassword = await bcrypt.hash(password, 10);

    const newCompany = await prisma.company.create({
      data: {
        cnpj,
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'Empresa registrada com sucesso', newCompany },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao registrar a empresa', error: error.message },
      { status: 500 }
    );
  }
}
