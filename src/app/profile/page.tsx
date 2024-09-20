'use client';
import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Cards from '@/components/Cards'; 
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { ContratedPlan } from '@prisma/client';

const Profile: React.FC = () => {
  const { data: session, status } = useSession();
  const [contratedPlan, setContratedPlan] = useState<ContratedPlan | null>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      if (session?.user) {
        try {
          const response = await fetch('/api/contrated');
          const data = await response.json();
          console.log('Plano recuperado:', data);
          setContratedPlan(data.plan);
        } catch (error) {
          console.error('Erro ao buscar o plano contratado:', error);
        }
      }
    };

    fetchPlan();
  }, [session]);

  if (status === 'loading') {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="p-8 pl-20">
        <Image src="/images/logo3.png" alt="Logo" width={200} height={200} />
        <h1 className="hidden lg:flex text-2xl font-bold mb-4 text-[#01184a]">Minha conta</h1>
      </div>
      <Button />
      <div
        className="h-[100vh]"
        style={{
          background: 'url(/images/curva.png) no-repeat bottom center',
          backgroundSize: 'contain',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div className="flex items-center justify-center">
          <div className="absolute top-[20%] p-10 rounded-3xl shadow-xl bg-white">
            {session?.user ? (
              <>
                <div className="flex py-8">
                  <div>
                    <p>
                      <strong>Nome:</strong> {session.user.name ?? 'Nome não disponível'}
                    </p>
                    <p className="pr-4">
                      <strong>Email:</strong> {session.user.email ?? 'Email não disponível'}
                    </p>
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="p-2 bg-red-600 text-white rounded-xl"
                  >
                    Encerrar sessão
                  </button>
                </div>

                <div className="flex justify-center items-center p-4 rounded-3xl bg-gradient-to-r from-[rgb(16,155,201)] via-[rgb(66,168,151)] to-[rgb(140,191,77)]">
                  <Image src="/images/clover.png" alt="Logo" width={40} height={40} />
                  <h5 className="text-white pl-2">Meu Número da Sorte</h5>
                </div>

                {/* Exibe os Cards com base no plano contratado */}
                {contratedPlan ? (
                  <div className="mt-8">
                    <h2 className="text-xl">Plano contratado: {contratedPlan}</h2>
                    {/* Renderize os cards aqui conforme necessário */}
                    <Cards contrated_plan={contratedPlan} />
                  </div>
                ) : (
                  <p>Carregando informações do plano...</p>
                )}
              </>
            ) : (
              <p>Nenhum usuário logado.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
