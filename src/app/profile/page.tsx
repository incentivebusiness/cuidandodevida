'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Cards from '@/components/Cards';
import Button from '@/components/Button';

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
      <div className='p-8 pl-20'>
        <Image src="/images/logo3.png" alt="Logo" width={200} height={200}/>
        <h1 className="hidden lg:flex text-2xl font-bold mb-4 text-[#01184a]">Minha conta</h1>
       
      </div>
      <Button/>
      <div className=' h-[100vh]' style={{
        background: 'url(/images/curva.png) no-repeat bottom center',
        backgroundSize: 'contain',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>


        <div className='flex items-center justify-center'>
          <div className="absolute top-[20%] p-10 rounded-3xl shadow-xl bg-white ">


            {session?.user ? (

              <>
                <div className='flex py-8'>
                  <div>
                    <p>
                      <strong>Nome:</strong> {session.user.name ?? 'Nome não disponível'}
                    </p>
                    <p className='pr-4'>
                      <strong>Email:</strong> {session.user.email ?? 'Email não disponível'}
                    </p>
                    {/* <p>
            <strong>TYPE:</strong> {session.user.role ?? 'role e não disponível'}
          </p> */}
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className=" p-2 bg-red-600 text-white rounded-xl"
                  >
                    Encerrar sessão
                  </button>
                </div>

                <div className='flex justify-center items-center p-4 rounded-3xl bg-gradient-to-r from-[rgb(16,155,201)] via-[rgb(66,168,151)] to-[rgb(140,191,77)]'>
                  <Image src="/images/clover.png" alt="Logo" width={40} height={40} />
                  <h5 className='text-white pl-2'>Meu Número da Sorte</h5>
                  {/* <span>{LuckNumber}</span> */}
                </div>

                {/* <Cards/> */}
              </>
            ) : (
              <p>Nenhum usuário logado.</p>
            )}
            <h2 className="text-xl pt-4">

            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
