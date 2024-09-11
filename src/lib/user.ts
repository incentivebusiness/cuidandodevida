// lib/user.js

import { prisma } from './prisma';

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
