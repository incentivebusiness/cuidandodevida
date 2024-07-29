import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const session = useSession();
  const router = useRouter();

  if (!session.data) {
    router.push("/autenticacao/login");
  }
  return (
    <main>{children}</main>
  );
}