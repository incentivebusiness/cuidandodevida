'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-gray-100 w-full py-4 px-6 flex justify-between items-center sticky top-0 z-10 rounded-b-xl">
      <div className="logo">
        {/* Aqui você pode inserir seu logo */}
        <img src="./images/logo.png" alt="Logo" className="h-12" />
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

export default Header;
