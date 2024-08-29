import { NextRequest, NextResponse } from 'next/server';

// Tipar o middleware como uma função que aceita NextRequest, NextResponse e um callback
type Middleware = (req: NextRequest, res: NextResponse, next: (result?: Error) => void) => void;

// Tipar o handler como uma função que aceita NextRequest e NextResponse e retorna NextResponse
type Handler = (req: NextRequest, res: NextResponse) => NextResponse;

export function withMiddleware(
  middleware: Middleware,
  handler: Handler
) {
  return async (req: NextRequest, res: NextResponse) => {
    // Adaptar o middleware para trabalhar com NextRequest e NextResponse
    await new Promise<void>((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        resolve();
      });
    });

    // Chamar o handler atualizado com NextRequest e retornar um NextResponse
    return handler(req, res);
  };
}
