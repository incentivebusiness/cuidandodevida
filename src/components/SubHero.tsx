
import React from 'react';

const SubHero = () => {
  return (
    <div className="w-full text-[rgb(1,24,74)] bg-white py-16 px-10 lg:px-20 ">
      {/* Container principal usando Flexbox */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Coluna da Imagem */}
        <div className="flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0">
          <img src="./images/homan.png" alt="Imagem Descritiva" className="h-48 lg:h-auto max-h-[300px] w-full object-contain" />
        </div>

        {/* Coluna do Texto */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
          <h1 className='text-2xl font-semibold mb-4'>Sobre</h1>
          <p className="leading-relaxed">
            Pensada para trazer benefícios únicos que melhorem a vida e a saúde das pessoas, nós desenvolvemos o projeto Cuidando de Vida, que é um programa de incentivo a uma vida saudável e sustentável com planos que abrangem diversos serviços que visam fazer da sua vida a ideal.
          </p>
        </div>

      </div>
    </div>
  );
}

export default SubHero;

