import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const url = req.nextUrl.clone();

  if (!token) {
    // Se não estiver autenticado, redirecione para a página de login
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/admin') && token.role !== 'ADMIN') {
    // Se a rota for '/admin' e o usuário não for admin, redirecione para o perfil
    url.pathname = '/profile';
    return NextResponse.redirect(url);
  }

  // Permitir a continuação da requisição
  return NextResponse.next();
}

// Defina as rotas para aplicar o middleware
export const config = {
  matcher: ['/admin/:path*', '/profile/:path*'],
};
