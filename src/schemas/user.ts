import { z } from 'zod';


export const schema = z.object({
  numeroContrato: z.string().min(1, { message: 'Campo obrigatório' }),
  numeroVersaoContrato: z.string().min(1, { message: 'Campo obrigatório' }),
  chaveRegistro: z.string().min(1, { message: 'Campo obrigatório' }),
  nomeUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  dataNascimentoUsuario: z.string().refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
      message: 'Formato inválido. Use DD/MM/AAAA',
  }),
  cpfUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  enderecoUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  ufUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  cidadeUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  bairroUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  cepUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  telefoneUsuario: z.string().min(1, { message: 'Campo obrigatório' }),
  placaVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  chassiVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  corVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  anoFabricacaoVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  modeloVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  marcaVeiculo: z.string().min(1, { message: 'Campo obrigatório' }),
  valorLimiteFuneral: z.string().min(1, { message: 'Campo obrigatório' }),
  valorLimiteDespesaMedica: z.string().min(1, { message: 'Campo obrigatório' }),
});
