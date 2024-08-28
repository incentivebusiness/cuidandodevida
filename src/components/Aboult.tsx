
'use client';
import React, { useState } from 'react';

const services = [
    // Lista de serviços
    { id: 1, title: 'Conta Corrente', description: 'Possuímos o serviço de conta corrente para você fazer movimentações com seu dinheiro de forma segura, rápida e sem dores de cabeça.', image: '/images/pc.png', carrency: 'Sem carência' },
    { id: 2, title: 'Rede Parcerias', description: 'O nosso clube de vantagens é uma plataforma de fácil navegação construída para comunicar, de forma efetiva, os benefícios, descontos e convênios que as empresas parceiras oferecem aos nossos clientes.', image: '/images/girl.png', carrency: 'Sem carência' },
    { id: 3, title: 'Morte Acidental', description: 'Descrição detalhada para Morte Acidental.', image: '/images/def.png', carrency: 'Sem carência' },
    { id: 4, title: 'Invalidez Permanente e Total por Acidente - IPTA', description: 'Descrição detalhada para Invalidez Permanente e Total por Acidente - IPTA.', image: '/images/aparelho.png', carrency: 'Com carência' },
    { id: 5, title: 'Diária de Internação Hospitalar por Acidente', description: 'Descrição detalhada para Diária de Internação Hospitalar por Acidente.', image: '/images/medica.png', carrency: 'Com carência' },
    { id: 6, title: 'Despesas Médicas Hospitalares e Odontológicas', description: 'Descrição detalhada para Despesas Médicas Hospitalares e Odontológicas.', image: '/images/med.png', carrency: 'Com carência' },
    { id: 7, title: 'Auxílio Funeral', description: 'Descrição detalhada para Auxílio Funeral.', image: '/images/doc.png', carrency: 'Com carência' },
    { id: 8, title: 'Sorteios - 4 sorteios mensais, série aberta, valor líquido', description: 'Descrição detalhada para Sorteios.', image: '/images/box.png', carrency: 'Com carência' }
];

const Aboult = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedService, setSelectedService] = useState(services[0]);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === 0 ? services.length - 1 : prevIndex - 1;
            setSelectedService(services[newIndex]);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => {
            const newIndex = prevIndex === services.length - 1 ? 0 : prevIndex + 1;
            setSelectedService(services[newIndex]);
            return newIndex;
        });
    };

    const handleSelection = (service:any) => {
        setSelectedService(service);
        setCurrentIndex(services.findIndex(s => s.id === service.id));
    };

    return (
        <div className='w-full px-4 py-8 md:px-10 md:py-10 text-white' style={{background: 'url(/images/base.png) no-repeat center center', backgroundSize: 'cover'}}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {/* Lista de Serviços */}
                <div className='md:col-span-1 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0'>
                    <h1 className='text-3xl font-extrabold text-white mb-4 md:mb-0 md:hidden'>
                        Nossos Serviços
                    </h1>
                    <div className='md:hidden flex items-center justify-center '>
                        <button onClick={handlePrev} className='p-2 bg-[rgb(1,24,74)] text-white rounded-full'>
                            &lt;
                        </button>
                        <button onClick={() => handleSelection(services[currentIndex])} className='mx-4 text-xl p-2 px-4 rounded-3xl bg-[rgb(1,24,74)] hover:bg-white hover:bg-opacity-10 transition-all duration-500'>
                            {services[currentIndex].title}
                        </button>
                        <button onClick={handleNext} className='p-2 bg-[rgb(1,24,74)] text-white rounded-full'>
                            &gt;
                        </button>
                    </div>
                    <ol className='hidden md:flex flex-col text-xs bg-white bg-opacity-10 p-8 rounded-3xl'>
                        {services.map((service, index) => (
                            <li
                                key={service.id}
                                onClick={() => handleSelection(service)}
                                className={`cursor-pointer hover:bg-[rgb(69,178,214)] p-2 rounded-3xl ${index === currentIndex }`}
                            >
                                {service.title}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Imagem e Descrição */}
                <div className='md:col-span-2 flex flex-col md:flex-row gap-4  bg-white bg-opacity-10 p-8 rounded-3xl'>
                    <div className='flex flex-shrink-0 w-full md:w-1/2 '>
                        <img
                            src={selectedService.image}
                            alt={selectedService.title}
                            className='min-w-[200px] max-w-[400px] min-h-[200px] max-h-[360px] object-contain rounded items-end'
                        />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-extrabold mb-2'>{selectedService.title}</h1>
                        <button className='p-2 rounded-full bg-gray-300 text-gray-800'>{selectedService.carrency}</button>
                        <p className='mt-4'>{selectedService.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboult;
