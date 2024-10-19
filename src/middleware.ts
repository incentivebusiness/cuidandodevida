import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Exclui as rotas de autenticação do NextAuth
  if (pathname.startsWith("/api/auth") || pathname.startsWith("/api/public"))  {
    return NextResponse.next();
  }

  // Redireciona se não houver token (usuário não autenticado)
  if (!token) {
    // Se for uma rota de API, retorna uma resposta 401 (não autorizado)
    if (pathname.startsWith("/api")) {
      return new NextResponse(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Se for uma rota de frontend, redireciona para a página inicial
    return NextResponse.redirect(new URL("/", req.url));
  }

    const admin = token.role;

    // Apenas usuários master podem acessar a lista de empresas
    if (admin !== "ADMIN" && pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }

  // Permite a continuação da requisição
  return NextResponse.next();
}

// Aplica o middleware para as rotas de dashboard e de API, exceto as rotas de autenticação do NextAuth
export const config = {
  matcher: [
    "/dashboard/:path*", // Rotas de dashboard
    "/api/:path*", 
    "/admin/:path*",
    "/conta/:path*"// Rotas de API
  ],
};
