

'use client'
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const page = () => {
    return (
        <>
            <div className='pt-[50px] md:pt-0'>
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/womancell.png')] 
                                md:bg-[url('/images/redeparcerias.png')] md:bg-right z-0">
                    <Header />
                    <motion.div
                        className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Rede de Parcerias</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Os benefícios que você procura em um só lugar!</p>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-center py-8 px-8 xl:py-[100px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <motion.div
                            className="hidden md:block w-[700px] h-[400px] md:w-1/2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <Image src="/images/pccirculo.png" alt="Rede Parcerias" width={700} height={500} />
                        </motion.div>

                        {/* Texto à direita */}
                        <motion.div
                            className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Central de <br /><b>Benefícios</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl">
                                O nosso clube de vantagens é uma plataforma de fácil navegação
                                construída para comunicar, de forma efetiva, os benefícios,
                                descontos e convênios que as empresas parceiras oferecem aos
                                nossos clientes.
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
                            <motion.ul className="space-y-2 text-left list-disc pr-20">
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className='pb-8'>Mais de 200 parceiros espalhados por todo Brasil</motion.li>
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>Aplicativos para Android e Apple (Em desenvolvimento)</motion.li>
                            </motion.ul>

                            {/* Segunda lista */}
                            <motion.ul className="space-y-2 text-left list-disc">
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className='pb-8'>Benefícios com até 60% de desconto</motion.li>
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>Concorra de forma gratuita a diversos prêmios</motion.li>
                            </motion.ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-[10rem]'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left">Não perca<br /> essa chance!</h1>
                </motion.div>

                <motion.div
                    className='text-[rgb(1,24,74)] flex flex-col items-center justify-center px-[10rem] pb-20'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-md md:text-xl'>Para se cadastrar é muito fácil, após a aquisição de qualquer plano da Incentive Cuidando de Vida, basta acessar o site www.clubeincentiveplus.com.br e clicar em cadastre-se, com seu CPF, preencha os campos com suas informações e desfrute de inúmeros benefícios exclusivos para você.</p>
                    <div className='flex gap-4 pt-10 justify-center'>
                        <Image src="/images/play.jpeg" alt="Rede Parcerias" width={200} height={200} className="xl:px-10" />
                        <button className='px-4 text-white bg-[rgb(1,24,74)] rounded-3xl'>Acesse o site</button>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

export default page
