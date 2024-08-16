'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[rgb(1,24,74)] '>
        <div className="flex justify-center pt-10">
          <a href="#" className="bg-white rounded-full p-2 w-10 h-10">
            <img src="/images/setaUp.png" className="text-2xl" />
          </a>
        </div>
        <div className="w-full flex justify-center items-center pt-10 pb-2">
          <img
            src="/images/logoB.png"
            width={60}
            height={100}
            className="w-[200px] h-auto"
            alt="Logo"
          />
        </div>
        <div className="flex text-center justify-center items-center pb-4  text-white/60 hover:text-white px-8 md:px-20">
          ❤️ ©️ Incentive Plus |  Todos os Direitos Reservados.
        </div>
        <div className="border-t border-transparent pb-10 mx-10">
          <div className="h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-20 text-white pb-10 ">

          <div className='text-xs flex flex-col items-center gap-4 py-6 sm:py-0'>
            <h5 className='mb-4'>NOSSAS REDES SOCIAIS</h5>
            <div className='flex gap-4'>
              <img src="/images/facebook.png" className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
              <img src="/images/instagram.png" className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
              <img src="/images/linkedin.png" className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
            </div>
          </div>


          <div className='text-xs flex flex-col items-center py-6 sm:py-0'>
            <h5 className='mb-4'>SERVIÇOS</h5>
            <ul className='text-center'>
              <li>INCENTIVE PLUS</li>
              <li>Serviços</li>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>
            </ul>
          </div>


          <div className='flex flex-col items-center py-6 sm:py-0 text-xs'>
            <h5 className='mb-4'>ESCRITÓRIOS INCENTIVE PLUS</h5>
            <ul className='text-center'>
              <li>São Paulo:</li>
              <li>Rua Ana Pereira Melo, 253 - Sala 703 - Vila Campesina – Osasco/SP</li>
              <li>(11) 3016-1870 | (11) 94746-4479</li>
              <li className='mt-2'>SÃO JOSÉ DO RIO PRETO:</li>
              <li>R. Martinho Gonçalves, 2140 - Vila Nossa Senhora da Paz - São José do Rio Preto/SP</li>
              <li>(17) 3364-9940</li>
              <li>CNPJ: 42.931.435/0001-08</li>
            </ul>
          </div>
        </div>
        </div>

      </>
      );
};

      export default Footer;
