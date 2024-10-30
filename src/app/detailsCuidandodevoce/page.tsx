
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const page = () => {
    return (
        <>
            <div className='pt-[50px] md:pt-0' >
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/cuidandodevc2.png')] 
                                md:bg-[url('/images/cuidandodevc.png')] md:bg-right z-0" >
                    <Header />
                    <div className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8">
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Mapfre Cuidando de você</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">Os benefícios que você procura em um só lugar!</p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 px-8 xl:py-[100px]"> {/* Centraliza a div no centro da tela */}
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <Image src="/images/medicacuida.png" alt="Rede Parcerias" width={500} height={500} className="hidden md:block w-[500px] h-[400px] md:w-1/2" />

                        {/* Texto à direita */}
                        <div className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8">
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Um programa de saúde <br /><b>Pensado para você</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl ">
                                Tenha acesso ao programa de saúde mais completo do Brasil com a
                                qualidade do atendimento particular e preços que caibam no seu bolso.
                            </p>

                            <button className='p-3 text-white bg-[rgb(1,24,74)] rounded-3xl'>Confira</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center py-8 px-8 text-[rgb(1,24,74)] xl:pb-[100px]">
                    <div className="text-center space-y-6 max-w-4xl">
                        <h2 className="xl:text-5xl font-semibold pb-10">Conosco Você tem acesso a:</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Primeira lista */}
                            <ul className="space-y-2 text-left list-disc pr-20 ">
                                <li className='pb-8'><b>Rede de Consultas e Exames presenciais</b>
                                    Consultas presenciais com mais de 50 especialidades por apenas R$ 50;
                                    Mais de 1500 tipos de exames laboratoriais e de imagem com até 70% de desconto;
                                    Rede de dentistas para consultas, exames e tratamentos odontológicos e ortodônticos com preços reduzidos.
                                    </li>

                                <li className='pb-8'><b>Consultas por Vídeo</b>
                                    Consultas por vídeo com clinico geral: Sem Custo
                                    Consultas por vídeo com demais especialidades: Com Custo
                                </li>

                                <li className='pb-8'><b>Pronto Atendimento 24/7 por vídeo sem custo</b>
                                    Consulta online por vídeo disponível 24 horas por dia, 7 dias por semana;
                                    Consultas quando precisar, como em caso de dor de garganta, estômago, náusea, cólica, etc.;
                                    Poderá receber receitas e encaminhamentos para exames diretamente em seu e-mail ou SMS, de acordo com avaliação
                                    da especialista.
                                    *Disponível apenas para consultas com Clínico Geral.
                                </li>
                            </ul>

                            {/* Segunda lista */}
                            <ul className="space-y-2 text-left list-disc ">

                                <li className='pb-8'><b>Descontos em medicamentos</b>
                                    Garanta de 15% a 30% de desconto nas farmácias das Redes Raia e Drogasil. (15% de desconto em remédios de marca
                                    tarjados e 30% de desconto em remédios genéricos tarjados)
                                    Após a realização do primeiro acesso, aguarde 48h para a liberação do benefício.
                                    Após ativação, basta informar seu CPF no caixa e solicitar o benefício TEM Saúde.
                                </li>

                                <li className='pb-8'><b>Conta saúde digital para pagamentos</b>
                                    O meio de pagamentos dos clientes MAPFRE Cuidando de Você.
                                    Além de ser super prático e seguro, você pode usar cartão de crédito para parcelar sua recarga em até 12x.
                                    Compre créditos no aplicativo TEM SAÚDE DIGITAL, no site app.temsaude.com ou em 11 4000 1821 ou 0800 941 6482.
                                </li>

                                <li className='pb-8'><b>Orientação médica por telefone 24/7</b>
                                    Orientação médica por telefone, disponível 24h por dia, 7 dias da semana, realizada por profissionais da saúde prontos para ajudar
                                    com dúvidas e orientações médicas simples.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='text-[rgb(1,24,74)] flex flex-col items-left justify-center px-[10rem] '>

                    <h1 className="text-xl xl:text-5xl font-extrabold pb-10 text-left">Não perca<br /> essa chance!</h1>
                </div>
                <div className='text-[rgb(1,24,74)] flex flex-col items-center justify-center px-[10rem] pb-20'>
                    <p className='text-md md:text-xl'>Para se cadastrar é muito fácil, após a aquisição de qualquer plano da Incentive Cuidando de Vida, basta acessar o site www.clubeincentiveplus.com.br e clicar em cadastre- se, com seu cpf, preencha os campos com suas informações e desfrute de inúmeros benefícios exclusivos para você.</p>
                    <div className='flex gap-4 pt-10  justify-center '>
                        <Image src="/images/play.jpeg" alt="Rede Parcerias" width={200} height={200} className="xl:px-10" />
                        <button className='px-4 text-white bg-[rgb(1,24,74)] rounded-3xl'>Acesse o site</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page
