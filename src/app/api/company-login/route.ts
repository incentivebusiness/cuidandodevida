// src/pages/api/company-admin/login.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body; // Corrigido: Use 'password' ao invés de 'hashedpassword'

    // Encontra o administrador de empresa pelo e-mail
    const admin = await prisma.company.findUnique({
      where: { email },
    });

    // Verifica se o administrador existe e se a senha está correta
    if (!admin || !(await bcrypt.compare(password, admin.hashedPassword))) {
      return NextResponse.json(
        { message: 'E-mail ou senha incorretos' },
        { status: 401 }
      );
    }

    // Autenticação bem-sucedida
    return NextResponse.json(
      { message: 'Login bem-sucedido', admin },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao autenticar administrador de empresa', error: error.message },
      { status: 500 }
    );
  }
}
