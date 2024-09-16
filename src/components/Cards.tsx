


// import Image from "next/image";
// import Link from "next/link"; // Importar Link do Next.js
// import React from "react";

// const services = [
//   {
//     id: 1,
//     image: "/images/iconCell.png",
//     title: "Conta Corrente",
//     description: "Movimente seu dinheiro com segurança e rapidez",
//     spanContent: "Sem carência",
//     buttonText: "Ver mais",
//     buttonLink: "/servico-1",
//   },
//   {
//     id: 2,
//     image: "/images/iconDescont.png",
//     title: "Rede de Parcerias",
//     description: "Benefícios, descontos e convênios",
//     spanContent: "Sem carência",
//     buttonText: "Conheça o serviço",
//     buttonLink: "/servico-2",
//   },
//   {
//     id: 3,
//     image: "/images/iconHeart.png",
//     title: "Seguro de Vida",
//     description:
//       "Invalidez permanente e total por acidente*, morte acidental* e auxílio funeral**",
//     spanContent:
//       "Preço máximo de seguro: * R$ 10.000,00 ** R$ 5.000,00 (familiar) e 30 dias de carência",
//     buttonText: "Mais detalhes",
//     buttonLink: "/servico-3",
//   },
//   {
//     id: 4,
//     image: "/images/iconMaca.png",
//     title: "Saúde",
//     description:
//       "Diária de internação hospitalar por acidente* e despesas hospitalares e odontológicas**",
//     spanContent:
//       "Preço máximo de seguro: * R$ 2.250,00 (até 15 diárias de R$ 150,00 cada) ** R$ 3.000,00 e há carência",
//     buttonText: "Saiba mais",
//     buttonLink: "/servico-4",
//   },
//   {
//     id: 5,
//     image: "/images/iconLixo.png",
//     title: "Sorteios",
//     description: "4 sorteios mensais, série aberta e valor líquido",
//     spanContent: "Preço máximo: R$ 5.000,00",
//     buttonText: "Ver serviço",
//     buttonLink: "/servico-5",
//   },
//   {
//     id: 6,
//     image: "/images/iconFerramenta.png",
//     title: "Assistência Domiciliar",
//     description:
//       "Serviços de manutenção com pronto atendimento de profissionais, como: chaveiro, eletricista, encanador, etc",
//     spanContent: "Carência de 72 horas",
//     buttonText: "Descubra mais",
//     buttonLink: "/servico-6",
//   },
//   {
//     id: 7,
//     image: "/images/iconMapfre.png",
//     title: "MAPFRE Cuidando de Você",
//     description: "Rede Tem, descontos em farmácias, telemedicina, etc.",
//     spanContent: "Carência de 72 horas",
//     buttonText: "Ver mais",
//     buttonLink: "/servico-7",
//   },
//   {
//     id: 8,
//     image: "/images/iconPet.png",
//     title: "Assistência Affinity PET",
//     description: "Assistência veterinária com especialistas para o seu pet",
//     spanContent: "Carência de 72 horas",
//     buttonText: "Mais informações",
//     buttonLink: "/servico-8",
//   },
// ];


// const CardGrid = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="bg-[rgb(250,250,250)] border border-gray-200 rounded-lg p-6 shadow-md flex flex-col items-center text-center"
//         >
//           <Image src={service.image} alt={service.title} width={76} height={76} />
//           <h3 className="text-[rgb(1,24,74)] text-lg font-semibold mt-4">{service.title}</h3>
//           <p className="mt-2 text-[rgb(1,24,74)] text-sm">{service.description}</p>

//           {/* Botão abaixo da descrição, redirecionando para a página do serviço */}
//           <Link href={service.buttonLink} passHref>
//             <button className="mt-4 text-sm bg-[rgb(1,24,74)] text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition">
//               {service.buttonText}
//             </button>
//           </Link>

//           {/* Span flexível para diferentes conteúdos */}
//           <span className="text-[10px]  p-2 rounded-md text-[rgb(1,24,74)]">{service.spanContent}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardGrid;
import Image from "next/image";
import Link from "next/link"; // Importar Link do Next.js
import React from "react";

const services = [
  {
    id: 1,
    image: "/images/iconCell.png",
    title: "Conta Corrente",
    description: "Movimente seu dinheiro com segurança e rapidez",
    spanContent: "Sem carência",
    buttonText: "Ver mais",
    buttonLink: "/servico-1",
  },
  {
    id: 2,
    image: "/images/iconDescont.png",
    title: "Rede de Parcerias",
    description: "Benefícios, descontos e convênios",
    spanContent: "Sem carência",
    buttonText: "Conheça o serviço",
    buttonLink: "/servico-2",
  },
  {
    id: 3,
    image: "/images/iconHeart.png",
    title: "Seguro de Vida",
    description:
      "Invalidez permanente e total por acidente*, morte acidental* e auxílio funeral**",
    spanContent:
      "Preço máximo de seguro: * R$ 10.000,00 ** R$ 5.000,00 (familiar) e 30 dias de carência",
    buttonText: "Mais detalhes",
    buttonLink: "/servico-3",
  },
  {
    id: 4,
    image: "/images/iconMaca.png",
    title: "Saúde",
    description:
      "Diária de internação hospitalar por acidente* e despesas hospitalares e odontológicas**",
    spanContent:
      "Preço máximo de seguro: * R$ 2.250,00 (até 15 diárias de R$ 150,00 cada) ** R$ 3.000,00 e há carência",
    buttonText: "Saiba mais",
    buttonLink: "/servico-4",
  },
  {
    id: 5,
    image: "/images/iconLixo.png",
    title: "Sorteios",
    description: "4 sorteios mensais, série aberta e valor líquido",
    spanContent: "Preço máximo: R$ 5.000,00",
    buttonText: "Ver serviço",
    buttonLink: "/servico-5",
  },
  {
    id: 6,
    image: "/images/iconFerramenta.png",
    title: "Assistência Domiciliar",
    description:
      "Serviços de manutenção com pronto atendimento de profissionais, como: chaveiro, eletricista, encanador, etc",
    spanContent: "Carência de 72 horas",
    buttonText: "Descubra mais",
    buttonLink: "/servico-6",
  },
  {
    id: 7,
    image: "/images/iconMapfre.png",
    title: "MAPFRE Cuidando de Você",
    description: "Rede Tem, descontos em farmácias, telemedicina, etc.",
    spanContent: "Carência de 72 horas",
    buttonText: "Ver mais",
    buttonLink: "/servico-7",
  },
  {
    id: 8,
    image: "/images/iconPet.png",
    title: "Assistência Affinity PET",
    description: "Assistência veterinária com especialistas para o seu pet",
    spanContent: "Carência de 72 horas",
    buttonText: "Mais informações",
    buttonLink: "/servico-8",
  },
];

const filterServices = (contrated_plan) => {
  // Exibir todos os serviços para plano Plus
  if (contrated_plan === "plus") return services;

  // Excluir serviços 8 e 6 para plano Médio
  if (contrated_plan === "medium") {
    return services.filter((service) => service.id !== 6 && service.id !== 8);
  }

  // Excluir serviços 8, 6 e 4 para plano Básico
  if (contrated_plan === "basic") {
    return services.filter(
      (service) => service.id !== 4 && service.id !== 6 && service.id !== 8
    );
  }

  return services; // Caso não tenha plano definido, exibir todos
};

const CardGrid = ({ contrated_plan }) => {
  const filteredServices = filterServices(contrated_plan);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredServices.map((service, index) => (
        <div
          key={index}
          className="bg-[rgb(250,250,250)] border border-gray-200 rounded-lg p-6 shadow-md flex flex-col items-center text-center"
        >
          <Image src={service.image} alt={service.title} width={76} height={76} />
          <h3 className="text-[rgb(1,24,74)] text-lg font-semibold mt-4">{service.title}</h3>
          <p className="mt-2 text-[rgb(1,24,74)] text-sm">{service.description}</p>

          {/* Botão abaixo da descrição, redirecionando para a página do serviço */}
          <Link href={service.buttonLink} passHref>
            <button className="mt-4 text-sm bg-[rgb(1,24,74)] text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition">
              {service.buttonText}
            </button>
          </Link>

          {/* Span flexível para diferentes conteúdos */}
          <span className="text-[10px]  p-2 rounded-md text-[rgb(1,24,74)]">{service.spanContent}</span>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
