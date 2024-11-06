
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './Header';

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
      {/* <div 
        className="relative w-full h-screen bg-cover bg-center sm:bg-left bg-no-repeat" 
        style={{ backgroundImage: "url('/images/hero2.png')" }}
      > */}
      <div className='pt-[60px] md:pt-0'>
        <div className="w-full pt-[0px] h-screen bg-cover bg-right bg-[url('/images/mobile.png')] 
                                md:bg-[url('/images/hero2.png')] md:bg-right z-0" >
          <Header />
          <div className="flex flex-col items-center justify-items-center pt-[2rem] xl:pt-[1rem] h-full px-8">
           
            <div className='container mx-auto h-full z-10'>
          <motion.div
            className="container mx-auto h-full flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-left text-white px-8">
              <Image
                src="/images/logoMapfre.png"
                alt="Logo MAPFRE"
                width={160}
                height={100}
                className='h-auto w-auto sm:w-[90px] md:w-[120px] xl:w-[180px]'
              />
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
              >
                Saiba mais!
              </button>
            </div>
          </motion.div>
        </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Hero;
