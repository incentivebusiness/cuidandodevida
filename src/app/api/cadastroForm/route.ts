import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const prisma = new PrismaClient();

// Updated schema validation
const schema = z.object({
  userId: z.string().min(1, "User ID é obrigatório"),
  policyHolderName: z.string()
    .min(1, "Policy holder's name is required")
    .max(60, "Policy holder's name must be at most 60 characters"),
  relationship: z.string().min(1, "Relationship is required").refine(val => val !== "Select", "Select a valid option"),
  funeralLimit: z.number().positive("The value must be positive").min(1, "Funeral limit value is required"),
  medicalExpenseLimit: z.number().positive("The value must be positive").min(1, "Medical expense limit value is required"),
  userBirthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Birthdate must be in the format YYYY-MM-DD"),
  livesQuantity: z.number().positive("The value must be positive").min(1, "Lives quantity is required"),
  phone: z.string().regex(/^\d{10,11}$/, "Phone number must be in the format DDD + Number (digits only)"),
  phone2: z.string().regex(/^\d{10,11}$/, "Phone number must be in the format DDD + Number (digits only)").optional(),
  address: z.string().min(1, "Address is required"),
  postalCode: z.string().regex(/^\d{5}-\d{3}$/, "Postal Code must be in the format XXXXX-XXX").min(1, "Postal Code is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().length(2, "State must be 2 characters").regex(/^[A-Z]{2}$/, "State must be represented by two uppercase letters").min(1, "State is required"),
  neighborhood: z.string().min(1, "Neighborhood is required"),
}).refine(
  (data) => data.cpf || data.cnpj,
  {
    message: "CPF ou CNPJ é obrigatório. Preencha pelo menos um.",
    path: ["cpf"], // A mensagem será associada ao campo `cpf`
  }
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Validação dos dados recebidos
      const {
        userId,
        policyHolderName,
        relationship,
        funeralLimit,
        medicalExpenseLimit,
        userBirthdate,
        livesQuantity,
        phone,
        phone2,
        address,
        postalCode,
        city,
        state,
        neighborhood,
      } = schema.parse(req.body);

      // Atualizar o usuário existente com os dados adicionais
      const updatedUsuarioAssistencia = await prisma.usuarioAssistencia.update({
        where: {
          userId: userId, // Use o ID do usuário que você quer atualizar
        },
        data: {
          policyHolderName: policyHolderName,
          relationship: relationship,
          funeralLimit: funeralLimit,
          medicalExpenseLimit: medicalExpenseLimit,
          userBirthdate: new Date(userBirthdate), // Converte para Date
          livesQuantity: livesQuantity,
          phone: phone,
          phone2: phone2 || undefined, // Só define o valor se `phone2` for preenchido
          address: {
            update: {
              address: address,
              postalCode: postalCode,
              city: city,
              state: state,
              neighborhood: neighborhood,
            },
          },
        },
      });

      res.status(200).json({ success: true, data: updatedUsuarioAssistencia });
    } catch (error) {
      console.error('Erro ao atualizar dados do usuário:', error);
      res.status(400).json({ success: false, message: error.errors || error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
