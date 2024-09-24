'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { fetchUser } from '@/lib/api';

interface User {
  document_signed: boolean;
  plan_selected: string | null;
}

const Pagamento = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null); 

  useEffect(() => {
    const getUser = async () => {
      if (session && session.user) { 
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

  const paymentLink = user.plan_selected ? getPaymentLink(user.plan_selected) : '#';

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

const getPaymentLink = (planType: string) => { 
  switch (planType) {
    case 'BASICO':
      return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808491eb5f570192206300a3109b';
    case 'MEDIO':
      return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc691e902eb';
    case 'SUPER':
      return 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc6c86102ec';
    default:
      return '#';
  }
};

export default Pagamento;
