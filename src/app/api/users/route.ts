

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    // Obtém os dados do corpo da requisição
    const { 
      name, 
      email, 
      password, 
      confirmPassword, 
      socialName, 
      cpf, 
      gender, 
      birthDate, 
      cel 
    } = await request.json();

    // Valida se todos os campos obrigatórios estão presentes
    if (!name || !email || !password || !confirmPassword || !cpf || !birthDate || !cel) {
      return NextResponse.json({
        success: false,
        message: "Preencha todos os campos obrigatórios!",
      });
    }

    // Verifica se o usuário já existe
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      return NextResponse.json({
        success: false,
        message: "Usuário com esse e-mail já existe!",
      });
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      return NextResponse.json({
        success: false,
        message: "Senhas não coincidem!",
      });
    }

    // Criptografa a senha
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Cria o novo usuário no banco de dados
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        socialName,
        cpf,
        gender,
        birthDate: new Date(birthDate), // Certifique-se de converter a string para Date
        cel,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Usuário criado com sucesso!",
    });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json({
      success: false,
      message: "Erro ao criar usuário. Tente novamente mais tarde.",
    });
  }
}
