
import {prisma} from "./prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      //@ts-ignore
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          return null;
        }

        const userPassword = user.hashedPassword;
        const isValidPassword = bcrypt.compareSync(password, userPassword);

        if (!isValidPassword) {
          return null;
        }

        // Include role in the returned object
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role, // Assuming "role" is a column in your "user" table
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/autenticacao/login",
    signOut: "/autenticacao/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // Include the role in the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
        token.role = user.role;
      }
      return token;
    },
    // Make the role available in the session
    async session({ session, token }: { session: any; token: any }) {
      if (token?.id) {
        session.user.id = token.id; // Adiciona o ID do usuário à sessão
      }
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
  },
  },
};
