export type CadastroSeguroFormInputs = {
  numeroContrato: string;
  numeroVersaoContrato: string;
  chaveRegistro: string;
  nomeUsuario: string;
  dataNascimentoUsuario: string;
  cpfUsuario: string;
  enderecoUsuario: string;
  ufUsuario: string;
  cidadeUsuario: string;
  bairroUsuario: string;
  cepUsuario: string;
  telefoneUsuario: string;
  placaVeiculo: string;
  chassiVeiculo: string;
  corVeiculo: string;
  anoFabricacaoVeiculo: string;
  modeloVeiculo: string;
  marcaVeiculo: string;
  valorLimiteFuneral: string;
  valorLimiteDespesaMedica: string;
};

// user.d.ts (ou onde você define o tipo de User)

export interface User {
  id: string;
  email: string;
  name: string;
  role?: string; // Inclua a propriedade role aqui
  hashedPassword?: string;
}
