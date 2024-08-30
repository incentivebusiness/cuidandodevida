'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Tipagem para o usuário da sessão
interface User {
  name?: string;
  email?: string;
  role?: string;
}

interface Session {
  user?: User;
  // LuckNumber?: string;
}

const Profile: React.FC = () => {
  const { data: session, status } = useSession();

  // Exibir carregando enquanto a sessão está carregando
  if (status === 'loading') {
    return <p>Carregando...</p>;
  }
console.log(session)
  return (
    <>
    <Image src="/images/logo3.png" alt="Logo" width={200} height={200} />
     <h1 className="text-2xl font-bold mb-4 text-[rgba(255,255,255,0.7]">Minha conta</h1>
    <div  className=' h-[100vh]' style={{
          background: 'url(/images/curva.png) no-repeat bottom center',
          backgroundSize: 'contain',
         
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
          

    <div className='flex justify-center'>
    <div className="absolute top-[20%] p-20 rounded-3xl shadow-xl bg-white">
     
      {session?.user ? (
        <>
          <p>
            <strong>Nome:</strong> {session.user.name ?? 'Nome não disponível'}
          </p>
          <p>
            <strong>Email:</strong> {session.user.email ?? 'Email não disponível'}
          </p>
          <p>
            <strong>TYPE:</strong> {session.user.role ?? 'role e não disponível'}
          </p>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="mt-4 p-2 bg-red-600 text-white rounded"
          >
            Encerrar sessão
          </button>
          <div>
            <h5>Meu Número da Sorte</h5>
            {/* <span>{LuckNumber}</span> */}
          </div>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
      <h2 className="text-xl pt-4">
       
      </h2>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
