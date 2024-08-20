
'use client';
import { useState } from 'react';

const Home = () => {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!fileContent) return;

    const numbers = fileContent.split('\n').map(line => line.trim()).filter(line => line);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numbers }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert('An error occurred while saving the numbers');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ler e Salvar Números da Sorte</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {fileContent && (
        <div>
          <h2>Conteúdo do Arquivo:</h2>
          <pre>{fileContent}</pre>
          <button onClick={handleSubmit}>Salvar Números</button>
        </div>
      )}
    </div>
  );
};

export default Home;
