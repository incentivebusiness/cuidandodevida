// pages/api/submit-form.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      fullName,
      startDate,
      endDate,
      cnpj,
      cpf,
      address,
      uf,
      city,
      neighborhood,
      cep,
      phone,
    } = req.body;

    try {
      const formSubmission = await prisma.formSubmission.create({
        data: {
          fullName,
          startDate,
          endDate,
          cnpj,
          cpf,
          address,
          uf,
          city,
          neighborhood,
          cep,
          phone,
        },
      });

      res.status(200).json({ success: true, data: formSubmission });
    } catch (error) {
      console.error('Erro ao criar submissão de formulário:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
