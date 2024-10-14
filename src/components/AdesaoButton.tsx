import { useState } from 'react';

export default function GenerateFileButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleGenerateFile = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/adesao', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Erro ao gerar o arquivo.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'new_users_report.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setMessage('Arquivo gerado e baixado com sucesso!');
    } catch (error) {
      console.error(error);
      setMessage('Erro ao gerar o arquivo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleGenerateFile} 
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? 'Gerando arquivo...' : 'Gerar Arquivo de Adesão'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
