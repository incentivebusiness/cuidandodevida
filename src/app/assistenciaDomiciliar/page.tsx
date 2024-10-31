
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Regulament from '../../components/Regulament'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='pt-[50px] md:pt-0' >
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/domiciliarcell.png')] 
                                md:bg-[url('/images/homebanner.png')] md:bg-right z-0" >
                    <Header />
                    <div className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8">
                        <Image src="/images/logoMapfre.png" alt="Logo" width={200} height={100} />
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Assistência Domiciliar</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Transforme sua casa em um Lar!</p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 px-8 xl:py-[100px]"> {/* Centraliza a div no centro da tela */}
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <Image src="/images/casa.png" alt="Rede Parcerias" width={500} height={500} className="hidden md:block w-[400px] h-[400px] md:w-[400px]" />

                        {/* Texto à direita */}
                        <div className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8">
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Porque cuidar da sua casa  <br /><b> Também é cuidar de você!</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl ">
                                Nossas soluções de assistência domiciliar foram pensadas para você não ter mais dores de cabeça na hora de resolver as questões de sua casa.
                            </p>

                            <button className='p-3 text-white bg-[rgb(1,24,74)] rounded-3xl'>Confira</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center py-8 px-8 text-[rgb(1,24,74)] xl:pb-[100px]">
                    <div className="text-center space-y-6 max-w-3xl w-full"> {/* Centralizado e com largura máxima */}
                        <h2 className="xl:text-5xl font-semibold pb-10">Conosco Você tem acesso a:</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Primeira lista */}
                            <ul className="space-y-2 text-left list-disc pl-6"> {/* Alinhamento à esquerda */}
                                <li className='pb-4 gap-2'><b> Em todas as cidades em Território Nacional para os serviços de:</b></li>
                                <li>Chaveiro (Até R$ 200,00 por evento, limitado a 2 intervenções por ano)</li>
                                <li>Eletricista (Até R$ 150,00 por evento, limitado a 2 intervenções por ano)</li>
                                <li>Encanador (Até R$ 150,00 por evento, limitado a 2 intervenções por ano)</li>
                                <li>Desentupimento (Até R$ 200,00 por evento, limitado a 2 intervenções por ano)</li>
                                <li>Limpeza de caixa de gordura (Até R$ 500,00 por evento, limitado a 2 intervenções por ano)</li>
                                <li>Serviço de Limpeza (Até R$ 1.000,00 por evento, limitado a 1 intervenção por ano)</li>
                                <li>Hospedagem (Limite de 4 diárias, até R$ 200,00 por dia, limitado a 2 intervenções por ano)</li>
                                <li>Transmissões de Mensagens Urgentes (24 horas de atendimento)</li>
                                <li>Sem limite monetário e de intervenção por ano durante a vigência do contrato de seguro.</li>
                            </ul>

                            {/* Segunda lista */}
                            <ul className="text-left pl-6 space-y-2">
                                <li><b>Cobertura Suplementar</b></li>
                                <li>Inclusão Automática de Cônjuge ou Companheiro(a)</li>
                                <li>Inclusão Facultativa de Cônjuge ou Companheiro(a)</li>
                                <li>Inclusão Automática de Filhos</li>
                                <li>Inclusão Automática de Pais</li>
                                <li>Inclusão Automática de Pais e Sogros</li>
                            </ul>

                            <ul className="space-y-2 text-left list-disc pl-6">
                                <li className='py-4'><b>Somente em cidades com população acima de 200.000 habitantes em Território Nacional:</b></li>
                                <li>Hospedagem de animal de estimação (Até R$ 100,00 por evento, limitado a 2 intervenções por ano ou 2 animais domesticos)</li>
                                <li>Limpeza de ar-condicionado (Limite de 4 aparelhos por intervenção (compactos ou “Mini Split”) até R$ 300,00 por evento, limitado a 1 intervenção por ano)</li>
                                <li>Transferência de móveis (Até R$ 400,00 por evento, limitado a 1 intervenção por ano dentro de um raio de 50 km a contar da Residência Assistida)</li>
                                <li>Guarda de móveis (Até R$ 400,00 por evento, limitado a 1 intervenção por ano com 7 dias de armazenamento)</li>


                                 <li className='py-4'>  <b>  Somente em cidades com população acima de 300.000 habitantes em Território Nacional:</b></li>
                                 <li>   Vidraceiro (Até R$ 150,00 por evento, limitado a 2 intervenções por ano)</li>
                                 <li>   Vigia (Até R$ 500,00 por evento, limitado a 2 intervenções por ano)</li>
                                 <li>  Dedetização, Desratização e Descupinização (Até R$ 600,00 por evento, limitado a 2 intervenções por ano)</li><br/>

                                    * Serão de responsabilidade da Pessoa Usuária, o pagamento de possíveis custos com peças trocadas/compradas pelo prestador de serviços, desde que devidamente autorizado pela Pessoa Usuária, bem como os custos de execução que excederem os limites descritos.
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-8 xl:px-[10rem] '>

                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left">Tudo isso<br /> e muito mais!</h1>
                </div>
                <div className='text-[rgb(1,24,74)] flex flex-col items-center justify-center px-8 xl:px-[10rem] pb-20'>
                    <p className='text-md md:text-xl'>Em caso de dúvida sobre cobertura e acionamento, confira nosso regulamento ou entre em contato no whatsapp +55 11 91071-8727.</p>
                    <div className='flex gap-4 pt-10  justify-center '>
                        <Regulament />
                        <Link href="https://cuidandodevoce.mapfre.com.br//">
                            <button className='px-4 text-white bg-[rgb(1,24,74)] rounded-3xl'>Acesse o site</button>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page
