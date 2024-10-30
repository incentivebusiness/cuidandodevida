// app/details/[id].js
import Link from 'next/link';
import { Services } from '../../components/Cards';

const DetailsPage = ({ params }) => {
  const { id } = params; // Obtenha o ID da URL
  const data = Services[id]; // Busque os dados com base no ID

  if (!data) {
    return <p>Item não encontrado.</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Link href="/">Voltar</Link>
    </div>
  );
};

export default DetailsPage;
