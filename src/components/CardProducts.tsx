// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// const router = useRouter();

// import { useSession } from 'next-auth/react'; // Importa o hook useSession
// type Description = {
//   text: string;
//   icon?: string; // Change to string for image paths
//   iconColor?: string;
//   maxInsurancePrice?: string;
//   hasWaitingPeriod: boolean | string;
// };

// type CardProductsProps = {
//   title: string;
//   descriptions: Description[];
//   value: string;
//   type: string;
//   link: string;
//   onSelect: (type: string) => void;
//   plan: string;
// };

// const CardProducts: React.FC<CardProductsProps> = ({ title, descriptions, value, type, link, onSelect, plan  }) => {
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

//   const handlePlanSelection = (plan: string) => {
//     setSelectedPlan(plan);
//   };


//   const { data: session } = useSession();
//   const isAuthenticated = !!session;

//   const isHighlighted = type === 'Type C';

//   const handleClick = () => {
//     if (!isAuthenticated) {
//       // Redireciona para a página de login
//       router.push('/autenticacao/login');
//     } else {
//       onSelect(plan);
//       // Redireciona para o formulário do DocuSign se o usuário estiver autenticado
//       window.location.href = 'https://demo.services.docusign.net/webforms-ux/v1.0/forms/8e8ff24fcc9f18493e3f3460c073bb01';
//     }
//   };

//   return (
//     <div
//       className={`border text-xs rounded-2xl p-4 mb-4 hover:border-gray-300 hover:shadow-xl ${isHighlighted ? 'bg-[rgb(1,24,74)] text-white' : 'bg-white text-[rgb(1,24,74)]'
//         }`}
//     >
//       <h2 className={`text-md font-extrabold text-left pt-4 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
//         {title}
//       </h2>
//       <span className={`text-3xl font-extrabold ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
//         {value}
//       </span>
//       <div className="text-center pt-4">
//         <div
//           className={`relative inline-block rounded-full ${isHighlighted ? '' : 'border-2'}`}
//           style={{
//             width: 'fit-content',
//           }}
//         >
//           {!isHighlighted && (
//             <div
//               className="absolute inset-0 rounded-full border-2"
//               style={{
//                 background: 'linear-gradient(to right, rgb(21,154,194), rgb(131,189,87))',
//                 backgroundClip: 'padding-box',
//                 borderRadius: '9999px',
//               }}
//             />
//           )}
//           <button
//             // href={link} // Utiliza o link específico
//             onClick={handleClick}
//             className={`relative font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline ${isHighlighted ? 'bg-gradient-to-r from-[rgb(21,154,194)] to-[rgb(131,189,87)] text-white' : 'bg-white border border-[rgb(1,24,74)] text-[rgb(1,24,74)]'}`}
//             style={{
//               borderRadius: '9999px',
//               zIndex: 1,
//             }}
//           >
//             Adquira agora!
//           </button>
//         </div>
//       </div>
//       <div className="mt-4">
//         <div className={`grid grid-cols-3 gap-4 font-semibold ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
//           <div>Serviço</div>
//           <div className="text-center">Preço Máximo de Seguro</div>
//           <div className="text-center">Carência</div>
//         </div>
//         {descriptions.map((desc, index) => (
//           <div
//             key={index}
//             className={`grid grid-cols-3 gap-4 items-center border-t pt-2 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'
//               }`}
//           >
//             <div className="flex items-center">
//               {desc.icon && (
//                 <img src={desc.icon} alt={desc.text} className="mr-2" style={{ color: desc.iconColor }} />
//               )}
//               <p>{desc.text}</p>
//             </div>
//             <div className="text-center">{desc.maxInsurancePrice || 'N/A'}</div>
//             <div className="text-center">
//               {typeof desc.hasWaitingPeriod === 'boolean'
//                 ? desc.hasWaitingPeriod
//                   ? 'Sim'
//                   : 'Não'
//                 : desc.hasWaitingPeriod}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const MockData: CardProductsProps[] = [
//   {
//     title: 'Plano Básico',
//     descriptions: [
//       { text: 'Conta Corrente', icon: '/images/check.png', hasWaitingPeriod: false },
//       { text: 'Rede de Parcerias', icon: '/images/check.png', hasWaitingPeriod: false },
//       { text: 'Morte Acidental', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: false },
//       { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: true },
//       { text: 'Decessos', icon: '/images/check.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
//       { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/check.png', hasWaitingPeriod: false, maxInsurancePrice: 'R$5.000,00' },
//       { text: 'Assistência Domiciliar Completa', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
//       { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/check.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
//       { text: 'Assistência Affinity PET', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
      
//     ],
//     link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff1601914dc5f9a902c5',
//     value: 'R$49,90',
//     type: 'Type A',
//      plan: 'basico'

//   },
//   {
//     title: 'Plano Médio',
//     descriptions: [
//       { text: 'Conta Corrente', icon: '/images/check.png', hasWaitingPeriod: false },
//       { text: 'Rede de Parcerias', icon: '/images/check.png', hasWaitingPeriod: false },
//       { text: 'Morte Acidental', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/check.png', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
//       { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/check.png', maxInsurancePrice: "R$3.000,00", hasWaitingPeriod: true },
//       { text: 'Decessos', icon: '/images/check.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
//       { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/check.png', maxInsurancePrice: 'R$5.000,00', hasWaitingPeriod: false },
//       { text: 'Assistência Domiciliar Completa', icon: '/images/cancel.png', hasWaitingPeriod: '72hrs' },
//       { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/check.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
//       { text: 'Assistência Affinity PET', icon: '/images/cancel.png', hasWaitingPeriod: '72hrs' },
    
//     ],
//       link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc691e902eb',
//     value: 'R$69,90',
//     type: 'Type B',
//      plan: 'medio'
//   },
//   {
//     title: 'Plano Plus',
//     descriptions: [
//       { text: 'Conta Corrente', icon: '/images/checkwh.png', hasWaitingPeriod: false },
//       { text: 'Rede de Parcerias', icon: '/images/checkwh.png', hasWaitingPeriod: false },
//       { text: 'Morte Acidental', icon: '/images/checkwh.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/checkwh.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
//       { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/checkwh.png', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
//       { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/checkwh.png', maxInsurancePrice: "R$3.000,00", hasWaitingPeriod: true },
//       { text: 'Decessos', icon: '/images/checkwh.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
//       { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/checkwh.png', maxInsurancePrice: 'R$5.000,00', hasWaitingPeriod: false },
//       { text: 'Assistência Domiciliar Completa', icon: '/images/checkwh.png', hasWaitingPeriod: '72hrs' },
//       { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/checkwh.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
//       { text: 'Assistência Affinity PET', icon: '/images/checkwh.png', hasWaitingPeriod: '72hrs' },
      
//     ],
//     link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc6c86102ec',
//     value: 'R$89,90',
//     type: 'Type C', // Highlighted card
//     plan: 'plus'
//   }
// ];

// const ProductsList: React.FC = () => {
//   const handlePlanSelect = async (planType: string) => {
//     try {
//       const response = await fetch('/api/selectPlan', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ planType }),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao atualizar o plano selecionado');
//       }

//       const data = await response.json();
//       console.log('plano selecionado:', data);
//     } catch (error) {
//       console.error('Erro ao enviar a solicitação de plano selecionado:', error);
//     }
//   };
//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//       {MockData.map((product, index) => (
//         <CardProducts
//           key={index}
//           onSelect={handlePlanSelect}
//           title={product.title}
//           descriptions={product.descriptions}
//           value={product.value}
//           type={product.type}
//           link={product.link}
//           plan={product.plan}
//         />
//       ))}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   return (
//     <div id='target-services' className="px-10 md:px-20 bg-gray-100 py-5 pb-14">
//       <h1 className="text-4xl text-center text-[rgb(1,24,74)] font-extrabold py-10">Nossos Planos</h1>
//       <ProductsList />
//     </div>
//   );
// };

// export default App;

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'; 



type Description = {
  text: string;
  icon?: string; 
  iconColor?: string;
  maxInsurancePrice?: string;
  hasWaitingPeriod: boolean | string;
};

type CardProductsProps = {
  title: string;
  descriptions: Description[];
  value: string;
  type: string;
  link: string;
  onSelect: (type: string) => void;
  plan: string;
};

const CardProducts: React.FC<CardProductsProps> = ({ title, descriptions, value, type, link, onSelect, plan }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const { data: session } = useSession();
  

  const isAuthenticated = !!session;
  const isHighlighted = type === 'Type C';


  const handleClick = () => {
    if (!isAuthenticated) {
      // Redireciona para a página de login
      window.location.href = '/autenticacao/login';
    } else {
      onSelect(plan);
      // Redireciona para o formulário do DocuSign
      window.location.href = 'https://demo.services.docusign.net/webforms-ux/v1.0/forms/8e8ff24fcc9f18493e3f3460c073bb01';
    }
  };

  // const router = useRouter(); 
  // const handleClick = () => {
  //   if (!isAuthenticated) {
  //     router.push('/autenticacao/login');
  //   } else {
  //     onSelect(plan);
  //     window.location.href = 'https://demo.services.docusign.net/webforms-ux/v1.0/forms/8e8ff24fcc9f18493e3f3460c073bb01';
  //   }
  // };

  return (
    <div
      className={`border text-xs rounded-2xl p-4 mb-4 hover:border-gray-300 hover:shadow-xl ${isHighlighted ? 'bg-[rgb(1,24,74)] text-white' : 'bg-white text-[rgb(1,24,74)]'}`}
    >
      <h2 className={`text-md font-extrabold text-left pt-4 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
        {title}
      </h2>
      <span className={`text-3xl font-extrabold ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}>
        {value}
      </span>
      <div className="text-center pt-4">
        <div className={`relative inline-block rounded-full ${isHighlighted ? '' : 'border-2'}`} style={{ width: 'fit-content' }}>
          {!isHighlighted && (
            <div
              className="absolute inset-0 rounded-full border-2"
              style={{
                background: 'linear-gradient(to right, rgb(21,154,194), rgb(131,189,87))',
                backgroundClip: 'padding-box',
                borderRadius: '9999px',
              }}
            />
          )}
          <button
            onClick={handleClick}
            className={`relative font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline ${isHighlighted ? 'bg-gradient-to-r from-[rgb(21,154,194)] to-[rgb(131,189,87)] text-white' : 'bg-white border border-[rgb(1,24,74)] text-[rgb(1,24,74)]'}`}
            style={{
              borderRadius: '9999px',
              zIndex: 1,
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
            className={`grid grid-cols-3 gap-4 items-center border-t pt-2 ${isHighlighted ? 'text-white' : 'text-[rgb(1,24,74)]'}`}
          >
            <div className="flex items-center">
              {desc.icon && (
                <img src={desc.icon} alt={desc.text} className="mr-2" style={{ color: desc.iconColor }} />
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
      { text: 'Conta Corrente', icon: '/images/check.png', hasWaitingPeriod: false },
      { text: 'Rede de Parcerias', icon: '/images/check.png', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: true },
      { text: 'Decessos', icon: '/images/check.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/check.png', hasWaitingPeriod: false, maxInsurancePrice: 'R$5.000,00' },
      { text: 'Assistência Domiciliar Completa', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/check.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: '/images/cancel.png', maxInsurancePrice: "Não há", hasWaitingPeriod: '72hrs' },
    ],
    link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff1601914dc5f9a902c5',
    value: 'R$49,90',
    type: 'Type A',
    plan: 'BASICO',
    onSelect: () => console.log('Plano basico selecionado')
  },
  {
    title: 'Plano Médio',
    descriptions: [
      { text: 'Conta Corrente', icon: '/images/check.png', hasWaitingPeriod: false },
      { text: 'Rede de Parcerias', icon: '/images/check.png', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/check.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/check.png', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/check.png', maxInsurancePrice: "R$3.000,00", hasWaitingPeriod: true },
      { text: 'Decessos', icon: '/images/check.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/check.png', maxInsurancePrice: 'R$5.000,00', hasWaitingPeriod: false },
      { text: 'Assistência Domiciliar Completa', icon: '/images/cancel.png', hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/check.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: '/images/cancel.png', hasWaitingPeriod: '72hrs' },
    ],
    link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc691e902eb',
    value: 'R$69,90',
    type: 'Type B',
    plan: 'MEDIO',
    onSelect: () => console.log('Plano Médio selecionado')
  },
  {
    title: 'Plano Plus',
    descriptions: [
      { text: 'Conta Corrente', icon: '/images/checkwh.png', hasWaitingPeriod: false },
      { text: 'Rede de Parcerias', icon: '/images/checkwh.png', hasWaitingPeriod: false },
      { text: 'Morte Acidental', icon: '/images/checkwh.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Invalidez Permanente e Total por Acidente - IPTA', icon: '/images/checkwh.png', maxInsurancePrice: 'R$10.000,00', hasWaitingPeriod: false },
      { text: 'Diária de Internação Hospitalar por Acidente', icon: '/images/checkwh.png', maxInsurancePrice: "Até 15 diárias de 1500,00 cada, limitado a R$2.250,00", hasWaitingPeriod: false },
      { text: 'Despesas Médicas Hospitalares e Odontológicas', icon: '/images/checkwh.png', maxInsurancePrice: "R$3.000,00", hasWaitingPeriod: true },
      { text: 'Decessos', icon: '/images/checkwh.png', maxInsurancePrice: '(familiar, Titular, Cônjuge ou Filhos - R$5.000,00)', hasWaitingPeriod: '30 dias' },
      { text: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', icon: '/images/checkwh.png', maxInsurancePrice: 'R$5.000,00', hasWaitingPeriod: false },
      { text: 'Assistência Domiciliar Completa', icon: '/images/checkwh.png', hasWaitingPeriod: '72hrs' },
      { text: 'Programa - MAPFRE Cuidando de Você', icon: '/images/checkwh.png', maxInsurancePrice: 'Rede TEM + Descontos em Farmácias + Telemedicina Familiar(com pagamento de consulta)', hasWaitingPeriod: '72hrs' },
      { text: 'Assistência Affinity PET', icon: '/images/checkwh.png', hasWaitingPeriod: '72hrs' },
    ],
    link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849146ff3d01914dc6c86102ec',
    value: 'R$89,90',
    type: 'Type C',
    plan: 'PLUS',
    onSelect: () => console.log('Plano plus selecionado')
  }
];

const ProductsList: React.FC = () => {
  const handlePlanSelect = async (planType: string) => {
    try {
      const response = await fetch('/api/selectPlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planType }),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar o plano selecionado');
      }
    
     
      const data = await response.json();
      const dados = data ? JSON.parse(data) : null;
      console.log('plano selecionado:', dados);
      
      console.log('plano selecionado:', data);
    } catch (error) {
      console.error('Erro ao enviar a solicitação de plano selecionado:', error);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {MockData.map((product, index) => (
        <CardProducts
          key={index}
          onSelect={handlePlanSelect}
          title={product.title}
          descriptions={product.descriptions}
          value={product.value}
          type={product.type}
          link={product.link}
          plan={product.plan}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div id='target-services' className="px-10 md:px-20 bg-gray-100 py-5 pb-14">
      <h1 className="text-4xl text-center text-[rgb(1,24,74)] font-extrabold py-10">Nossos Planos</h1>
      <ProductsList />
    </div>
  );
};

export default App;
