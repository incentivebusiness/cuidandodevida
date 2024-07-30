import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-100 w-full py-4 px-6 flex justify-between items-center sticky top-0 z-10 rounded-b-xl">
      <div className="logo">
        {/* Aqui você pode inserir seu logo */}
        <img src="./images/logo.png" alt="Logo" className="h-12" />
      </div>
      <div className="buttons space-x-4">
        {/* Aqui estão os 4 botões */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Botão 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Botão 2
        </button>
        <Link href="/autenticacao/nova-conta">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Criar conta
        </button>
        </Link>
        <Link href="/autenticacao/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Login</button>
          </Link>
      </div>
    </div>
  );
}

export default Header;
