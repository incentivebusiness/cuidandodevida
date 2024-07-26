// // api/index.ts

// export async function signInRequest({ email, password }: { email: string, password: string }) {
//     const response = await fetch('/api/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
  
//     if (!response.ok) {
//       throw new Error('Falha na autenticação');
//     }
  
//     return response.json(); // Espera-se que a resposta tenha um campo 'token'
//   }
  