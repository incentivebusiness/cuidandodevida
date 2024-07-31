import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

type Description = {
  text: string;
  icon?: any;
  iconColor?: string;
};

const CardProducts = ({ title, descriptions, value, type }) => {
  return (
    <div className="border rounded-md p-4 mb-4 hover:bg-green-100">
      <h2 className="text-xl font-bold text-center pb-10 text-gray-600">{title}</h2>
      {descriptions.map((desc, index) => (
        <div key={index} className="flex items-center text-gray-600">
          {desc.icon && <FontAwesomeIcon icon={desc.icon} className="mr-2" style={{ color: desc.iconColor }} />}
          <p>{desc.text}</p>
        </div>
      ))}
      <div className="mt-2 flex justify-between items-center">
        <span className="text-blue-600 font-bold">{value}</span>
        <span className="text-sm text-gray-500">{type}</span>
      </div>
    </div>
  );
};

const MockData = [
  {
    title: 'Plano Básico',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faCheck, iconColor: 'green' },
      { text: 'Morte Acidental', icon: faCheck, iconColor: 'green' },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faCheck, iconColor: 'green' },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faCheck, iconColor: 'green' },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faCheck, iconColor: 'green' },
      { text: 'Decessos', icon: faCheck, iconColor: 'green' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green' },
      { text: 'Assistência Domiciliar Completa', icon: faCheck, iconColor: 'green' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green' },
      { text: 'Assistência Affinity PET', icon: faCheck, iconColor: 'green' }
    ],
    value: '$49,90',
    type: 'Type A'
  },
  {
    title: 'Plano Médio',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faCheck, iconColor: 'green' },
      { text: 'Morte Acidental', icon: faTimes, iconColor: 'red' },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faCheck, iconColor: 'green' },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faTimes, iconColor: 'red' },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faCheck, iconColor: 'green' },
      { text: 'Decessos', icon: faTimes, iconColor: 'red' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faCheck, iconColor: 'green' },
      { text: 'Assistência Domiciliar Completa', icon: faTimes, iconColor: 'red' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faCheck, iconColor: 'green' },
      { text: 'Assistência Affinity PET', icon: faTimes, iconColor: 'red' }
    ],
    value: '$69,90',
    type: 'Type B'
  },
  {
    title: 'Plano Plus',
    descriptions: [
      { text: 'Rede de Parcerias', icon: faTimes, iconColor: 'red' },
      { text: 'Morte Acidental', icon: faTimes, iconColor: 'red' },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: faTimes, iconColor: 'red' },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: faTimes, iconColor: 'red' },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: faTimes, iconColor: 'red' },
      { text: 'Decessos', icon: faTimes, iconColor: 'red' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: faTimes, iconColor: 'red' },
      { text: 'Assistência Domiciliar Completa', icon: faTimes, iconColor: 'red' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: faTimes, iconColor: 'red' },
      { text: 'Assistência Affinity PET', icon: faTimes, iconColor: 'red' }
    ],
    value: '$89,90',
    type: 'Type C'
  }
];

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductsList />
    </div>
  );
};

export default App;
