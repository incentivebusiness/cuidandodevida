import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
// import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// import "./globals.css";
// import AuthProvider from "@/providers/auth";
// import SupabaseProvider from "@/providers/supabase";
// import ToastProvider from "@/providers/toast";

// // const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "All Creative Brindes",
//   description:
//     "Brindes personalizados para sua marca estar presente aonde quer que vá!",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="pt-br">
//       <body>
//         <AuthProvider>
//           <SupabaseProvider>
//             <ToastProvider>{children}</ToastProvider>
//           </SupabaseProvider>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }