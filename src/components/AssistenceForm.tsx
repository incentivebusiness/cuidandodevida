'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CadastroSeguroFormInputs } from '../types/user';
import { schema } from '@/schemas/user';


const CadastroSeguroForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroSeguroFormInputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<CadastroSeguroFormInputs> = async (data) => {
        try {
            const response = await fetch('/api/seguros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar os dados.');
            }

            alert('Dados enviados com sucesso.');
            // Limpar formulário ou exibir mensagem de sucesso, se necessário
        } catch (error) {
            console.error('Erro ao enviar os dados:', error.message);
            // Tratar erros de forma apropriada (exibir mensagem de erro, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Dados fornecidos pela empresa (não editáveis pelo usuário) */}
                <div className="mb-4">
                    <label htmlFor="numeroContrato" className="block text-gray-700 text-sm font-bold mb-2">
                        Número do Contrato
                    </label>
                    <p id="numeroContrato" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100">
                        {/* Supondo que o número do contrato venha do estado ou props */}
                        {/* Exemplo de valor fixo: "123456789" */}
                        123456789
                    </p>
                </div>

                <div className="mb-4">
                    <label htmlFor="numeroVersaoContrato" className="block text-gray-700 text-sm font-bold mb-2">
                        Número de Versão do Contrato
                    </label>
                    <p id="numeroVersaoContrato" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100">
                        {/* Exemplo de valor fixo: "1.0" */}
                        1.0
                    </p>
                </div>

                <div className="mb-4">
                    <label htmlFor="chaveRegistro" className="block text-gray-700 text-sm font-bold mb-2">
                        Chave de Registro
                    </label>
                    <p id="chaveRegistro" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100">
                        {/* Exemplo de valor fixo: "ABCD1234" */}
                        ABCD1234
                    </p>
                </div>

                {/* Campos preenchidos pelo usuário */}
                <div className="mb-4">
                    <label htmlFor="nomeUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Nome Completo do Usuário
                    </label>
                    <input
                        {...register('nomeUsuario')}
                        type="text"
                        id="nomeUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nomeUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.nomeUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.nomeUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="dataNascimentoUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Data de Nascimento do Usuário (DD/MM/AAAA)
                    </label>
                    <input
                        {...register('dataNascimentoUsuario')}
                        type="text"
                        id="dataNascimentoUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.dataNascimentoUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.dataNascimentoUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.dataNascimentoUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="cpfUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        CPF do Usuário
                    </label>
                    <input
                        {...register('cpfUsuario')}
                        type="text"
                        id="cpfUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cpfUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.cpfUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.cpfUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="enderecoUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Endereço do Usuário
                    </label>
                    <input
                        {...register('enderecoUsuario')}
                        type="text"
                        id="enderecoUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.enderecoUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.enderecoUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.enderecoUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="ufUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        UF do Usuário
                    </label>
                    <input
                        {...register('ufUsuario')}
                        type="text"
                        id="ufUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ufUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.ufUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.ufUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="cidadeUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Cidade do Usuário
                    </label>
                    <input
                        {...register('cidadeUsuario')}
                        type="text"
                        id="cidadeUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cidadeUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.cidadeUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.cidadeUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="bairroUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Bairro do Usuário
                    </label>
                    <input
                        {...register('bairroUsuario')}
                        type="text"
                        id="bairroUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.bairroUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.bairroUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.bairroUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="cepUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        CEP do Usuário
                    </label>
                    <input
                        {...register('cepUsuario')}
                        type="text"
                        id="cepUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cepUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.cepUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.cepUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="telefoneUsuario" className="block text-gray-700 text-sm font-bold mb-2">
                        Telefone do Usuário
                    </label>
                    <input
                        {...register('telefoneUsuario')}
                        type="text"
                        id="telefoneUsuario"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.telefoneUsuario ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.telefoneUsuario && (
                        <p className="text-red-500 text-xs italic">{errors.telefoneUsuario.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="placaVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Placa do Veículo
                    </label>
                    <input
                        {...register('placaVeiculo')}
                        type="text"
                        id="placaVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.placaVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.placaVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.placaVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="chassiVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Chassi do Veículo
                    </label>
                    <input
                        {...register('chassiVeiculo')}
                        type="text"
                        id="chassiVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.chassiVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.chassiVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.chassiVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="corVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Cor do Veículo
                    </label>
                    <input
                        {...register('corVeiculo')}
                        type="text"
                        id="corVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.corVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.corVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.corVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="anoFabricacaoVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Ano de Fabricação do Veículo
                    </label>
                    <input
                        {...register('anoFabricacaoVeiculo')}
                        type="text"
                        id="anoFabricacaoVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.anoFabricacaoVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.anoFabricacaoVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.anoFabricacaoVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="modeloVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Modelo do Veículo
                    </label>
                    <input
                        {...register('modeloVeiculo')}
                        type="text"
                        id="modeloVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.modeloVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.modeloVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.modeloVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="marcaVeiculo" className="block text-gray-700 text-sm font-bold mb-2">
                        Marca do Veículo
                    </label>
                    <input
                        {...register('marcaVeiculo')}
                        type="text"
                        id="marcaVeiculo"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.marcaVeiculo ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.marcaVeiculo && (
                        <p className="text-red-500 text-xs italic">{errors.marcaVeiculo.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="valorLimiteFuneral" className="block text-gray-700 text-sm font-bold mb-2">
                        Valor Limite Funeral
                    </label>
                    <input
                        {...register('valorLimiteFuneral')}
                        type="text"
                        id="valorLimiteFuneral"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.valorLimiteFuneral ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.valorLimiteFuneral && (
                        <p className="text-red-500 text-xs italic">{errors.valorLimiteFuneral.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="valorLimiteDespesaMedica" className="block text-gray-700 text-sm font-bold mb-2">
                        Valor Limite Despesa Médica
                    </label>
                    <input
                        {...register('valorLimiteDespesaMedica')}
                        type="text"
                        id="valorLimiteDespesaMedica"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.valorLimiteDespesaMedica ? 'border-red-500' : ''
                            }`}
                    />
                    {errors.valorLimiteDespesaMedica && (
                        <p className="text-red-500 text-xs italic">{errors.valorLimiteDespesaMedica.message}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </div>

            </div>
        </form>
    );
};

export default CadastroSeguroForm;
