
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const services = [
    // Lista de serviços
    { id: 1, title: 'Conta Corrente', description: 'Possuímos o serviço de conta corrente para você fazer movimentações com seu dinheiro de forma segura, rápida e sem dores de cabeça.', image: '/images/pc.png', carrency: 'Sem carência' },
    { id: 2, title: 'Rede Parcerias', description: 'O nosso clube de vantagens é uma plataforma de fácil navegação construída para comunicar, de forma efetiva, os benefícios, descontos e convênios que as empresas parceiras oferecem aos nossos clientes.', image: '/images/girl.png', carrency: 'Sem carência' },
    { id: 3, title: 'Morte Acidental', description: 'Em casos de mortes acidentais, nossos planos cobrem até R$ 10.000,00 de gastos em despesas desta natureza.', image: '/images/def.png', carrency: 'Sem carência' },
    { id: 4, title: 'Invalidez Permanente', description: 'Em casos de Invalidez Permanente e Total por Acidente (IPTA), nossos planos cobrem até R$ 10.000,00 de gastos em despesas desta natureza.', image: '/images/aparelho.png', carrency: 'Sem carência' },
    { id: 5, title: 'Diária de Internação', description: 'Cobrimos as despesas de eventos desta natureza de até 15 diárias sendo R$ 150,00 cada, limitados a R$ 2.250,00 gerais.', image: '/images/medica.png', carrency: 'Sem carência' },
    { id: 6, title: 'Despesas Médicas', description: '', image: '/images/med.png', carrency: 'Com carência' },
    { id: 7, title: 'Sorteios - 4 ', description: 'Participe de até 4 sorteios mensais com prêmios variados com valores de até R$ 5.000,00.', image: '/images/box.png', carrency: 'Sem carência' },
    { id: 8, title: 'Decessos', description: 'Em casos de decessos de familiares como titular, cônjuge e filhos, nossos planos cobrem até R$ 5.000,00 em despesas..', image: '/images/def.png', carrency: 'Com carência' },
    { id: 9, title: 'Assistência Domiciliar', description: 'Tenha acesso a uma gama de serviços visando a manutenção de seu domicílio com o pronto atendimento de profissionais como chaveiro, eletricista, encanador, etc.', image: '/images/conj.png', carrency: 'Com carência' },
    { id: 10, title: 'Cuidando de Você', description: 'Tenha acesso a benefícios como a Rede Tem, Desconto em Farmácia, Telemedicina Familiar (Com Pagamento de Consulta), e mais!', image: '/images/doc.png', carrency: 'Com carência' },
    { id: 11, title: 'Affinit Pet', description: 'Permita que seu pet tenha um conjunto de cuidados de especialistas focados em sua saúde e bem-estar.', image: '/images/pet.png', carrency: 'Com carência' }
];

const Aboult = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedService, setSelectedService] = useState(services[0]);
    const [visibleCount, setVisibleCount] = useState(8);
    const [startIndex, setStartIndex] = useState(0);

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
const visibleItem = services[startIndex];
    const handleShowMore = () => {
        if (startIndex + 1 < services.length) {
            setStartIndex(startIndex + 1); // Avança para o próximo item
        }
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
                        <button onClick={handlePrev} className='p-2 bg-[rgb(1,24,74)] text-white rounded-full w-12'>
                            &lt;
                        </button>
                        <button onClick={() => handleSelection(services[currentIndex])} className='mx-4 text-md p-2 w-[200px] px-4 rounded-3xl bg-[rgb(1,24,74)] hover:bg-white hover:bg-opacity-10 transition-all duration-500'>
                            {services[currentIndex].title}
                        </button>
                        <button onClick={handleNext} className='p-2 bg-[rgb(1,24,74)] text-white rounded-full w-12'>
                            &gt;
                        </button>
                    </div>
                    {/* <ol className='hidden md:flex flex-col text-xs md:text-xl bg-white bg-opacity-10 p-8 rounded-3xl'>
                        {services.map((service, index) => (
                            <li
                                key={service.id}
                                onClick={() => handleSelection(service)}
                                className={`cursor-pointer hover:bg-[rgb(69,178,214)] p-2 rounded-3xl ${index === currentIndex }`}
                            >
                                {service.title}
                            </li>
                        ))}
                    </ol> */}
                     <div className='hidden md:flex flex-col'>
                        <ul className='text-xs md:text-xl bg-white bg-opacity-10 p-8 rounded-3xl overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar'>
                            {services.slice(0, visibleCount).map((service, index) => (
                                <li
                                    key={service.id}
                                    onClick={() => handleSelection(service)}
                                    className={`cursor-pointer hover:bg-[rgb(69,178,214)] p-2 rounded-3xl ${index === currentIndex ? 'bg-[rgb(69,178,214)] text-white' : ''}`}
                                >
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                        {visibleCount < services.length && (
                            <div className="flex justify-center mt-4">
                            <Image
                                src="/images/setaD.png"
                                alt="arrow"
                                width={30}
                                height={30}
                                onClick={handleShowMore}
                                className="cursor-pointer hover:opacity-80" // Adiciona um efeito de hover opcional
                            />
                        </div>
                        )}
                    </div>
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
                        <button className='p-2 rounded-full bg-gray-300 text-gray-800 cursor-text'>{selectedService.carrency}</button>
                        <p className='mt-4'>{selectedService.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboult;
