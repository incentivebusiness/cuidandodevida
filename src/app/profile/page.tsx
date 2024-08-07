'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

// Tipagem para o usuário da sessão
interface User {
  name?: string;
  email?: string;
}

interface Session {
  user?: User;
}

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  // URL do Stripe
  const stripeClient = "https://billing.stripe.com/p/login/aEU5nE9TWaVJ8tWbII";

  // Exibir carregando enquanto a sessão está carregando
  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      {session?.user ? (
        <>
          <p>
            <strong>Nome:</strong> {session.user.name ?? 'Nome não disponível'}
          </p>
          <p>
            <strong>Email:</strong> {session.user.email ?? 'Email não disponível'}
          </p>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Sair
          </button>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
      <h2 className="text-xl pt-4">
        <span>Acesse:</span>
        <Link href={stripeClient} target="_blank" rel="noopener noreferrer">
          {' '}portal do cliente
        </Link>
      </h2>
    </div>
  );
};

export default Profile;
