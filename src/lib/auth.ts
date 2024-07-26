// import { prisma } from "./prisma";
// import { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",

//       credentials: {
//         email: {
//           label: "email",
//           type: "text",
//         },
//         password: {
//           label: "password",
//           type: "password",
//         },
//       },
//       //@ts-ignore
//       authorize: async (credentials) => {
//         if (!credentials) {
//           return null;
//         }

//         const { email, password } = credentials;

//         const user = await prisma.user.findUnique({
//           where: {
//             email,
//           },
//         });

//         if (!user) {
//           return null;
//         }

//         const userPassword = user.hashedPassword;

//         const isValidPassword = bcrypt.compareSync(password, userPassword);

//         if (!isValidPassword) {
//           return null;
//         }

//         //return user;
//         return {
//           id: user.id,
//           email: user.email,
//         };
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/admin",
//     signOut: "/admin/signout",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };