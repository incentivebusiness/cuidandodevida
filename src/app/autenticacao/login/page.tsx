
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Não Autorizado!");
      } else {
        router.push("/profile");
        toast.success("Logado com sucesso!");
      }
    } catch (e) {
      toast.error("Erro ao realizar o login!");
    }
  };
  return (
    <div
    //   style={{ backgroundImage: "url(/bg2.png)" }}
      className="bg-cover bg-center h-screen w-full flex items-center justify-center"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-center justify-center">
        <img src="/logo2.png" alt="" className="h-auto w-60 mb-6" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-lg rounded-lg border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-two sm:text-base"
              >
                Email:
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "O email é obrigatório!",
                })}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-two outline-none transition duration-100 focus:border-two"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-two sm:text-base"
              >
                Senha:
              </label>
              <input
                {...register("password", {
                  required: "A senha é obrigatória!",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres!",
                  },
                })}
                type="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-two outline-none transition duration-100 focus:border-two"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{`${errors.password.message}`}</p>
              )}
            </div>

            <div className="flex justify-center items-center mt-3">
              <button
                disabled={isSubmitting}
                className="block rounded-lg w-[40%] px-8 py-2 text-center text-sm font-semibold border-[2px] border-two text-two bg-[#FFFFFF] hover:text-[#FFFFFF] outline-none transition duration-100 hover:bg-two md:text-base"
              >
                {isSubmitting ? "..." : "Entrar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;