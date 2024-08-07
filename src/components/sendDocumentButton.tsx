"use client";
import React, { useState } from 'react';

const SendDocumentButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const sendDocumentForSignature = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const response = await fetch('/api/sendDocument', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Nome do Signatário', // Substitua pelos valores reais
        email: 'email@example.com', // Substitua pelos valores reais
        documentBase64: 'base64_do_documento', // Substitua pelos valores reais
        documentName: 'Nome do Documento.pdf', // Substitua pelos valores reais
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setSuccessMessage('Documento enviado para assinatura com sucesso!');
    } else {
      setError(data.message);
    }
  };

  return (
    <div className='bg-green-200 p-4'>
      <button onClick={sendDocumentForSignature} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar Documento para Assinatura'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default SendDocumentButton;
