


'use client'
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Regulament from '../../components/Regulament'
import Link from 'next/link'
import { motion } from 'framer-motion'

const page = () => {
    return (
        <>
            <div className='pt-[50px] md:pt-0'>
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/cuidavccell.png')] 
                                md:bg-[url('/images/cuidavc.png')] md:bg-right z-0">
                    <Header />
                    <motion.div
                        className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Image src="/images/logoMapfre.png" alt="Logo" width={200} height={100} />
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Mapfre Cuidando de Você + Rede TEM</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Os benefícios que você procura em um só lugar!</p>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-center py-8 px-8 xl:py-[100px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda com animação */}
                        <motion.div
                            className="hidden md:block w-[400px] h-[400px] md:w-[400px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <Image src="/images/medicacuida.png" alt="Rede Parcerias" width={500} height={500} />
                        </motion.div>

                        {/* Texto à direita com animação */}
                        <motion.div
                            className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Um programa de saúde <br /><b>Pensado para você</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl">
                                Tenha acesso ao programa de saúde mais completo do Brasil com a
                                qualidade do atendimento particular e preços que caibam no seu bolso.
                            </p>
                            <button className='p-3 text-white bg-[rgb(1,24,74)] rounded-3xl'>Confira</button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex justify-center items-center py-8 px-8 text-[rgb(1,24,74)] xl:pb-[100px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-center space-y-6 max-w-4xl">
                        <h2 className="xl:text-5xl font-semibold pb-10">Conosco Você tem acesso a:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Primeira lista */}
                            <ul className="space-y-2 text-left list-disc pr-20">
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                    <b>Rede de Consultas e Exames presenciais</b><br/>
                                    Consultas presenciais com mais de 50 especialidades por apenas R$ 50;
                                    Mais de 1500 tipos de exames laboratoriais e de imagem com até 70% de desconto;
                                    Rede de dentistas para consultas, exames e tratamentos odontológicos e ortodônticos com preços reduzidos.
                                </motion.li>

                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                    <b>Consultas por Vídeo</b><br/>
                                    Consultas por vídeo com clínico geral: Sem Custo
                                    Consultas por vídeo com demais especialidades: Com Custo
                                </motion.li>

                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <b>Pronto Atendimento 24/7 por vídeo sem custo</b><br/>
                                    Consulta online por vídeo disponível 24 horas por dia, 7 dias por semana;
                                    Consultas quando precisar, como em caso de dor de garganta, estômago, náusea, cólica, etc.;
                                    Poderá receber receitas e encaminhamentos para exames diretamente em seu e-mail ou SMS, de acordo com avaliação
                                    da especialista. *Disponível apenas para consultas com Clínico Geral.
                                </motion.li>
                            </ul>

                            {/* Segunda lista */}
                            <ul className="space-y-2 text-left list-disc">
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                    <b>Descontos em medicamentos</b><br/>
                                    Garanta de 15% a 30% de desconto nas farmácias das Redes Raia e Drogasil.
                                    Após a realização do primeiro acesso, aguarde 48h para a liberação do benefício.
                                </motion.li>

                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                    <b>Conta saúde digital para pagamentos</b><br/>
                                    O meio de pagamentos dos clientes MAPFRE Cuidando de Você.
                                </motion.li>

                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <b>Orientação médica por telefone 24/7</b><br/>
                                    Orientação médica por telefone, disponível 24h por dia, 7 dias da semana.
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-8 xl:px-[10rem]'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left">
                        Tudo isso<br /> e muito mais!
                    </h1>
                </motion.div>

                <div className='text-[rgb(1,24,74)] flex flex-col items-center justify-center px-8 xl:px-[10rem] pb-20'>
                    <p className='text-md md:text-xl'>Em caso de dúvida sobre cobertura e acionamento, confira nosso regulamento ou entre em contato no whatsapp +55 11 91071-8727.</p>
                    <div className='flex gap-4 pt-10 justify-center'>
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
