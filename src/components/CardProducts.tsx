import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

type Description = {
  text: string;
  icon?: any;
  iconColor?: string;
  maxInsurancePrice?: string;
  hasWaitingPeriod: boolean | string;
};

type CardProductsProps = {
  title: string;
  descriptions: Description[];
  value: string;
  type: string;
};

const CardProducts: React.FC<CardProductsProps> = ({ title, descriptions, value, type }) => {
  const isHighlighted = type === 'Type C'; // Altere para o tipo que você deseja destacar

  return (
    <div
      className={`border text-xs rounded-2xl p-4 mb-4 hover:border-gray-300 hover:shadow-xl ${isHighlighted ? 'bg-[rgb(1,24,74)] text-white' : 'bg-white text-[rgb(1,24,74)]'
        }`}
    >
      <h2 className={`text-md font-extrabold text-left pt-4 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
        {title}
      </h2>
      <span className={`text-3xl font-extrabold ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
        {value}
      </span>
      <div className="text-center pt-4">
  <div
    className={`relative inline-block rounded-full ${isHighlighted ? '' : 'border-2'}`}
    style={{
      width: 'fit-content', // Ajusta a largura conforme o conteúdo
    }}
  >
    {/* Pseudo-elemento para borda com gradiente */}
    {!isHighlighted && (
      <div
        className="absolute inset-0 rounded-full border-2"
        style={{
          background: 'linear-gradient(to right, rgb(21,154,194), rgb(131,189,87))',
          backgroundClip: 'padding-box',
          borderRadius: '9999px', // Garante que a borda com gradiente esteja arredondada
        }}
      />
    )}
    <button
      className={`relative font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline ${isHighlighted ? 'bg-gradient-to-r from-[rgb(21,154,194)] to-[rgb(131,189,87)] text-white' : 'bg-white text-[rgb(1,24,74)]'}`}
      style={{
        borderRadius: '9999px', // Garante que o botão também esteja arredondado
        zIndex: 1, // Garante que o botão fique acima do pseudo-elemento
      }}
    >
      Adquira agora!
    </button>
  </div>
</div>
      <div className="mt-4">
        <div className={`grid grid-cols-3 gap-4 font-semibold ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
          <div>Serviço</div>
          <div className="text-center">Preço Máximo de Seguro</div>
          <div className="text-center">Carência</div>
        </div>
        {descriptions.map((desc, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 items-center border-t pt-2 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'
              }`}
          >
            <div className="flex items-center">
              {desc.icon && (
                <FontAwesomeIcon icon={desc.icon} className="mr-2" style={{ color: desc.iconColor }} />
              )}
              <p>{desc.text}</p>
            </div>
            <div className="text-center">{desc.maxInsurancePrice || 'N/A'}</div>
            <div className="text-center">
              {typeof desc.hasWaitingPeriod === 'boolean'
                ? desc.hasWaitingPeriod
                  ? 'Sim'
                  : 'Não'
                : desc.hasWaitingPeriod}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const MockData: CardProductsProps[] = [
  {
    title: 'Plano Básico',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faCheck, iconColor: 'green', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faTimes, iconColor: 'red', maxInsurancePrice: "Não há", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faTimes, iconColor: 'red', maxInsurancePrice: "Não há", hasWaitingPeriod: true },
      { text: 'Decessos', icon: faCheck, iconColor: 'green', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - $5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green', hasWaitingPeriod: false, maxInsurancePrice: '$5.000,00' },
      { text: 'Assistência Domiciliar Completa', icon: faTimes, iconColor: 'red', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: faTimes, iconColor: 'red', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' }
    ],
    value: '$49,90',
    type: 'Type A'
  },
  {
    title: 'Plano Médio',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faCheck, iconColor: 'green', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faCheck, iconColor: 'green', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faCheck, iconColor: 'green', maxInsurancePrice: "$3.000,00", hasWaitingPeriod: true },
      { text: 'Decessos', icon: faCheck, iconColor: 'green', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - $5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$5.000,00', hasWaitingPeriod: false },
      { text: 'Assistência Domiciliar Completa', icon: faTimes, iconColor: 'red', hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: faTimes, iconColor: 'red', hasWaitingPeriod: '72hrs' }
    ],
    value: '$69,90',
    type: 'Type B'
  },
  {
    title: 'Plano Plus',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faCheck, iconColor: 'green', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faCheck, iconColor: 'green', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faCheck, iconColor: 'green', maxInsurancePrice: "$3.000,00", hasWaitingPeriod: true },
      { text: 'Decessos', icon: faCheck, iconColor: 'green', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - $5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green', maxInsurancePrice: '$5.000,00', hasWaitingPeriod: false },
      { text: 'Assistência Domiciliar Completa', icon: faCheck, iconColor: 'green', hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: faCheck, iconColor: 'green', hasWaitingPeriod: '72hrs' }
    ],
    value: '$89,90',
    type: 'Type C'
  }
];

const ProductsList: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {MockData.map((product, index) => (
        <CardProducts
          key={index}
          title={product.title}
          descriptions={product.descriptions}
          value={product.value}
          type={product.type}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="px-10 md:px-20 bg-gray-100 py-5 pb-14">
      <h1 className="text-4xl text-center text-[rgb(1,24,74)] font-bold py-10">Nossos Planos</h1>
      <ProductsList />
    </div>
  );
};

export default App;
