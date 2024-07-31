'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      {session ? (
        <>
          <p><strong>Nome:</strong> {session.user.name}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
          <p><strong>Senha:</strong> {session.user.password}</p>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
    </div>
  );
};

export default Profile;
