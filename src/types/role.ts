// next-auth.d.ts
import { DefaultSession } from "next-auth";

// Extendendo o tipo `Session` para incluir `role`
declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      email: string;
      name: string;
      role?: string; // Adicione a propriedade role aqui
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role?: string; // Adicione a propriedade role aqui
    hashedPassword?: string;
  }
}
