
// 'use client';
// import { useState } from 'react';

// const Home = () => {
//   const [fileContent, setFileContent] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile && selectedFile.type === 'text/plain') {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target?.result as string;
//         setFileContent(content);
//       };
//       reader.readAsText(selectedFile);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!fileContent) return;

//     const numbers = fileContent.split('\n').map(line => line.trim()).filter(line => line);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ numbers }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       alert('An error occurred while saving the numbers');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Ler e Salvar Números da Sorte</h1>
//       <input type="file" accept=".txt" onChange={handleFileChange} />
//       {fileContent && (
//         <div>
//           <h2>Conteúdo do Arquivo:</h2>
//           <pre>{fileContent}</pre>
//           <button onClick={handleSubmit}>Salvar Números</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
// 'use client';
// import { useState } from 'react';

// const Home = () => {
//   const [fileContent, setFileContent] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile && selectedFile.type === 'text/plain') {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target?.result as string;
//         setFileContent(content);
//       };
//       reader.readAsText(selectedFile);
//     }
//   };

//   const handleSubmit = async () => {
//     if (!fileContent) return;

//     const numbers = fileContent.split('\n').map(line => line.trim()).filter(line => line);

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ numbers }),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//       } else {
//         alert(result.error);
//       }
//     } catch (error) {
//       alert('An error occurred while saving the numbers');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Ler e Salvar Números da Sorte</h1>
//       <input type="file" accept=".txt" onChange={handleFileChange} />
//       {fileContent && (
//         <div>
//           <h2>Conteúdo do Arquivo:</h2>
//           <pre>{fileContent}</pre>
//           <button onClick={handleSubmit}>Salvar Números</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
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

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileContent }), // Envia o conteúdo do arquivo como 'fileContent'
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
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Ler e Salvar Números da Sorte</h1>
      <input 
        type="file" 
        accept=".txt" 
        onChange={handleFileChange} 
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
      />
      {fileContent && (
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Conteúdo do Arquivo:</h2>
          <pre className="bg-gray-100 p-2 rounded-md border border-gray-200">{fileContent}</pre>
          <button 
            onClick={handleSubmit} 
            className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Salvar Números
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
