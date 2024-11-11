// 'use client';
// import React, { useEffect, useState } from "react";

// const ClienteProfile = () => {
//   const [signedDocumentUrl, setSignedDocumentUrl] = useState(null);

//   useEffect(() => {
//     // Vamos simular uma chamada à API para pegar a URL do documento assinado.
//     // Em um cenário real, você faria uma requisição para o seu backend aqui.

//     const fetchSignedDocumentUrl = async () => {
//       try {
//         const response = await fetch("/api/docusign");  // Substitua com sua rota real
//         const data = await response.json();
//         setSignedDocumentUrl(data.documentUrl); // Recebe a URL do documento assinado
//       } catch (error) {
//         console.error("Erro ao obter URL do documento assinado:", error);
//       }
//     };

//     fetchSignedDocumentUrl();
//   }, []);

//   if (!signedDocumentUrl) {
//     return <p>Carregando seu documento assinado...</p>;
//   }

//   return (
//     <div>
//       <h1>Seu documento assinado está pronto!</h1>
//       <a href={signedDocumentUrl} download>
//         <button className="btn btn-primary">Baixar Documento Assinado</button>
//       </a>
//     </div>
//   );
// };

// export default ClienteProfile;


'use client';
import React, { useEffect, useState } from "react";

const ClienteProfile = () => {
  const [signedDocumentUrl, setSignedDocumentUrl] = useState(null);

  useEffect(() => {
    const fetchSignedDocumentUrl = async () => {
      try {
        const response = await fetch("/api/docusign", {
          method: "POST", // Mudamos para POST
          headers: {
            "Content-Type": "application/json", // Enviar dados em formato JSON
          },
          body: JSON.stringify({
            name: "Cliente Nome",  // Substitua com os dados reais
            email: "cliente@example.com",  // Substitua com os dados reais
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setSignedDocumentUrl(data.documentUrl); // Recebe a URL do documento assinado
        } else {
          console.error("Erro ao buscar o documento assinado", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao obter URL do documento assinado:", error);
      }
    };

    fetchSignedDocumentUrl();
  }, []);

  if (!signedDocumentUrl) {
    return <p>Carregando seu documento assinado...</p>;
  }

  return (
    <div>
      <h1>Seu documento assinado está pronto!</h1>
      <a href={signedDocumentUrl} download>
        <button className="btn btn-primary">Baixar Documento Assinado</button>
      </a>
    </div>
  );
};

export default ClienteProfile;
