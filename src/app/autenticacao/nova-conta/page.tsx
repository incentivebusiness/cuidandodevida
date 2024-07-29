// 'use client';

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useRouter } from "next/navigation";
// import AuthActions from "../api/actions/auth-actions";
// import Link from "next/link";

// const schema = z.object({
//   name: z.string().min(1, "Nome é obrigatório"),
//   email: z
//     .string()
//     .email("Digite um e-mail válido")
//     .min(1, "Campo obrigatório"),
//   password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
// });

// type CreateAccountInputs = {
//   name: string;
//   email: string;
//   password: string;
// };

// const CreateAccountForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInputs>({
//     resolver: zodResolver(schema),
//   });

//   const router = useRouter();

//   const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
//     try {
//       await fetch('/api/auth/create-account', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       router.push("/login");
//     } catch (error) {
//       console.error('Erro ao criar conta:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Nome
//         </label>
//         <input
//           {...register("name")}
//           type="text"
//           id="name"
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//             errors.name ? "border-red-500" : ""
//           }`}
//         />
//         {errors.name && (
//           <p className="text-red-500 text-xs italic">{errors.name.message}</p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="email"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           E-mail
//         </label>
//         <input
//           {...register("email")}
//           type="email"
//           id="email"
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//             errors.email ? "border-red-500" : ""
//           }`}
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs italic">{errors.email.message}</p>
//         )}
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="password"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Senha
//         </label>
//         <input
//           {...register("password")}
//           type="password"
//           id="password"
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//             errors.password ? "border-red-500" : ""
//           }`}
//         />
//         {errors.password && (
//           <p className="text-red-500 text-xs italic">{errors.password.message}</p>
//         )}
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Criar Conta
//         </button>
//         <Link href="/login">
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Voltar ao Login
//           </button>
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default CreateAccountForm;
