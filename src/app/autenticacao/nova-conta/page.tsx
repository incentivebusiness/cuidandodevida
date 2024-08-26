
// 'use client';

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { format, parseISO, isBefore, subYears } from 'date-fns';

// const eighteenYearsAgo = subYears(new Date(), 18);

// const schema = z.object({
//   name: z.string().min(1, "Nome é obrigatório"),
//   socialName: z.string().optional(),
//   email: z
//     .string()
//     .email("Digite um e-mail válido")
//     .min(1, "Campo obrigatório"),
//   password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
//   confirmPassword: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
//   cpf: z.string().length(11, "O CPF deve ter 11 caracteres"),
//   gender: z.enum(["M", "F"], "Selecione um gênero"),
//   birthDate: z
//     .string()
//     .refine((date) => isBefore(parseISO(date), eighteenYearsAgo), {
//       message: "Você deve ter pelo menos 18 anos",
//     }),
//   cel: z.string().min(1, "Celular é obrigatório"),
//   address: z.object({
//     street: z.string().min(1, "Rua é obrigatória"),
//     number: z.string().min(1, "Número é obrigatório"),
//     complement: z.string().optional(),
//     neighborhood: z.string().min(1, "Bairro é obrigatório"),
//     city: z.string().min(1, "Cidade é obrigatória"),
//     state: z.string().min(1, "Estado é obrigatório"),
//     zipCode: z.string().min(8, "CEP deve ter 8 caracteres").max(8, "CEP deve ter 8 caracteres"),
//   }),
// }).refine(data => data.password === data.confirmPassword, {
//   message: "As senhas não coincidem",
//   path: ["confirmPassword"],
// });

// type CreateAccountInputs = {
//   name: string;
//   socialName?: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   cpf: string;
//   gender: "M" | "F";
//   birthDate: string;
//   cel: string;
//   address: {
//     street: string;
//     number: string;
//     complement?: string;
//     neighborhood: string;
//     city: string;
//     state: string;
//     zipCode: string;
//   };
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
//     <>
//       <div className="py-10 md:py-20 w-full ">
//         <img src="/images/logo3.png" alt="background" className="absolute top-10 left-10 object-cover" />
//         <div>
//           <h1 className="text-4xl font-bold text-center text-[rgb(1,24,74)]">Crie sua conta</h1>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="text-[rgb(1,24,74)] max-w-md mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block  text-sm font-bold mb-2"
//             >
//               Nome
//             </label>
//             <input
//               {...register("name")}
//               type="text"
//               id="name"
//               className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs italic">{errors.name.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="socialName"
//               className="block  text-sm font-bold mb-2"
//             >
//               Nome Social
//             </label>
//             <input
//               {...register("socialName")}
//               type="text"
//               id="socialName"
//               className={`shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline ${errors.socialName ? "border-red-500" : ""}`}
//             />
//             {errors.socialName && (
//               <p className="text-red-500 text-xs italic">{errors.socialName.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block  text-sm font-bold mb-2"
//             >
//               E-mail
//             </label>
//             <input
//               {...register("email")}
//               type="email"
//               id="email"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs italic">{errors.email.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="cpf"
//               className="block text-sm font-bold mb-2"
//             >
//               CPF
//             </label>
//             <input
//               {...register("cpf")}
//               type="text"
//               id="cpf"
//               maxLength={11}
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.cpf ? "border-red-500" : ""}`}
//             />
//             {errors.cpf && (
//               <p className="text-red-500 text-xs italic">{errors.cpf.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="gender"
//               className="block text-sm font-bold mb-2"
//             >
//               Gênero
//             </label>
//             <select
//               {...register("gender")}
//               id="gender"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.gender ? "border-red-500" : ""}`}
//             >
//               <option value="">SELECIONE</option>
//               <option value="M">MASCULINO</option>
//               <option value="F">FEMININO</option>
//             </select>
//             {errors.gender && (
//               <p className="text-red-500 text-xs italic">{errors.gender.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="street" className="block text-sm font-bold mb-2">Rua</label>
//             <input
//               {...register("address.street")}
//               id="street"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.street ? "border-red-500" : ""}`}
//             />
//             {errors.address?.street && (
//               <p className="text-red-500 text-xs italic">{errors.address.street.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="number" className="block text-sm font-bold mb-2">Número</label>
//             <input
//               {...register("address.number")}
//               id="number"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.number ? "border-red-500" : ""}`}
//             />
//             {errors.address?.number && (
//               <p className="text-red-500 text-xs italic">{errors.address.number.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="complement" className="block text-sm font-bold mb-2">Complemento</label>
//             <input
//               {...register("address.complement")}
//               id="complement"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="neighborhood" className="block text-sm font-bold mb-2">Bairro</label>
//             <input
//               {...register("address.neighborhood")}
//               id="neighborhood"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.neighborhood ? "border-red-500" : ""}`}
//             />
//             {errors.address?.neighborhood && (
//               <p className="text-red-500 text-xs italic">{errors.address.neighborhood.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="city" className="block text-sm font-bold mb-2">Cidade</label>
//             <input
//               {...register("address.city")}
//               id="city"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.city ? "border-red-500" : ""}`}
//             />
//             {errors.address?.city && (
//               <p className="text-red-500 text-xs italic">{errors.address.city.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="state" className="block text-sm font-bold mb-2">Estado</label>
//             <input
//               {...register("address.state")}
//               id="state"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.state ? "border-red-500" : ""}`}
//             />
//             {errors.address?.state && (
//               <p className="text-red-500 text-xs italic">{errors.address.state.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="zipCode" className="block text-sm font-bold mb-2">CEP</label>
//             <input
//               {...register("address.zipCode")}
//               id="zipCode"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.zipCode ? "border-red-500" : ""}`}
//             />
//             {errors.address?.zipCode && (
//               <p className="text-red-500 text-xs italic">{errors.address.zipCode.message}</p>
//             )}
//           </div>

//           {/* Campos de Gênero, Data de Nascimento, Celular */}

//           <div className="mb-4">
//             <label htmlFor="birthDate" className="block text-sm font-bold mb-2">Data de Nascimento</label>
//             <input
//               {...register("birthDate")}
//               type="date"
//               id="birthDate"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.birthDate ? "border-red-500" : ""}`}
//             />
//             {errors.birthDate && (
//               <p className="text-red-500 text-xs italic">{errors.birthDate.message}</p>
//             )}
//           </div>

//           <div className="mb-4">
//              <label
//               htmlFor="cel"
//               className="block text-sm font-bold mb-2"
//             >
//               Celular
//             </label>
//             <input
//               {...register("cel")}
//               type="text"
//               id="cel"
//               className={`shadow appearance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline ${errors.cel ? "border-red-500" : ""}`}
//             />
//             {errors.cel && (
//               <p className="text-red-500 text-xs italic">{errors.cel.message}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="blocktext-sm font-bold mb-2"
//             >
//               Senha
//             </label>
//             <input
//               {...register("password")}
//               type="password"
//               id="password"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""}`}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs italic">{errors.password.message}</p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-bold mb-2"
//             >
//               Confirmar Senha
//             </label>
//             <input
//               {...register("confirmPassword")}
//               type="password"
//               id="confirmPassword"
//               className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? "border-red-500" : ""}`}
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
//             )}
//           </div>
//           <div className="flex items-center justify-between gap-6">
//             <button
//               type="submit"
//               className="bg-[rgb(12,155,207)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//             >
//               Criar Conta
//             </button>
//             <Link href="/login">
//               <button
//                 type="button"
//                 className=" gap-4 bg-[rgb(137,191,82)] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//               >
//                 Voltar ao Login
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateAccountForm;







'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { format, parseISO, isBefore, subYears } from 'date-fns';

const eighteenYearsAgo = subYears(new Date(), 18);

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  socialName: z.string().optional(),
  email: z
    .string()
    .email("Digite um e-mail válido")
    .min(1, "Campo obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  cpf: z.string().length(11, "O CPF deve ter 11 caracteres").regex(/^\d{11}$/, "O CPF deve conter apenas números"),
  gender: z.enum(["M", "F"], "Selecione um gênero"),
  birthDate: z
    .string()
    .refine((date) => isBefore(parseISO(date), eighteenYearsAgo), {
      message: "Você deve ter pelo menos 18 anos",
    }),
  cel: z.string().length(11, "O celular deve ter 11 caracteres").regex(/^\d{11}$/, "O celular deve conter apenas números"),
  address: z.object({
    street: z.string().min(1, "Rua é obrigatória"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, "Bairro é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    state: z.string().min(1, "Estado é obrigatório"),
    zipCode: z.string().length(8, "CEP deve ter 8 caracteres"),
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type CreateAccountInputs = {
  name: string;
  socialName?: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  gender: "M" | "F";
  birthDate: string;
  cel: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
};

const states = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO"
];

const CreateAccountForm: React.FC = () => {
  const [addressError, setAddressError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<CreateAccountInputs>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const handleCepChange = async (cep: string) => {
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          setAddressError("CEP não encontrado.");
        } else {
          setAddressError(null);
          setValue('address.street', data.logradouro || '');
          setValue('address.neighborhood', data.bairro || '');
          setValue('address.city', data.localidade || '');
          setValue('address.state', data.uf || '');
        }
      } catch (error) {
        setAddressError("Erro ao buscar endereço.");
      }
    }
  };

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
              pattern="\d{11}"
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
            <select
              {...register("gender")}
              id="gender"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.gender ? "border-red-500" : ""}`}
            >
              <option value="">SELECIONE</option>
              <option value="M">MASCULINO</option>
              <option value="F">FEMININO</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs italic">{errors.gender.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-bold mb-2">Rua</label>
            <input
              {...register("address.street")}
              id="street"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.street ? "border-red-500" : ""}`}
            />
            {errors.address?.street && (
              <p className="text-red-500 text-xs italic">{errors.address.street.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-bold mb-2">Número</label>
            <input
              {...register("address.number")}
              id="number"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.number ? "border-red-500" : ""}`}
            />
            {errors.address?.number && (
              <p className="text-red-500 text-xs italic">{errors.address.number.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="complement" className="block text-sm font-bold mb-2">Complemento</label>
            <input
              {...register("address.complement")}
              id="complement"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="neighborhood" className="block text-sm font-bold mb-2">Bairro</label>
            <input
              {...register("address.neighborhood")}
              id="neighborhood"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.neighborhood ? "border-red-500" : ""}`}
            />
            {errors.address?.neighborhood && (
              <p className="text-red-500 text-xs italic">{errors.address.neighborhood.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-bold mb-2">Cidade</label>
            <input
              {...register("address.city")}
              id="city"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.city ? "border-red-500" : ""}`}
            />
            {errors.address?.city && (
              <p className="text-red-500 text-xs italic">{errors.address.city.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-bold mb-2">CEP</label>
            <input
              {...register("address.zipCode")}
              id="zipCode"
              maxLength={8}
              onChange={(e) => handleCepChange(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.zipCode ? "border-red-500" : ""}`}
            />
            {errors.address?.zipCode && (
              <p className="text-red-500 text-xs italic">{errors.address.zipCode.message}</p>
            )}
            {addressError && (
              <p className="text-red-500 text-xs italic">{addressError}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-bold mb-2">Estado</label>
            <select
              {...register("address.state")}
              id="state"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.state ? "border-red-500" : ""}`}
            >
              <option value="">SELECIONE</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.address?.state && (
              <p className="text-red-500 text-xs italic">{errors.address.state.message}</p>
            )}
          </div>

          {/* <div className="mb-4">
            <label htmlFor="zipCode" className="block text-sm font-bold mb-2">CEP</label>
            <input
              {...register("address.zipCode")}
              id="zipCode"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.address?.zipCode ? "border-red-500" : ""}`}
            />
            {errors.address?.zipCode && (
              <p className="text-red-500 text-xs italic">{errors.address.zipCode.message}</p>
            )}
          </div> */}

        

          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-bold mb-2">Data de Nascimento</label>
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
              maxLength={11}
              pattern="\d{11}"
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${errors.cel ? "border-red-500" : ""}`}
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
      </div>
    </>
  );
}

export default CreateAccountForm;