// export const formatarData = (apiDate: any) => {
//     // Criar um objeto Date a partir da string
//     const dataHora = new Date(apiDate);
  
//     // Formatar a data no formato desejado (dd-mm-aaaa)
//     const dia = String(dataHora.getDate()).padStart(2, "0");
//     const mes = String(dataHora.getMonth() + 1).padStart(2, "0"); // Adicionar 1 ao mês, pois janeiro é 0
//     const ano = dataHora.getFullYear();
  
//     // Formatar a hora no formato desejado (hh:mm:ss)
//     const hora = String(dataHora.getHours()).padStart(2, "0");
//     const minutos = String(dataHora.getMinutes()).padStart(2, "0");
//     const segundos = String(dataHora.getSeconds()).padStart(2, "0");
  
//     // Montar a data e hora formatadas
//     const dataHoraFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
  
//     return dataHoraFormatada;
//   };