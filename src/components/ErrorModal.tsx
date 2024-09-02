// ErrorModal.tsx
import React from 'react';

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Erro</h2>
        <p>{message}</p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
