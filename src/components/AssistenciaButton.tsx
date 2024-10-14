import { useState } from 'react';
import axios from 'axios';

const GenerateFile = () => {
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('/api/assistencia', {
        responseType: 'blob', // Receber o arquivo como blob
      });

      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      setFileUrl(url);

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError('Erro ao gerar o arquivo. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="container">
      <h1>Gerar Arquivo de Adesão</h1>

      <button
        onClick={handleGenerateFile}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Gerando...' : 'Gerar Arquivo'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {fileUrl && (
        <div className="mt-4">
          <a
            href={fileUrl}
            download={`adesao_${new Date().toISOString().split('T')[0]}.csv`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Baixar Arquivo
          </a>
        </div>
      )}
    </div>
  );
};

export default GenerateFile;
