
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
                <div className="w-full h-screen bg-cover bg-right bg-[url('/images/petcell.png')] 
                                md:bg-[url('/images/dogsbanner.png')] md:bg-right z-0" >
                    <Header />
                    <div className="flex flex-col items-center justify-items-center pt-[10rem] xl:pt-[14rem] h-full px-8">
                        <Image src="/images/logoMapfre.png" alt="Logo" width={200} height={100} />
                        <h1 className="text-white text-5xl text-center font-bold pb-[20px]">Affinity Pet</h1>
                        <p className="text-white bg-black bg-opacity-10 rounded-3xl p-2 text-xl text-center font-bold">O cuidado que seu PET merece.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 px-8 xl:py-[100px]"> {/* Centraliza a div no centro da tela */}
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center space-y-4 md:space-y-0 md:space-x-8 max-w-6xl">
                        {/* Imagem à esquerda */}
                        <Image src="/images/pets.png" alt="Rede Parcerias" width={500} height={500} className="hidden md:block w-[400px] h-[400px] md:w-[400px]" />

                        {/* Texto à direita */}
                        <div className="md:w-1/2 text-left text-[rgb(1,24,74)] px-6 pt-8">
                            <h5 className="text-xl xl:text-3xl font-semibold">
                                Cuide do seu <br /><b>Melhor amigo</b>
                            </h5>
                            <p className="mt-4 text-gray-700 pb-4 text-xl ">
                                Ter uma PET em casa é algo transformador para a vida de todos, sua
                                presença oferece benefícios significativos para a saúde física e mental,
                                melhorando o bem-estar e clima domiciliar, não é à toa que estes
                                pequenos seres estão presentes em tantas casas pelo mundo, e por isso,
                                devemos trata-los bem e estarmos atentos principalmente a sua saúde,
                                com isso, nossa solução da Affinity PET é o caminho ideal para você
                                cuidar da saúde de seu PET.
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
                                <li className='pb-8'><b> Assistência para serviços veterinários</b><br />

                                    ✓ Clínicas veterinárias, podendo ser em Rede Credenciada ou não;<br />
                                    ✓ Pronto-socorro de animais;<br />
                                    ✓ Adestramento de cães;<br />
                                    ✓ Pet shop;<br />
                                    ✓ Banho e tosa;<br />
                                    ✓ Hotéis para animais;<br />
                                    ✓ Laboratórios veterinários;<br />
                                    ✓ Farmácia;<br />
                                    ✓ Associações de animais;<br />
                                    ✓ Serviço de transporte de animais.<br />
                                    <br />

                                    Nota: Os custos com quaisquer despesas relacionadas a serviços veterinários contratados serão de responsabilidade do Usuário.
                                    Horário de atendimento Canal de Assistência: Todos os dias, 24h por dia.

                                </li>

                                <li className='pb-8'><b>Assistência para agendamento de consultas</b> <br />


                                    Os custos com o atendimento veterinário e demais despesas serão de responsabilidade do Usuário
                                    O horário agendado para a consulta veterinária dependerá da disponibilidade da Clínica Veterinária.
                                    Horário de atendimento Canal de Assistência: Todos os dias, 24h por dia.
                                </li>

                                <li className='pb-8'><b>Serviço de leva e traz</b> <br />
                                    Quando solicitado pelo Usuário, o Canal de Atendimento de Assistência agendará o serviço de leva e traz do Animal
                                    Assistido até o local indicado pelo Usuário, como Clínicas Veterinárias, banho e tosa e hotel.
                                    Limite: Até R$200,00 limitado a 02 (duas) intervenções por ano de vigência do seguro.
                                    Horário de atendimento Canal de Assistência: Todos os dias, 24h por dia.
                                </li>
                            </ul>

                            {/* Segunda lista */}
                            <ul className="space-y-2 text-left list-disc ">

                                <li className='pb-8'><b>Assistência para aplicação de vacinas em domicilio</b> <br />
                                    Quando solicitado pelo Usuário, o Canal de Atendimento de Assistência acionará a sua Rede Credenciada para que um
                                    Médico Veterinário possa se dirigir a Residência Habitual para aplicar a vacina especificada pelo Usuário no Animal Assistido.
                                    O custo da aplicação e da vacina será de responsabilidade do Usuário, devendo este ser pago diretamente ao profissional na
                                    data e local do evento.
                                    <br />
                                    <br />
                                    A solicitação do serviço deverá ser realizada através agendamento prévio de no mínimo 48 horas de antecedência.
                                    Limite: Até R$80,00 (Oitenta reais) referente à taxa de deslocamento do profissional, limitado em 03 (três) intervenções por
                                    ano de vigência do seguro.
                                </li>

                                <li className='pb-8'><b>Assistência para implantação de chips</b> <br />
                                    Quando solicitado pelo Usuário, o Canal de Atendimento de Assistência fornecerá a implantação de um microchip de
                                    identificação no Animal Assistido, que será realizada por um Médico Veterinário através da Clínica Veterinária da Rede
                                    Credenciada. Este serviço inclui ainda o cadastro dos dados do Animal Assistido no banco de dados SIRAA (Sistema de
                                    Identificação e Registro de Animais da América Latina).
                                    <br />
                                    <br />
                                    O microchip para animais contém um código exclusivo e inalterável que transmite informações específicas do Pet.
                                    O custo do microchip e da implantação no Animal Assistido será de responsabilidade do Canal de Atendimento de Assistência.
                                    A solicitação do serviço deverá ser realizada através agendamento prévio de no mínimo 48 horas de antecedência.
                                    Até R$ 200,00 (duzentos reais) por evento, limitado a 01 (uma) intervenção por ano de vigência do seguro.
                                </li>

                               
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
