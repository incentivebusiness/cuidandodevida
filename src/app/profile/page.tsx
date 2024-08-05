"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();

  const stripeClient = "https://billing.stripe.com/p/login/aEU5nE9TWaVJ8tWbII";

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      {session ? (
        <>
          <p>
            <strong>Nome:</strong> {session.user.name}
          </p>
          <p>
            <strong>Email:</strong> {session.user.email}
          </p>
          <p>
            <strong>Senha:</strong> {session.user.Password}
          </p>
        </>
      ) : (
        <p>Nenhum usuário logado.</p>
      )}
      <h2 className="text-xl pt-4">
        <span>Acesse:</span>
        <Link href={stripeClient}> portal do cliente</Link>
      </h2>
    </div>
  );
};

export default Profile;
