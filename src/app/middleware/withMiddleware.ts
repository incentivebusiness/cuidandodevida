import { NextRequest, NextResponse } from 'next/server';

export function withMiddleware(middleware, handler) {
  return async (req, res) => {
    // Adaptar o middleware para trabalhar com NextRequest e NextResponse
    await new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        resolve(result);
      });
    });

    // Chamar o handler atualizado com NextRequest e retornar um NextResponse
    return handler(req, res);
  };
}
