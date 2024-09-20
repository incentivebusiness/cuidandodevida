// app/success/page.tsx
'use client';
import { useEffect, useState } from 'react';

const Success = () => {
  const [luckyNumber, setLuckyNumber] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLuckyNumber(params.get('luckyNumber'));
    console.log(luckyNumber);
  }, []);

  return (
    <div>
      <h1>Pagamento realizado com sucesso!</h1>
      <p>Seu número da sorte é: {luckyNumber}</p>
    </div>
  );
};

export default Success;
