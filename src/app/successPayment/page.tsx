// pages/success.tsx
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { luckyNumber } = router.query;

  return (
    <div>
      <h1>Pagamento realizado com sucesso!</h1>
      <p>Seu número da sorte é: {luckyNumber}</p>
    </div>
  );
};

export default Success;
