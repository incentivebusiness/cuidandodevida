// utils/fileUtils.ts

// Função para gerar o nome do arquivo
export const generateFileName = (codigoPlano: string, sequencial: number): string => {
  const data = new Date();
  const ano = data.getFullYear().toString().slice(-2); // Últimos 2 dígitos do ano
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês com 2 dígitos
  const dia = String(data.getDate()).padStart(2, '0'); // Dia com 2 dígitos
  const dataFormatada = `${dia}${mes}${ano}`;
  const sequencialFormatado = String(sequencial).padStart(2, '0'); // Sequencial com 2 dígitos

  return `MCAP_NEW_${codigoPlano}_${dataFormatada}_${sequencialFormatado}.TXT`;
};

// Função para gerar o conteúdo do arquivo
export const generateFileContent = (codigoCliente: string, codigoPlano: string, sequencial: number): string => {
  const data = new Date();
  const ano = data.getFullYear(); // Ano completo
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês com 2 dígitos
  const dia = String(data.getDate()).padStart(2, '0'); // Dia com 2 dígitos
  const dataFormatada = `${ano}${mes}${dia}`;
  const numeroRemessa = `${ano}${String(sequencial).padStart(6, '0')}`;

  return `H
${codigoCliente}
${codigoPlano}
${dataFormatada}
${numeroRemessa}`;
};
