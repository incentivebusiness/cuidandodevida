"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const schema = z.object({
  fullName: z.string().min(1, "Nome completo é obrigatório"),
  startDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data de início da vigência deve estar no formato AAAA-MM-DD"
    ),
  endDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Data fim da vigência deve estar no formato AAAA-MM-DD"
    ),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos"),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
  address: z.string().min(1, "Endereço é obrigatório"),
  uf: z.string().regex(/^[A-Z]{2}$/, "UF deve ter 2 letras maiúsculas"),
  city: z.string().min(1, "Cidade é obrigatória"),
  neighborhood: z.string().min(1, "Bairro é obrigatório"),
  cep: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos"),
  phone: z
    .string()
    .regex(
      /^\d{10,11}$/,
      "Telefone deve ter DDD + número com 10 ou 11 dígitos"
    ),
});

type FormInputs = {
  fullName: string;
  startDate: string;
  endDate: string;
  cnpj: string;
  cpf: string;
  address: string;
  uf: string;
  city: string;
  neighborhood: string;
  cep: string;
  phone: string;
};

const NewForm: React.FC = () => {
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
      const response = await fetch("/api/submit-form", {
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

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (!regex.test(event.currentTarget.value)) {
      event.currentTarget.value = event.currentTarget.value.replace(
        /[^0-9]/g,
        ""
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      {[
        { id: "fullName", label: "Nome Completo", type: "text" },
        { id: "startDate", label: "Data de Início da Vigência", type: "date" },
        { id: "endDate", label: "Data Fim da Vigência", type: "date" },
        { id: "cnpj", label: "CNPJ", type: "text", onInput: handleInput },
        { id: "cpf", label: "CPF", type: "text", onInput: handleInput },
        { id: "address", label: "Endereço", type: "text" },
        { id: "uf", label: "UF", type: "text" },
        { id: "city", label: "Cidade", type: "text" },
        { id: "neighborhood", label: "Bairro", type: "text" },
        { id: "cep", label: "CEP", type: "text", onInput: handleInput },
        {
          id: "phone",
          label: "Telefone (DDD + Número)",
          type: "text",
          onInput: handleInput,
        },
      ].map((field) => (
        <div className="mb-4" key={field.id}>
          <label
            htmlFor={field.id}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {field.label}
          </label>
          <input
            {...register(field.id as keyof FormInputs)}
            type={field.type}
            id={field.id}
            onInput={field.onInput}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors[field.id as keyof FormInputs] ? "border-red-500" : ""
            }`}
          />
          {errors[field.id as keyof FormInputs] && (
            <p className="text-red-500 text-xs italic">
              {errors[field.id as keyof FormInputs]?.message}
            </p>
          )}
        </div>
      ))}
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

export default NewForm;
