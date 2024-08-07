
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
  return (
    <div className="border text-xs rounded-md p-4 mb-4 hover:bg-green-100">
      <h2 className="text-xl font-bold text-center pb-10 text-gray-600">{title}</h2>
      <span className="text-blue-600 text-xl font-bold">{value}</span>

      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4 text-gray-800 font-semibold">
          <div>Serviço</div>
          <div className="text-center">Preço Máximo de Seguro</div>
          <div className="text-center">Carência</div>
        </div>
        {descriptions.map((desc, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-center border-t pt-2 text-gray-600">
            <div className="flex items-center">
              {desc.icon && <FontAwesomeIcon icon={desc.icon} className="mr-2" style={{ color: desc.iconColor }} />}
              <p>{desc.text}</p>
            </div>
            <div className="text-center">{desc.maxInsurancePrice || 'N/A'}</div>
            <div className="text-center">
              {typeof desc.hasWaitingPeriod === 'boolean' ? (desc.hasWaitingPeriod ? 'Sim' : 'Não') : desc.hasWaitingPeriod}
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
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faTimes, iconColor: 'red',maxInsurancePrice: "Não há", hasWaitingPeriod: true },
      { text: 'Decessos', icon: faCheck, iconColor: 'green', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - $5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green', hasWaitingPeriod: false, maxInsurancePrice: '$5.000,00' },
      { text: 'Assistência Domiciliar Completa', icon: faTimes, iconColor: 'red',maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: faTimes, iconColor: 'red',maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' }
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
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green',maxInsurancePrice: '$5.000,00', hasWaitingPeriod: false },
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
    <div className="flex flex-col gap-4">
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
    <div className="p-4">
      <h1 className="text-4xl text-center text-gray-800 font-bold py-10">Nossos Planos</h1>
      <ProductsList />
    </div>
  );
};

export default App;
