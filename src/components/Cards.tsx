import Image from "next/image";
import React from "react";

const services = [
  { image: "/images/iconCell.png", title: "Serviço 1", description: "Descrição do serviço 1." },
  { image: "/images/iconDescont.png",title: "Serviço 2", description: "Descrição do serviço 2, com mais texto para testar o layout." },
  { image: "/images/iconHeart.png",title: "Serviço 3", description: "Descrição do serviço 3." },
  { image: "/images/iconMaca.png",title: "Serviço 4", description: "Descrição do serviço 4, com mais detalhes e informações extras." },
  { image: "/images/iconLixo.png",title: "Serviço 5", description: "Descrição do serviço 5." },
  { image: "/images/iconFerramenta.png",title: "Serviço 6", description: "Descrição do serviço 6." },
  { image: "/images/iconMapfre.png",title: "Serviço 7", description: "Descrição do serviço 7, com mais detalhes." },
  { image: "/images/iconPet.png",title: "Serviço 8", description: "Descrição do serviço 8." },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {services.map((service, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            <Image src={service.image} alt={service.title} width={100} height={100} />
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
