'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { url } from 'inspector';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import ButtonCompany from './ButtonCompany';

const Hero = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    const element = document.getElementById('target-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleServices = () => {
    const element = document.getElementById('target-services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative w-full h-screen bg-cover bg-center sm:bg-left bg-no-repeat" style={{ backgroundImage: "url('/images/hero.png')" }}>
        {/* Logo */}
        <div className="absolute p-10 bg-white rounded-r-full sm:bg-transparent md:left-10 sm:p-2 md:p-2 md:top-0 lg:p-1 ">
          <img src="./images/logo3.png" alt="Logo" className="sm:pt-10 sm:pl-10 md:pt-5 md:pl-20 xl:pt-5 h-auto sm:h-[80px] sm:w-[260px] md:h-auto md:w-[290px] lg:h-auto lg:w-[300px]" />
        </div>

        <button className="block lg:hidden absolute top-10 right-10" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-[rgb(1,24,74)] text-2xl" />
        </button>

        {/* Menu */}
        <div className="hidden md:absolute top-10  lg:flex  right-10 space-x-4 lg:right-17 xl:space-x-8 ">
          <ButtonCompany />

          <Link href="/" onClick={handleServices} className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
            Nossos Serviços
            <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>
          </Link>
          <Link href="/" onClick={handleClick} className="relative group text-white transition-transform transform hover:scale-105  focus:outline-none focus:shadow-outline ">
            Sobre Nós
            <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>
          </Link>
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/profile" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
                  <p>Bem-vindo, {session?.user?.name}!</p>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-blue-600 hover:underline"
                >
                  Sair
                </button>
              </>
            ) : (
              <div>
                {/* <Link href="/login">
            <span className="text-blue-600 hover:underline">Entrar</span>
          </Link>
           <Link href="/login">
           <span className="text-blue-600 hover:underline">Criar Conta</span>
         </Link> */} <Link href="/autenticacao/nova-conta" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline duration-700">
                  Criar Conta
                  <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>

                </Link>
                <Link href="/autenticacao/login" className="relative mx-9 group bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
                  Entrar
                </Link>
              </div>
            )}
          </div>
          {/* <Link href="/autenticacao/nova-conta" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline duration-700">
          Criar Conta
          <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>

        </Link>
        <Link href="/autenticacao/login" className="relative group bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
          Entrar
        </Link> */}
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-white" >
            <div className='bg-white w-full py-4 absolute top-0  '>
              <img src="./images/logo3.png" alt="Logo" className="pt-12 pl-14 h-auto sm:w-60 md:w-[300px]" />
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
              <Link href="/profile" className="bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-8 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
                Perfil
              </Link>
              <Link href="/autenticacao/login" className="bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-8 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
                Entrar
              </Link>
              <Link href="/autenticacao/nova-conta" className="bg-[rgb(1,24,74)] hover:bg-[rgb(26,55,112)] text-white font-bold  py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
                Criar conta
              </Link>

            </div>
          </div>

        )}
        <div className='container mx-auto h-full '>
          <div className="container mx-auto h-full flex items-center justify-center">
            <div className="text-left text-white px-8">
              <Image src="/images/logoMapfre.png" alt="Logo MAPFRE" width={160} height={100} className='h-auto w-auto sm:w-[90px] md:w-[120px] xl:w-[180px]' />
              <h2 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold pb-4 md:pb-6'>
                Cuidando de Vida
              </h2>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:pb-9 pb-6 sm:pb-6 md:pb-8">
                Incentivando uma vida saudável e sustentável<br />
                com planos que abrangem diversos serviços<br />
                visando fazer da sua vida a ideal.
              </p>
              <button
                className='bg-[rgb(1,24,74)] sm:text-md xl:text-2xl xl:p-4 hover:bg-[rgb(26,55,112)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline'
                onClick={handleClick}
              >Saiba mais!</button>
            </div>
          </div>
        </div>


      </div>


    </>
  );
};

export default Hero;
