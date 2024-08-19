'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(result.message);
        router.push('/success'); // Redireciona para uma página de sucesso
      } else {
        alert(result.error || 'An error occurred during the upload');
      }
    } catch (error) {
      alert('An unexpected error occurred');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
          accept=".txt" // Opcional: define tipos de arquivos aceitos
        />
        <button
          type="submit"
          className={`w-full text-white font-bold py-2 px-4 rounded ${
            uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          }`}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}
