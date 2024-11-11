

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
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/funeralcell.png')] 
                                md:bg-[url('/images/funeral.png')] md:bg-right z-0">
                    <Header />
                    <motion.div
                        className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Image src="/images/logoMapfre.png" alt="Logo" width={200} height={100} />
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Auxílio Funeral</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Evite se preocupar com essas questões no momento mais delicado para isso.</p>
                    </motion.div>
                </div>

                <motion.div
                    className="flex items-center justify-center py-8 px-8 xl:py-[100px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="hidden md:block w-[400px] h-[400px] md:w-[400px]"
                        >
                            <Image src="/images/rosanegra.png" alt="Rede Parcerias" width={500} height={500} />
                        </motion.div>

                        {/* Texto à direita */}
                        <motion.div
                            className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Honrando memórias <br /><b> Com carinho</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl">
                                Uma solução desenvolvida pela Mapfre para que você tenha a segurança de que quando o maior dos imprevistos acontecer, você não estará sozinho para lidar com isso.
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
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className='pb-8'>
                                    <b> Cobertura Básica</b> <br />
                                    • Decessos<br />
                                    • Auxílio<br />
                                </motion.li>
                            </motion.ul>
                            <motion.ul>
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                    <b>Cobertura Adicional</b><br />
                                    • Aquisição de Jazigo<br />
                                </motion.li>
                            </motion.ul>
                            <motion.ul>
                                <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className='text-left'>
                                    <b>Cobertura Suplementar</b><br />
                                    • Inclusão Automática de Cônjuge ou Companheiro(a)<br />
                                    • Inclusão Facultativa de Cônjuge ou Companheiro(a)<br />
                                    • Inclusão Automática de Filhos<br />
                                    • Inclusão Automática de Pais<br />
                                    • Inclusão Automática de Pais e Sogros<br />
                                </motion.li>
                            </motion.ul>
                        </div>
                        <h2 className='text-xl xl:text-5xl font-extrabold pt-14'>Cobertura básica de decessos</h2>

                        <motion.p
                            className='text-left'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Garante a prestação do serviço ou o reembolso dos gastos com o sepultamento ou a cremação, respeitando o limite do capital segurado para esta cobertura estipulado na proposta de adesão e acordado no contrato, em caso de falecimento do segurado titular ou dependente designado no seguro.
                            A cobertura deste seguro abrange a morte do segurado em qualquer parte do globo terrestre, sendo o serviço de sepultamento ou cremação restrito ao território brasileiro, porém com a prestação de serviço de traslado de qualquer parte do mundo até o município de moradia habitual no Brasil.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-8 xl:px-[10rem]'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left">Tudo isso<br /> e muito mais!</h1>
                </motion.div>

                <motion.div
                    className='text-[rgb(1,24,74)] flex flex-col items-center justify-center px-8 xl:px-[10rem] pb-20'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-md md:text-xl'>Em caso de dúvida sobre cobertura e acionamento, confira nosso regulamento ou entre em contato no whatsapp +55 11 91071-8727.</p>
                    <div className='flex gap-4 pt-10 justify-center'>
                        <Regulament />
                        <Link href="https://cuidandodevoce.mapfre.com.br//">
                            <button className='px-4 text-white bg-[rgb(1,24,74)] rounded-3xl'>Acesse o site</button>
                        </Link>
                    </div>
                </motion.div>

                
            </div>
            <Footer />
        </>
    )
}

export default page
