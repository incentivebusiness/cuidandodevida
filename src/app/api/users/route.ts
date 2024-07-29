import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const {name, email, password, confirmPassword } = await request.json();

  if (!email || !password || !confirmPassword) {
    return NextResponse.json({
      success: false,
      message: "Preencha todos os campos!",
    });
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExist) {
    return NextResponse.json({
      success: false,
      message: "Usuário com esse email já existe!",
    });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({
      success: false,
      message: "Senhas não coincidem!",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Usuário criado com sucesso!",
    });
  } catch (e) {
    return NextResponse.json(e);
  }
}