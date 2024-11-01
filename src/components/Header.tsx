'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" text-white ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/images/logo3.png" alt="Logo" width={200} height={200} className='w-[120px] xl:w-[200px] h-auto absolute top-5 left-11' />
                  
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-6 text-2xl mt-8 pr-10">
                    <Link href="/" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">Home
                    <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span></Link>
                    <Link href="/about" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">Incentive Plus Bank
                    <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span></Link>
                    <Link href="/services" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">Criar Conta
                    <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span></Link>
                    <Link href="/contact" className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline">Entrar
                    <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span></Link>
                </nav>

                {/* Botão de menu para mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[rgb(1,24,74)] focus:outline-none absolute top-7 right-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white text-[rgb(1,24,74)]">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                        <Link href="/about"className="hover:text-gray-400">Incentive Plus Bank</Link>
                        <Link href="/services" className="hover:text-gray-400">Criar Conta</Link>
                        <Link href="/contact" className="hover:text-gray-400">Entrar</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
