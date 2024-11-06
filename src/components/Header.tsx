'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Define the navigation links for reuse
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'Incentive Plus Bank' },
        { href: '/autenticacao/nova-conta', label: 'Criar Conta' },
        { href: '/autenticacao/login', label: 'Entrar' },
    ];

    return (
        <header className="text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image 
                            src="/images/logo3.png" 
                            alt="Logo" 
                            width={200} 
                            height={200} 
                            className="w-[120px] xl:w-[200px] h-auto absolute top-5 left-11" 
                        />
                    </Link>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-6 text-2xl mt-8 pr-10">
                    {navLinks.map((link) => {
                        // Hide 'Criar Conta' and 'Entrar' if the user is logged in
                        if ((link.label === 'Criar Conta' || link.label === 'Entrar') && session) {
                            return null;
                        }

                        return (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline"
                            >
                                {link.label}
                                <span className="block absolute bottom-[-2px] left-0 w-full h-[2px] bg-[rgb(1,24,74)] scale-x-0 group-hover:scale-x-100 transition-transform transform origin-left duration-700"></span>
                            </Link>
                        );
                    })}
                    {session && (
                        <>
                            <Link 
                                href="/conta" 
                                className="relative group text-white transition-transform transform hover:scale-105 focus:outline-none focus:shadow-outline"
                            >
                                <p>Bem-vindo, {session?.user?.name}!</p>
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="text-blue-600 hover:underline"
                            >
                                Sair
                            </button>
                        </>
                    )}
                </nav>

                {/* Botão de menu para mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[rgb(1,24,74)] focus:outline-none absolute top-7 right-6">
                        {/* Toggle between hamburger and close icon */}
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white text-[rgb(1,24,74)]">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        {navLinks.map((link) => {
                            // Hide 'Criar Conta' and 'Entrar' if the user is logged in
                            if ((link.label === 'Criar Conta' || link.label === 'Entrar') && session) {
                                return null;
                            }

                            return (
                                <Link 
                                    key={link.href} 
                                    href={link.href} 
                                    className="hover:text-gray-400"
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        {session && (
                            <>
                                <Link 
                                    href="/conta" 
                                    className="hover:text-gray-400"
                                >
                                    Conta
                                </Link>
                                <button
                                    onClick={() => signOut()}
                                    className="text-blue-600 hover:underline"
                                >
                                    Sair
                                </button>
                            </>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
