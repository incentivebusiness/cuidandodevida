
// "use client";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm, type FieldValues } from "react-hook-form";
// import { toast } from "react-toastify";

// const LoginPage = () => {
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm();

//   const onSubmit = async (data: FieldValues) => {
//     const { email, password } = data;

//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (res?.error) {
//         toast.error("Não Autorizado!");
//       } else {
//         router.push("/profile");
//         toast.success("Logado com sucesso!");
//       }
//     } catch (e) {
//       toast.error("Erro ao realizar o login!");
//     }
//   };
//   return (
//     <div

//       className="grid grid-cols-1 sm:grid-cols-2"
//     >


//       <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col items-start justify-center" >

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="mx-auto max-w-lg rounded-lg border"
//         >
//           <div className="flex flex-col gap-4 p-4 md:p-8">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="mb-2 inline-block text-sm text-two sm:text-base"
//               >
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 {...register("email", {
//                   required: "O email é obrigatório!",
//                 })}
//                 className="w-full rounded border bg-gray-50 px-3 py-2 text-two outline-none transition duration-100 focus:border-two"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{`${errors.email.message}`}</p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="mb-2 inline-block text-sm text-two sm:text-base"
//               >
//                 Senha:
//               </label>
//               <input
//                 {...register("password", {
//                   required: "A senha é obrigatória!",
//                   minLength: {
//                     value: 6,
//                     message: "A senha deve ter pelo menos 6 caracteres!",
//                   },
//                 })}
//                 type="password"
//                 className="w-full rounded border bg-gray-50 px-3 py-2 text-two outline-none transition duration-100 focus:border-two"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{`${errors.password.message}`}</p>
//               )}
//             </div>

//             <div className="flex justify-center items-center mt-3">
//               <button
//                 disabled={isSubmitting}
//                 className="block rounded-lg w-[40%] px-8 py-2 text-center text-sm font-semibold border-[2px] border-two text-two bg-[#FFFFFF] hover:text-[#FFFFFF] outline-none transition duration-100 hover:bg-two md:text-base"
//               >
//                 {isSubmitting ? "..." : "Entrar"}
//               </button>
//             </div>
//           </div>
//         </form>

//       </div>
//       <div>
//         <img src="/images/back.png" alt="Login Background" className="h-screen w-full object-cover" />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
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

    <>

      <div className="flex flex-col sm:flex-row-reverse h-screen">
        <div className="flex items-center p-4">
          <Link href="/" className="cursor-pointer">
          <img src="/images/logo3.png" alt="Login Background" className="flex sm:hidden w-[200px] p-2 h-full object-cover" />
          </Link>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">

          <h1 className="text-2xl font-extrabold mb-4 text-[rgb(1,24,74)] py-6 md:py-0">Entrar</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg w-[80%] rounded-lg border"
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
          <img
            src="/images/back.png"
            alt="Login Background"
            className="h-full w-full object-contain"
          />
          <img src="/images/logoB.png" alt="logo" className="hidden sm:flex w-[200px] sm:w-[180px]  sm:mt-20 md:mt-8 md:pt-5 h-auto absolute left-[80px] top-20 md:left-[120px] md:top-[80px] lg:top-[26px]" width={"200px"} height={"200px"} />
          <img src="/images/pc.png" alt="pc" className="w-[24rem] sm:w-[18rem] md:w-[20rem] lg:w-[30rem] xl:w-[36rem] h-auto absolute top-[520px] left-[30px] sm:left-[60px] sm:top-[280px] md:left-[120px] md:top-[230px] lg:top-[140px] lg:left-[90px] xl:left-[120px]" />
        </div>
      </div>
    </>
  )


};
export default LoginPage