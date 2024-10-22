// app/api/mercadopago/callback/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // Ajuste o caminho conforme necessário
import { getServerSession } from 'next-auth'; // Supondo que você esteja usando next-auth para gerenciar sessões
import { authOptions } from '../../../lib/auth';
export async function POST(request: Request) {
  const session = await getServerSession(authOptions); // Obtém a sessão do usuário

  if (!session) {
    return NextResponse.json({ error: 'Usuário não autenticado' }, { status: 401 }); // Se não houver sessão, retorna erro
  }

  const { status, plan } = await request.json(); // Assume que você está enviando status no corpo da requisição
  const userEmail = session?.user?.email; // Obtém o e-mail do usuário na sessão

  if (status === 'approved') {
    try {
      // Busca o usuário pelo e-mail
      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (!user) {
        return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
      }

      // Encontra um número da sorte que ainda não foi atribuído
      const luckyNumber = await prisma.luckyNumber.findFirst({
        where: { user: null }, // Procura por números que ainda não têm um usuário associado
      });

      if (!luckyNumber) {
        return NextResponse.json({ error: 'Nenhum número da sorte disponível' }, { status: 404 });
      }

      // Cria um registro na tabela adesao
      await prisma.adesao.create({
        data: {
          userId: user.id, // O ID do usuário
          actionType: 'A', // Substitua pelo tipo de ação apropriado
          productCode: 'PC', // Substitua pelo código de produto apropriado
          contrated_plan: user.contrated_plan, // Usando o plano contratado do usuário
          plan_selected: user.plan_selected, // Usando o plano selecionado do usuário
          document_signed: user.document_signed, // Usando o valor do campo document_signed do usuário
          payment_completed: false, 
        },
      });

      // Atualiza o usuário com o luckyNumber no banco de dados
      await prisma.user.update({
        where: { id: user.id },
        data: { luckyNumberId: luckyNumber.id }, // Atribui o número da sorte ao usuário
      });

      // Marca o número da sorte como atribuído
      await prisma.luckyNumber.update({
        where: { id: luckyNumber.id },
        data: { user: { connect: { id: user.id } } }, // Associa o número ao usuário
      });

      // Redireciona o usuário para uma página de sucesso com o número da sorte
      return NextResponse.redirect(`/success?luckyNumber=${luckyNumber.number}`);
    } catch (error) {
      console.error('Erro ao processar o pagamento:', error);
      return NextResponse.json({ error: 'Erro ao processar o pagamento' }, { status: 500 });
    }
  } else {
    return NextResponse.redirect('/failed'); // Redireciona para uma página de falha, se necessário
  }
}
