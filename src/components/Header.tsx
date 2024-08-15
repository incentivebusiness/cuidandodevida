'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return(
    <>
    <div>
      {/* <img src="./images/hero.png" alt="Logo" className="h-18 absolute top-5 left-20" /> */}
   
  <div className="hidden sm:flex space-x-4  items-center">
    <Link href="/page1" className="relative group  text-black transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
      Nossos Serviços
      <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
    </Link>
    <Link href="/page2" className="relative group hover:bg-blue-600 text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
      Sobre Nós
      <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
    </Link>
    <Link href="/autenticacao/nova-conta" className="relative group hover:bg-blue-600 text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
      Criar Conta
      <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
    </Link>
    <Link href="/autenticacao/login" className="relative group bg-[rgb(1,24,74)] hover:bg-[rgb(1,30,90)] text-white font-bold py-2 px-4 rounded-3xl transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">
      Entrar
      <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left"></span>
    </Link>
  </div>
  </div>
  </>
  )
}
export default Header