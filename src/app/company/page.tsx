'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import ErrorModal from '@/components/ErrorModal';
import Link from "next/link";

const schema = z.object({
  name: z.string()
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres")
    .refine((val) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(val), {
      message: "O nome não deve conter números ou caracteres especiais",
    }),
  email: z
    .string()
    .email("Digite um e-mail válido")
    .min(1, "Campo obrigatório"),
  cpf: z.string()
    .length(11, "O CPF deve ter 11 caracteres")
    .regex(/^\d{11}$/, "O CPF deve conter apenas números"),
  companyId: z.string().nonempty("O ID da empresa é obrigatório"),
  role: z.enum(['EMPLOYEE', 'MANAGER'], "O papel deve ser 'EMPLOYEE' ou 'MANAGER'"),
});

type CreateAccountInputs = {
  name: string;
  email: string;
  cpf: string;
  companyId: string;
  role: 'EMPLOYEE' | 'MANAGER';
};

export default function PreRegister() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [serverError, setServerError] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CreateAccountInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<CreateAccountInputs> = async (data) => {
    console.log('Dados enviados para o backend:', data);
    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setServerError(errorData.message || 'Erro ao criar usuário. Tente novamente mais tarde.');
        setShowModal(true);
        throw new Error(errorData.message || 'Erro ao criar usuário. Tente novamente mais tarde.');
      }

      const result = await response.json();

      if (result.success) {
        setModalMessage('Pré-cadastro realizado com sucesso!');
        setShowModalSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setServerError(result.message);
        setShowModal(true);
      }
    } catch (error) {
      setServerError('Erro ao criar conta. Tente novamente mais tarde.');
      setShowModal(true);
    }
  };

  return (
    <div>
      <h1>Pré-Cadastro de Funcionários</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="text"
          placeholder="CPF"
          {...register('cpf')}
        />
        {errors.cpf && <p>{errors.cpf.message}</p>}

        <input
          type="email"
          placeholder="E-mail"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="text"
          placeholder="ID da Empresa"
          {...register('companyId')}
        />
        {errors.companyId && <p>{errors.companyId.message}</p>}

        <select {...register('role')}>
          <option value="EMPLOYEE">Funcionário</option>
          <option value="MANAGER">Gerente</option>
        </select>
        {errors.role && <p>{errors.role.message}</p>}

        <button type="submit">Cadastrar</button>
      </form>

      {showModal && <ErrorModal message={serverError} />}
      {showModalSuccess && <div>{modalMessage}</div>}
    </div>
  );
}
