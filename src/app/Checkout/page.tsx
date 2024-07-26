// // pages/checkout.tsx

// 'use client';

// import React, { useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'next/navigation';

// const CheckoutPage: React.FC = () => {
//   const { isAuthenticated } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push('/login'); // Redireciona para a página de login se não autenticado
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) {
//     return <div>Loading...</div>; // Mostra um loading ou uma mensagem enquanto verifica a autenticação
//   }

//   return (
//     <div>
//       <h1>Checkout</h1>
//       {/* Conteúdo da página de checkout */}
//     </div>
//   );
// };

// export default CheckoutPage;
