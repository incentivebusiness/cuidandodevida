
'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Footer from "@/components/Footer";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
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
        if (session?.user?.role === "ADMIN") {
          router.push("/admin");
        } else {
          router.push("/");
        }
        toast.success("Logado com sucesso!");
      }
    } catch (e) {
      toast.error("Erro ao realizar o login!");
    }
  };

  return (
    <>

      <div className="flex px-20 flex-col sm:flex-row-reverse min-h-screen">
        <div className="flex items-center p-4">
          <Link href="/" className="cursor-pointer">
            <img src="/images/logo3.png" alt="Login Background" className="flex sm:hidden w-[200px] p-2 h-full object-cover" />
          </Link>
        </div>
        <div className=" w-full sm:w-1/2 flex flex-col justify-center items-center">
          {/* <button onClick={() => router.push("/")} className='absolute top-20 left-[20px] sm:right-[60px] md:right-[100px] text-white bg-[rgb(1,24,74)] px-6 h-10 rounded-3xl'>Home</button> */}
          <button onClick={() => router.push("/autenticacao/nova-conta")} className='absolute top-20 right-[40px] sm:right-[60px] md:right-[200px] text-white bg-[rgb(1,24,74)] px-6 h-10 rounded-3xl'>Criar Conta</button>
          <h1 className="text-2xl font-extrabold mb-4 text-[rgb(1,24,74)] py-6 md:py-0">Entrar</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg w-[100%] rounded-lg border"

          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-two sm:text-base font-extrabold text-[rgb(1,24,74)]"
                >
                  Email:
                </label>
                <div className="flex items-center border border-[rgb(1,24,74)] rounded-lg px-3 py-2 bg-gray-50 focus-within:border-blue-700">
                  <img src="/images/mensagem.png" className="" />
                  <img src="/images/linha.png" className="p-2" />

                  <input
                    type="email"
                    {...register("email", {
                      required: "O email é obrigatório!",
                    })}
                    className="border-none w-full bg-gray-50 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-two sm:text-base font-extrabold text-[rgb(1,24,74)]"
                >
                  Senha:
                </label>
                <div className="flex items-center border border-[rgb(1,24,74)] rounded-lg px-3 py-2 bg-gray-50 focus-within:border-blue-700">
                  <img src="/images/olho.png" className="" />
                  <img src="/images/linha.png" className="p-2" />
                  <input
                    {...register("password", {
                      required: "A senha é obrigatória!",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres!",
                      },
                    })}
                    type="password"
                    className="border-none w-full bg-gray-50 outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{`${errors.password.message}`}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-center items-center mt-3">
                <button
                  disabled={isSubmitting}
                  className="block text-white rounded-lg w-[50%] px-8 py-2 text-center text-sm font-semibold border-[2px] border-two text-two bg-gradient-to-r from-[rgb(12,155,207)] to-[rgb(148,194,68)] hover:bg-gradient-to-l hover:scale-[1.01] transition-all duration-100 outline-none md:text-base"
                >
                  {isSubmitting ? "..." : "Entrar"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full sm:w-1/2 p-10 sm:p-6 xl:p-12 ">
          <Image src="/images/pc3.png" alt="Login Background" className="h-full w-full object-contain" width={500} height={200} />

        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LoginPage;
