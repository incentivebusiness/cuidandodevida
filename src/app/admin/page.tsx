
import React from 'react'
import UploadPage from "@/components/Upload";
import GerarArquivoButton from '../gerarArquivoButton/page';
const page = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen px-10 py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-[rgb(1,24,74)] pb-6">ADMIN</h1>
  
      <h2 className="text-2xl font-bold text-[rgb(1,24,74)] mb-4">Upload NEW</h2>
      <UploadPage />
      
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-xl font-semibold text-[rgb(1,24,74)] mb-2">Gerar PAG</h2>
        <GerarArquivoButton />
      </div>
    </div>
  );
  
}

export default page
