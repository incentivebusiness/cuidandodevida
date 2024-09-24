// lib/user.js

import { prisma } from './prisma';

// Função para buscar um usuário pelo ID
export async function getUserById(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id }, // Certifique-se de que 'id' é o campo correto no seu modelo
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw new Error('Erro ao buscar usuário');
  }
}

export async function updateUserDocumentSignedByEmail(email: string) {
  try {
    // Atualiza o campo `document_signed` para `true` no usuário com o email fornecido
    await prisma.user.update({
      where: { email: email }, // Supondo que `email` seja o campo que você usa para identificar o usuário
      data: { document_signed: true },
    });
  } catch (error) {
    // Loga o erro para ajudar na depuração
    console.error('Erro ao atualizar o status de assinatura do documento:', error);
    // Lança um erro para que a função chamadora possa lidar com ele
    throw new Error('Falha ao atualizar o status de assinatura do documento');
  }
}
