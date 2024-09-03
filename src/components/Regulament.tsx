
import React from 'react';

// Lista dos documentos PDF disponíveis
const pdfDocuments = [
  { name: 'Assistência Domiciliar', fileName: 'ra-asst-domi.pdf' },
  { name: 'Affinity Pet', fileName: 'reg-affinity-pat.pdf' },
  { name: 'Assistência Funeral', fileName: 'reg-funeral.pdf' },
  { name: 'Regulamento de Pagamento', fileName: 'reg-pag.pdf' }
];

const Regulament = () => {
  // Base URL para acessar os documentos PDF
  const baseUrl = 'http://localhost:3000/pdfs/';

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4 text-center text-[#01184a]">Regulamentação</h2>
      <p className="mb-4 text-center">Clique em um dos links abaixo para visualizar o documento PDF:</p>
      <div className="flex flex-wrap justify-center">
        {pdfDocuments.map((doc, index) => (
          <a
            key={index}
            href={`${baseUrl}${doc.fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mx-2 my-1"
          >
            {doc.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Regulament;
