import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
    const { name, cpf, email, role, companyId } = req.body;
  
    try {
      // Verifica se o CPF já foi pré-cadastrado
      const existing = await prisma.preRegister.findUnique({
        where: { cpf },
      });
  
      if (existing) {
        return res.status(400).json({ message: 'Funcionário já cadastrado' });
      }
  
      // Cria o pré-cadastro
      const preRegistered = await prisma.preRegister.create({
        data: {
          name,
          cpf,
          email,  // Certifique-se de que o email está sendo passado
          role,
          companyId, // Atribua o ID da empresa, se aplicável
          completed: false,
        },
      });
  
      res.status(201).json({ message: 'Pré-cadastro realizado com sucesso', preRegistered });
    } catch (error) {
      res.status(500).json({ message: 'Erro no pré-cadastro', error });
    }
}
