
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Regulament from '../../components/Regulament'
import Link from 'next/link'

const page = () => {
    const phoneNumber = '+5511910718727';
    return (
        <>
            <div className='pt-[50px] md:pt-0' >
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/cuidavccell.png')] 
                                md:bg-[url('/images/bannerbank.png')] md:bg-right z-0" >
                    <Header />
                    <div className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8">
                        <Image src="/images/logoMapfre.png" alt="Logo" width={200} height={100} />
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Incentive Plus Bank</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Soluções pensadas para agilizar sua empresa!</p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 px-8 xl:py-[100px]"> {/* Centraliza a div no centro da tela */}
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <Image src="/images/mancircle.png" alt="Rede Parcerias" width={500} height={500} className="hidden md:block w-[400px] h-[400px] md:w-[400px]" />

                        {/* Texto à direita */}
                        <div className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8">
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Precisando de  <br /><b>Crédito?</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl ">
                                Com a Incentive Bank você pode receber crédito de forma rápida e segura para te ajudar a resolver suas questões sem dores de cabeça!
                            </p>

                            <button className='p-3 text-white bg-[rgb(1,24,74)] rounded-3xl'>Adquira crédito agora</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center py-8 px-8 text-[rgb(1,24,74)] xl:pb-[100px]">
                    <div className="text-center space-y-6 max-w-4xl">
                        <h5 className="xl:text-4xl font-normal pb-4">Contas a vista? Parcele no cartão de crédito em até 18x</h5>
                        <h2 className="xl:text-5xl font-semibold pb-10">PARCELAMENTO DE CONTAS</h2>
                        <p>   Com nossa solução, o Estabelecimento Comercia poderá pagar suas contas ou oferecer a seus clientes o pagamento de contas de forma parcelada, no cartão de crédito, de contas,(vencidas ou a vencer), possibilitando o pagamento em até 18 vezes no cartão de crédito. Exemplos de aplicações úteis:</p>


                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-20 lg:px-[10rem] text-[rgb(1,24,74)]">
                    <div className="bg-[rgb(242,243,245)] bg-opacity-50 rounded-3xl p-4 flex flex-col items-center">
                        <Image src="/images/doccircle.png" alt="Conta Corrente" width={200} height={200} className="w-[100px] h-auto mb-2" />
                        <h3 className="text-lg font-normal text-center">Conta de água, luz, telefone, gás, taxa de condomínio entre outras</h3>
                    </div>

                    <div className="bg-[rgb(242,243,245)] bg-opacity-50 rounded-3xl p-4 flex flex-col items-center">
                        <Image src="/images/carcircle.png" alt="Rede de Parcerias" width={200} height={200} className="w-[100px] h-auto mb-2" />
                        <h3 className="text-lg font-normal text-center">Taxas e impostos relacionados a veículos (IPVA, multas, pátio, entre outros)</h3>
                    </div>

                    <div className="bg-[rgb(242,243,245)] bg-opacity-50 rounded-3xl p-4 flex flex-col items-center">
                        <Image src="/images/chapelcircle.png" alt="Seguro de Vida" width={200} height={200} className="w-[100px] h-auto mb-2" />
                        <h3 className="text-lg font-normal text-center">Mensalidade escolar, de faculdade e outros cursos</h3>
                    </div>

                    <div className="bg-[rgb(242,243,245)] bg-opacity-50 rounded-3xl p-4 flex flex-col items-center">
                        <Image src="/images/taxacircle.png" alt="Saúde" width={200} height={200} className="w-[100px] h-auto mb-2" />
                        <h3 className="text-lg font-normal text-center">Tributos municipais, estaduais ou federais</h3>
                    </div>
                </div>

                <div className="container flex itens-center justify-center mx-auto py-20 px-8 md:px-20 lg:px-[5rem] text-[rgb(1,24,74)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Coluna Esquerda */}
                        <div className="flex flex-col">
                            <h1 className="text-5xl font-bold mb-8">Outras<br></br> Vantagens</h1>

                            <div className="flex items-center mb-4">
                                <img src="/images/vezes.png" alt="Descrição 1" className="w-[100px] h-auto mr-4" />
                                <p className="text-lg">Parcelamento de débitos em até 18x no cartão de crédito no POS e no e-commerce.</p>
                            </div>

                            <div className="flex items-center">
                                <img src="/images/dindin.png" alt="Descrição 2" className="w-[100px] h-auto mr-4 pb-8" />
                                <p className="text-lg">Utilização de até 3 cartões simultâneos em uma única transação.</p>
                            </div>
                        </div>

                        {/* Coluna Direita */}
                        <div>
                            <ul className="list-disc pl-5">
                                <li>Portal do cliente e comprovante de venda personalizados;</li>
                                <li>Disponibilizar mais de uma forma de pagamento;</li>
                                <li>O pagamento é parcelado, mas a liquidação é à vista;</li>
                                <li>Sem burocracia e preenchimento de formulários infindáveis;</li>
                                <li>Simulação online para que o cliente escolha a parcela que cabe no seu bolso;</li>
                                <li>Liquidação D+1;</li>
                                <li>Transações realizadas em ambiente seguro proporcionando maior segurança ao processo;</li>
                                <li>Acompanhamento online da operação;</li>
                                <li>Recebimento da maioria das Bandeiras dos cartões de crédito;</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <button className="bg-[rgb(1,24,74)] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
                        Solicite uma solução
                    </button>
                </div>

                <div className="container mx-auto p-4 text-[rgb(1,24,74)]">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center py-20">Aplicativo Incentive Plus Bank</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* Imagem à esquerda */}
                        <div className="flex items-center justify-center lg:w-1/3 mb-4 lg:mb-0">
                            <img src="/images/cellphone.png" alt="Descrição da imagem" className="w-[200px] h-auto" />
                        </div>

                        {/* Cartões à direita */}
                        <div className="hidden lg:w-2/3 lg:grid grid-cols-2 text-[rgb(1,24,74)]">
                            <div className="bg-white  relative">
                                <img src="/images/cardd.png" alt="Card 1" className="w-full h-auto mb-2" />
                                <p className="font-bold text-xl absolute top-10 right-10">Depósitos <br></br>e Transferências</p>
                                <div className="absolute inset-10 flex flex-col justify-center items-center pt-6">
                                    <p className="text-lg">Transferências seguras e rápidas sem limites de valores.</p>
                                </div>
                            </div>
                            <div className="bg-white relative">
                                <img src="/images/cardq.png" alt="Card 2" className="w-full h-auto mb-2" />
                                <p className="font-bold text-xl absolute top-10 right-10">QR Codes</p>
                                <div className="absolute inset-10 flex flex-col justify-center items-center pt-6">
                                    <p className="text-lg">Gerar QR Codes para recebimento de pagamentos.</p>
                                </div>
                            </div>
                            <div className="bg-white relative">
                                <img src="/images/Carteira.png" alt="Card 3" className="w-full h-auto mb-2" />
                                <p className="font-bold text-xl absolute top-10 right-10">Saldo e Extrato</p>
                                <div className="absolute inset-10 flex flex-col justify-center items-center pt-6">
                                    <p className="text-lg">Consulta simplificada de saldo e extratos.</p>
                                </div>
                            </div>
                            <div className="bg-white relative">
                                <img src="/images/cardp.png" alt="Card 4" className="w-full h-auto mb-2" />
                                <p className="font-bold text-xl absolute top-10 right-10">Contas para<br></br> PJ e CNPJ</p>
                                <div className="absolute inset-10 flex flex-col justify-center items-center pt-6">
                                    <p className="text-lg">Modelos de conta para pessoas físicas e jurídicas.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-16">
                        <Link href={`https://wa.me/${phoneNumber}`} className="font-bold text-lg text-[rgb(1,24,74)] pr-4" >
                            <Image src="/images/wp.png" alt="google play" width={50} height={50} />Saiba mais
                        </Link>
                        <Image src="/images/play.jpeg" alt="google play" width={140} height={100} />
                    </div>
                </div>


                <div className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-8 xl:px-[10rem] '>
                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left ">Tudo isso<br /> e muito mais!</h1>
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
