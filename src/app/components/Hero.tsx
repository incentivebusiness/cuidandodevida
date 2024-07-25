import React from 'react';

const Hero = () => {
  return (
    <div className="relative  ">
      <img src="./images/hero.jpg" alt="Hero Image" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-red-600 bg-opacity-50">
        <div className="p-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Bem-vindo, cliente MAPFRE Cuidando de Você!
          </h1>
          <p className="text-lg md:text-xl">
            A partir de agora você terá acesso ao programa de saúde mais completo do Brasil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
