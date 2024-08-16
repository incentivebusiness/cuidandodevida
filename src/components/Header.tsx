'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   return(
//     <>
//     <div>
//       {/* <img src="./images/hero.png" alt="Logo" className="h-18 absolute top-5 left-20" /> */}
   
//   <div className="hidden sm:flex space-x-4  items-center">
//     <Link href="/page1" className="relative group  text-black transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
//       Nossos Serviços
//       <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
//     </Link>
//     <Link href="/page2" className="relative group hover:bg-blue-600 text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
//       Sobre Nós
//       <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
//     </Link>
//     <Link href="/autenticacao/nova-conta" className="relative group hover:bg-blue-600 text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
//       Criar Conta
//       <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
//     </Link>
//     <Link href="/autenticacao/login" className="relative group bg-[rgb(1,24,74)] hover:bg-[rgb(1,30,90)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
//       Entrar
//       <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
//     </Link>
//   </div>
//   </div>
//   </>
//   )
// }
// export default Header




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
}
const Hero = () => {
  return (
    <div className="relative bg-white p-0 m-0">
      <img src="./images/hero.png" alt="Hero Image" className="w-full h-auto" />
      <img src="./images/logo3.png" alt="Logo" className="h-18 absolute top-5 left-20" />
      <div className="absolute inset-0 flex items-center justify-center ">
      <div className=" bg-gray-100 w-full py-4 px-6 flex justify-between items-center sticky top-0 z-10 rounded-b-xl">
      <div className="logo">
        {/* Aqui você pode inserir seu logo */}
        <img src="./images/logo3.png" alt="Logo" className="h-12" />
      </div>

      {/* Menu hambúrguer para telas pequenas */}
      <button className="block sm:hidden p-2" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-red-700 text-2xl" />
      </button>

      {/* Full-screen modal menu */}
      {isMenuOpen && (
  <div className="fixed inset-0 bg-white z-20 flex flex-row items-center justify-center">
    <button
      className="absolute top-4 right-4 text-red-700 text-2xl"
      onClick={toggleMenu}
    >
      <FontAwesomeIcon icon={faTimes} />
    </button>
    <div className="space-y-4">
      <Link href="/page1" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
        Botão 1
      </Link>
      <Link href="/page2" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
        Botão 2
      </Link>
      <Link href="/autenticacao/nova-conta" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
        Criar conta
      </Link>
      <Link href="/autenticacao/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
        Login
      </Link>
    </div>
  </div>
)}

      {/* Desktop menu */}
      <div className={`hidden sm:flex space-x-4 items-center ${isMenuOpen ? 'hidden' : 'block'}`}>
        {/* Aqui estão os 4 botões */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Botão 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Botão 2
        </button>
        <Link href="/autenticacao/nova-conta" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Criar conta
        </Link>
        <Link href="/autenticacao/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Login
        </Link>
      </div>
    </div>
  );
}


        <div className="p-6 text-left text-white">
          <h1 className="text-md md:text-5xl font-bold mb-2">
            @MAPFRE 
          </h1>
          <h2 className='text-5xl font-extrabold'>Cuidando de Vida</h2>

          <p className="text-lg md:text-xl">
          Incentivando uma vida saudável e sustentável com planos que abrangem diversos serviços visando fazer da sua vida a ideal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;




