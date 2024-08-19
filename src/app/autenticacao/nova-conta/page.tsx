
// 'use client';

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// // Atualizar o schema para incluir socialName
// const schema = z.object({
//   name: z.string().min(1, "Nome é obrigatório"),
//   socialName: z.string().optional(),
//   email: z
//     .string()
//     .email("Digite um e-mail válido")
//     .min(1, "Campo obrigatório"),
//   password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
//   confirmPassword: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
// }).refine(data => data.password === data.confirmPassword, {
//   message: "As senhas não coincidem",
//   path: ["confirmPassword"], // path of error
// });

// type CreateAccountInputs = {
//   name: string;
//   socialName?: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

// const CreateAccountForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInputs>({
//     resolver: zodResolver(schema),
//   });

//   const router = useRouter();

//   const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
//     try {
//       console.log('Enviando dados:', data);
//       const response = await fetch('/api/users/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         router.push("/");
//       } else {
//         console.error(result.message);
//       }
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
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
//         />
//         {errors.name && (
//           <p className="text-red-500 text-xs italic">{errors.name.message}</p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="socialName"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Nome Social
//         </label>
//         <input
//           {...register("socialName")}
//           type="text"
//           id="socialName"
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.socialName ? "border-red-500" : ""}`}
//         />
//         {errors.socialName && (
//           <p className="text-red-500 text-xs italic">{errors.socialName.message}</p>
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
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs italic">{errors.email.message}</p>
//         )}
//       </div>
//       <div className="mb-4">
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
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
//         />
//         {errors.password && (
//           <p className="text-red-500 text-xs italic">{errors.password.message}</p>
//         )}
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="confirmPassword"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Confirmar Senha
//         </label>
//         <input
//           {...register("confirmPassword")}
//           type="password"
//           id="confirmPassword"
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? "border-red-500" : ""}`}
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
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
'use client';

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Atualizar o schema para incluir todos os campos necessários
const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  socialName: z.string().optional(),
  email: z
    .string()
    .email("Digite um e-mail válido")
    .min(1, "Campo obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  cpf: z.string().length(11, "O CPF deve ter 11 caracteres"),
  gender: z.string().optional(),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
  cel: z.string().min(1, "Celular é obrigatório"),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], // path of error
});

type CreateAccountInputs = {
  name: string;
  socialName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  gender?: string;
  birthDate: string; // Use a string for the date input
  cel: string;
};

const CreateAccountForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInputs>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
    try {
      console.log('Enviando dados:', data);
      const response = await fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/");
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <>
      <div className="py-10 md:py-20 w-full ">
        <img src="/images/logo3.png" alt="background" className="absolute top-10 left-10 object-cover" />
      {/* style={{background:"url('/images/back.png') no-repeat center"}}  */}
      <div>
        <h1 className="text-4xl font-bold text-center text-[rgb(1,24,74)]">Crie sua conta</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="text-[rgb(1,24,74)] max-w-md mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block  text-sm font-bold mb-2"
          >
            Nome
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialName"
            className="block  text-sm font-bold mb-2"
          >
            Nome Social
          </label>
          <input
            {...register("socialName")}
            type="text"
            id="socialName"
            className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${errors.socialName ? "border-red-500" : ""}`}
          />
          {errors.socialName && (
            <p className="text-red-500 text-xs italic">{errors.socialName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-sm font-bold mb-2"
          >
            E-mail
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="cpf"
            className="block text-sm font-bold mb-2"
          >
            CPF
          </label>
          <input
            {...register("cpf")}
            type="text"
            id="cpf"
            maxLength={11}
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.cpf ? "border-red-500" : ""}`}
          />
          {errors.cpf && (
            <p className="text-red-500 text-xs italic">{errors.cpf.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-bold mb-2"
          >
            Gênero
          </label>
          <input
            {...register("gender")}
            type="text"
            id="gender"
            className={`shadow appearance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline ${errors.gender ? "border-red-500" : ""}`}
          />
          {errors.gender && (
            <p className="text-red-500 text-xs italic">{errors.gender.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block text-sm font-bold mb-2"
          >
            Data de Nascimento
          </label>
          <input
            {...register("birthDate")}
            type="date"
            id="birthDate"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.birthDate ? "border-red-500" : ""}`}
          />
          {errors.birthDate && (
            <p className="text-red-500 text-xs italic">{errors.birthDate.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="cel"
            className="block text-sm font-bold mb-2"
          >
            Celular
          </label>
          <input
            {...register("cel")}
            type="text"
            id="cel"
            className={`shadow appearance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline ${errors.cel ? "border-red-500" : ""}`}
          />
          {errors.cel && (
            <p className="text-red-500 text-xs italic">{errors.cel.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="blocktext-sm font-bold mb-2"
          >
            Senha
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-bold mb-2"
          >
            Confirmar Senha
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? "border-red-500" : ""}`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between gap-6">
          <button
            type="submit"
            className="bg-[rgb(12,155,207)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Criar Conta
          </button>
          <Link href="/login">
            <button
              type="button"
              className=" gap-4 bg-[rgb(137,191,82)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Voltar ao Login
            </button>
          </Link>
        </div>
      </form>

    </div >
    </>
  );
};

export default CreateAccountForm;
