"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const schema = z.object({
  gender: z.string().min(1, "Sexo é obrigatório"),
  petName: z
    .string()
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "Nome do animal deve conter apenas letras e espaços"
    )
    .min(1, "Nome do animal é obrigatório")
    .max(60, "Nome do animal deve ter no máximo 60 caracteres"),
  petBreed: z.string().min(1, "Raça do animal é obrigatória"),
  petBirthdate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data de nascimento do animal deve estar no formato AAAA-MM-DD"
    ),
  email: z
    .string()
    .email("Digite um e-mail válido no formato teste@teste.com.br")
    .min(1, "E-mail é obrigatório"),
});

type FormInputs = {
  gender: string;
  petName: string;
  petBreed: string;
  petBirthdate: string;
  email: string;
};

const PetForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      console.log("Enviando dados:", data);
      const response = await fetch("/api/submit-pet-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="gender"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Genero do Usuário
        </label>
        <select
          {...register("gender")}
          id="gender"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.gender ? "border-red-500" : ""
          }`}
        >
          <option value="">Selecione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        {errors.gender && (
          <p className="text-red-500 text-xs italic">{errors.gender.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="petName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nome do Animal de Estimação
        </label>
        <input
          {...register("petName")}
          type="text"
          id="petName"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.petName ? "border-red-500" : ""
          }`}
        />
        {errors.petName && (
          <p className="text-red-500 text-xs italic">
            {errors.petName.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="petBreed"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Raça do Animal de Estimação
        </label>
        <input
          {...register("petBreed")}
          type="text"
          id="petBreed"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.petBreed ? "border-red-500" : ""
          }`}
        />
        {errors.petBreed && (
          <p className="text-red-500 text-xs italic">
            {errors.petBreed.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="petBirthdate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Data de Nascimento do Animal de Estimação
        </label>
        <input
          {...register("petBirthdate")}
          type="date"
          id="petBirthdate"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.petBirthdate ? "border-red-500" : ""
          }`}
        />
        {errors.petBirthdate && (
          <p className="text-red-500 text-xs italic">
            {errors.petBirthdate.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          E-mail
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
        <Link href="/">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Voltar
          </button>
        </Link>
      </div>
    </form>
  );
};

export default PetForm;
