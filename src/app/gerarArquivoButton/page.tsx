'use client';
import { useState } from 'react';

const GerarArquivoButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const gerarArquivo = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/gerartxt', {
        method: 'POST',
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Erro ao gerar o arquivo.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={gerarArquivo} disabled={loading}>
        {loading ? 'Gerando...' : 'Gerar Arquivo'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GerarArquivoButton;
