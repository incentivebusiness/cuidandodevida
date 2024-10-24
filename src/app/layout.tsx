
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/auth";
import ToastProvider from "@/providers/toast";
import SessionTimeout from "@/components/SessionTimeout";
import Wp from "@/components/Wp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Incentive cuidando de vida",
  description: "Cuidando de Vida, um programa que abrange diversas soluções entre seguros, assistências e benefícios, desenvolvidos para cuidar de você e quem você ama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="pt-br">
      <head>

        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <link rel="icon" href="/favicon.png" />

        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G3VYX43SJJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G3VYX43SJJ');
          `}
        </script>

      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ToastProvider>
            <SessionTimeout />
            {children}
            <Wp />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

