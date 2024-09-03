
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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
      cel,
      address,
    } = await request.json();

    // Valida se todos os campos obrigatórios estão presentes
    if (!name || !email || !password || !confirmPassword || !cpf || !birthDate || !cel || !address) {
      return NextResponse.json({
        success: false,
        message: "Preencha todos os campos obrigatórios!",
      });
    }

    // Valida o formato do e-mail
    if (!isValidEmail(email)) {
      return NextResponse.json({
        success: false,
        message: "E-mail inválido!",
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

      // Verifica se o usuário com o CPF já existe
      const cpfExist = await prisma.user.findUnique({
        where: {
          cpf,
        },
      });
  
      if (cpfExist) {
        return NextResponse.json({
          success: false,
          message: "Usuário com esse CPF já existe!",
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

    // Cria o endereço na tabela `Address`
    const createdAddress = await prisma.address.create({
      data: {
        street: address.street,
        number: address.number,
        complement: address.complement,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      },
    });

    // Cria o novo usuário no banco de dados e associa o endereço
    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        socialName,
        cpf,
        gender,
        birthDate: new Date(birthDate),
        cel,
        addressId: createdAddress.id, // Associa o endereço ao usuário
        role: "USER",
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
