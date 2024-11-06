
// import React from 'react';

// const SubHero = () => {
//   return (
//     <div id="target-section" className="w-full h-screen flex justify-center  text-[rgb(1,24,74)] bg-white py-16 px-10 lg:px-20 ">
//       {/* Container principal usando Flexbox */}
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">

//         {/* Coluna da Imagem */}
//         <div className="flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0">
//           <img src="./images/homan.png" alt="Imagem Descritiva" className="h-48 lg:h-auto max-h-[300px] w-full object-contain" />
//         </div>

//         {/* Coluna do Texto */}
//         <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
//           <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4'>Sobre</h1>
//           <p className="leading-relaxed mb-4  sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
//             Pensada para trazer <b>benefícios únicos que melhorem a vida e a saúde das pessoas,</b> nós desenvolvemos o projeto <b>Cuidando de Vida</b>, que é um programa de incentivo a uma vida saudável e sustentável com planos que abrangem diversos serviços que visam fazer da sua vida a ideal.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default SubHero;




import React from 'react';
import { motion } from 'framer-motion';

const SubHero = () => {
  return (
    <div id="target-section" className="w-full h-screen flex justify-center text-[rgb(1,24,74)] bg-white py-16 px-10 lg:px-20">
      {/* Container principal usando Flexbox */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        
        {/* Coluna da Imagem */}
        <motion.div 
          className="flex-shrink-0 lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="./images/homan.png" alt="Imagem Descritiva" className="h-48 lg:h-auto max-h-[300px] w-full object-contain" />
        </motion.div>

        {/* Coluna do Texto */}
        <motion.div 
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4'>Sobre</h1>
          <p className="leading-relaxed mb-4 sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
            Pensada para trazer <b>benefícios únicos que melhorem a vida e a saúde das pessoas,</b> nós desenvolvemos o projeto <b>Cuidando de Vida</b>, que é um programa de incentivo a uma vida saudável e sustentável com planos que abrangem diversos serviços que visam fazer da sua vida a ideal.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default SubHero;
