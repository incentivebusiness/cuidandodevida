"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const schema = z.object({
  policyHolderName: z
    .string()
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      "Nome do estipulante deve conter apenas letras e espaços"
    )
    .min(1, "Nome do estipulante é obrigatório")
    .max(60, "Nome do estipulante deve ter no máximo 60 caracteres"),
  relationship: z.string().min(1, "Relação de parentesco é obrigatória"),
  funeralLimit: z
    .number()
    .min(1, "Valor do limite funeral é obrigatório")
    .positive("O valor deve ser positivo"),
  medicalExpenseLimit: z
    .number()
    .min(1, "Valor do limite de despesa médica é obrigatório")
    .positive("O valor deve ser positivo"),
  basketQuantity: z
    .number()
    .min(1, "Quantidade de cestas é obrigatória")
    .positive("O valor deve ser positivo"),
  basketValue: z
    .number()
    .min(1, "Valor da cesta é obrigatório")
    .positive("O valor deve ser positivo"),
  userBirthdate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data de nascimento deve estar no formato AAAA-MM-DD"
    ),
  livesQuantity: z
    .number()
    .min(1, "Quantidade de vidas é obrigatória")
    .positive("O valor deve ser positivo"),
  phone2: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Telefone deve estar no formato DDD + Número (apenas números)"
    ),
  phone3: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Telefone deve estar no formato DDD + Número (apenas números)"
    ),
  phone4: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Telefone deve estar no formato DDD + Número (apenas números)"
    ),
});

type FormInputs = {
  policyHolderName: string;
  relationship: string;
  funeralLimit: number;
  medicalExpenseLimit: number;
  basketQuantity: number;
  basketValue: number;
  userBirthdate: string;
  livesQuantity: number;
  phone2: string;
  phone3: string;
  phone4: string;
};

const AssistanceForm: React.FC = () => {
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
      const response = await fetch("/api/submit-funeral-assistence-form", {
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
          htmlFor="policyHolderName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nome do Estipulante da Apólice
        </label>
        <input
          {...register("policyHolderName")}
          type="text"
          id="policyHolderName"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.policyHolderName ? "border-red-500" : ""
          }`}
        />
        {errors.policyHolderName && (
          <p className="text-red-500 text-xs italic">
            {errors.policyHolderName.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="relationship"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Relação de Parentesco do Beneficiário da Apólice
        </label>
        <input
          {...register("relationship")}
          type="text"
          id="relationship"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.relationship ? "border-red-500" : ""
          }`}
        />
        {errors.relationship && (
          <p className="text-red-500 text-xs italic">
            {errors.relationship.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="funeralLimit"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Valor do Limite Funeral
        </label>
        <input
          {...register("funeralLimit", { valueAsNumber: true })}
          type="number"
          id="funeralLimit"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.funeralLimit ? "border-red-500" : ""
          }`}
        />
        {errors.funeralLimit && (
          <p className="text-red-500 text-xs italic">
            {errors.funeralLimit.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="medicalExpenseLimit"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Valor do Limite de Despesa Médica Hospitalar
        </label>
        <input
          {...register("medicalExpenseLimit", { valueAsNumber: true })}
          type="number"
          id="medicalExpenseLimit"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.medicalExpenseLimit ? "border-red-500" : ""
          }`}
        />
        {errors.medicalExpenseLimit && (
          <p className="text-red-500 text-xs italic">
            {errors.medicalExpenseLimit.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="basketQuantity"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Quantidade de Cestas
        </label>
        <input
          {...register("basketQuantity", { valueAsNumber: true })}
          type="number"
          id="basketQuantity"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.basketQuantity ? "border-red-500" : ""
          }`}
        />
        {errors.basketQuantity && (
          <p className="text-red-500 text-xs italic">
            {errors.basketQuantity.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="basketValue"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Valor da Cesta
        </label>
        <input
          {...register("basketValue", { valueAsNumber: true })}
          type="number"
          id="basketValue"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.basketValue ? "border-red-500" : ""
          }`}
        />
        {errors.basketValue && (
          <p className="text-red-500 text-xs italic">
            {errors.basketValue.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="userBirthdate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Data de Nascimento do Usuário da Assistência
        </label>
        <input
          {...register("userBirthdate")}
          type="date"
          id="userBirthdate"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.userBirthdate ? "border-red-500" : ""
          }`}
        />
        {errors.userBirthdate && (
          <p className="text-red-500 text-xs italic">
            {errors.userBirthdate.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="livesQuantity"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Quantidade de Vidas (número de usuários cobertos pela assistência)
        </label>
        <input
          {...register("livesQuantity", { valueAsNumber: true })}
          type="number"
          id="livesQuantity"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.livesQuantity ? "border-red-500" : ""
          }`}
        />
        {errors.livesQuantity && (
          <p className="text-red-500 text-xs italic">
            {errors.livesQuantity.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone2"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Telefone 2
        </label>
        <input
          {...register("phone2")}
          type="tel"
          id="phone2"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.phone2 ? "border-red-500" : ""
          }`}
        />
        {errors.phone2 && (
          <p className="text-red-500 text-xs italic">{errors.phone2.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone3"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Telefone 3
        </label>
        <input
          {...register("phone3")}
          type="tel"
          id="phone3"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.phone3 ? "border-red-500" : ""
          }`}
        />
        {errors.phone3 && (
          <p className="text-red-500 text-xs italic">{errors.phone3.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone4"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Telefone 4
        </label>
        <input
          {...register("phone4")}
          type="tel"
          id="phone4"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.phone4 ? "border-red-500" : ""
          }`}
        />
        {errors.phone4 && (
          <p className="text-red-500 text-xs italic">{errors.phone4.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
        <Link href="/"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Voltar
          
        </Link>
      </div>
    </form>
  );
};

export default AssistanceForm;
