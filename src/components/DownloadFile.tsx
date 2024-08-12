// 'use client'

// import React from 'react';


// const DownloadFile = async () => {
//     const response = await fetch('/api/generateFile?codigoCliente=1234&codigoPlano=5678&sequencial=01');
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'filename.txt');
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   };
  
//   export default DownloadFile;