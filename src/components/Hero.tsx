'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { url } from 'inspector';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>
    <div className="relative w-full h-screen bg-cover bg-center sm:bg-left bg-no-repeat" style={{ backgroundImage: "url('./images/hero.png')"}}>
      {/* Logo */}
      <div className="absolute p-10 bg-white rounded-r-full sm:bg-transparent md:left-10 sm:p-2 md:p-2 md:top-0 lg:p-1">
        <img src="./images/logo3.png" alt="Logo" className="p-2 h-14 sm:h-[80px] sm:w-60 md:h-20 md:w-30 " />
      </div>

      <button className="block md:hidden absolute top-10 right-10" onClick={toggleMenu}>
           <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-[rgb(1,24,74)] text-2xl" />
         </button>

      {/* Menu */}
      <div className="hidden absolute top-10  lg:flex  right-10 space-x-4 lg:right-20 xl:space-x-8 ">
        <Link href="/page1" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Nossos Serviços
          <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>
        </Link>
        <Link href="/page2" className="relative group text-white transition-transform transform hover:scale-105  focus:outline-none focus:shadow-outline ">
          Sobre Nós
          <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>
        </Link>
        <Link href="/autenticacao/nova-conta" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline duration-700">
          Criar Conta
          <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>

        </Link>
        <Link href="/autenticacao/login" className="relative group bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Entrar
        </Link>
      </div>
       {isMenuOpen && (
       <div className="fixed inset-0  z-20 flex flex-col items-center justify-center" style={{background: "url('./images/sub.jpg'), no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className='bg-white w-full py-4 absolute top-0  '>
        <img src="./images/logo3.png" alt="Logo" className="p-2 h-14 sm:h-[80px] sm:w-60  md:w-200" />
        </div>
       <button className="absolute top-4 right-4 text-red-700 text-2xl" onClick={toggleMenu}>
         <FontAwesomeIcon icon={faTimes} />
       </button>
       <div className="space-y-4 flex flex-col items-center" >
         {/* <Link href="/page1" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
           Botão 1
         </Link>
         <Link href="/page2" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
           Botão 2
         </Link> */}
         <Link href="/autenticacao/login" className="bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-8 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
           Entrar
         </Link>
         <Link href="/autenticacao/nova-conta" className="bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
           Criar conta
         </Link>
         
       </div>
     </div>
     
      )}

      <div className="pt-[200px] pl-20 md:pl-[200px] text-left text-white">
      <h1 className="text-xl sm:text-3xl md:text-3xl font-bold mb-2">
        @MAPFRE
      </h1>
      <h2 className='text-2xl md:text-4xl font-extrabold pb-2'>Cuidando de Vida</h2>
      <p className="text-md sm:text-lg md:text-xl pb-4 sm:pb-6">
        Incentivando uma vida saudável e sustentável<br/>
         com planos que abrangem diversos serviços<br/>
          visando fazer da sua vida a ideal.
      </p>
      <button className='bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline'>Saiba mais!</button>
    </div>

    </div>

   
  </>
  );
};

export default Hero;
