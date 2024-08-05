
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-10 md:pt-20">
        <div className='py-10 grid grid-cols-2 bg-[#f9f9f9] text-sm text-center gap-4 md:grid-cols-4 md:items-center'>
          <div className=''>
            <ul >
              <li>Serviços</li>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>

            </ul>
          </div>
          <div>
            <ul>
              <li> Sobre StartSite</li>
              <li> Quem Somos</li>
              <li>Portfólio</li>

            </ul>
          </div>
          <div>
            <ul>
              <li>Soluções em Marketing</li>
              <li> Google Ads</li>
              <li>Consultoria em Marketing</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Ajuda</li>
              <li> Área do Cliente</li>
              <li>Suporte</li>
            </ul>
          </div>
        </div>
    

      <div className='bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-12 md:py-10 px-4 '>
        <div className="flex items-center justify-center gap-4 ">
          <Image
            src='/images/website/logo.png'
            width={60}
            height={100}
            className='w-[60px] md:w-[100px] bg-white' alt="Logo" />

          <ul className='text-white/60 hover:text-white cursor-pointer duration-300 sm:pb-4'>
            <li>Osasco - SP</li>
            <li>Rua Ana Pereira Melo 213</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 py-6 sm:py-0">
          {/* <FaFacebook className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
          <FaInstagram className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
          <FaYoutube className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" /> */}
        </div>
      </div>

      <div className="bg-black ">
        <div>
          <div className="border-t border-gray-600 mx-10"></div>
        </div>
        <div className='flex text-center justify-center items-center py-10'>
          <div className="w-full  text-white/60 hover:text-white">
            ❤️ ©️ Incentive Mapfre| 2022 |
            Todos os Direitos Reservados.
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
