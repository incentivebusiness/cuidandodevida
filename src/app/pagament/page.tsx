// pages/pagamento.js
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'; // Ou qualquer outra solução de autenticação que você estiver usando
import { fetchUser } from '../lib/api'; // Função para buscar dados do usuário

const Pagamento = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      if (session) {
        const userData = await fetchUser(session.user.id);
        setUser(userData);
      }
    };
    getUser();
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!user || user.document_signed === false || user.plan_selected === null) {
    return <div>Acesso negado. Complete a assinatura do documento ou selecione um plano.</div>;
  }

  const paymentLink = getPaymentLink(user.plan_selected);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Pagamento</h1>
      {user.document_signed && user.plan_selected && user.plan_selected === 'COMPLETE' ? (
        <a href={paymentLink} className="bg-blue-500 text-white py-2 px-4 rounded">
          Ir para Pagamento
        </a>
      ) : (
        <div>Por favor, complete todos os passos necessários antes de prosseguir.</div>
      )}
    </div>
  );
};

const getPaymentLink = (planType) => {
  switch (planType) {
    case 'BASICO':
      return 'https://link-para-pagamento-basico.com';
    case 'MEDIO':
      return 'https://link-para-pagamento-medio.com';
    case 'SUPER':
      return 'https://link-para-pagamento-super.com';
    default:
      return '#';
  }
};

export default Pagamento;
