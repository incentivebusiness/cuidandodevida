// Em /pages/profile.tsx
'use client';

import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ id: string, email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      const decodedToken: any = jwtDecode(token);
      setUser({ id: decodedToken.id, email: decodedToken.email });
      console.log(user);
    }
  }, [router]);

  if (!user) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
