// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center',zIndex: 1000, }}>
      <div style={{ background: 'white', padding: '140px', borderRadius: '8px' }}>
        <h2 className='text-2xl text-red-600 font-semibold'>Você ainda está aí?</h2>
        <p className='font-light text-center text-base text-gray-500 pt-2'>Click SIM para Continuar</p>
        <div className='flex items-center justify-center gap-10 pt-10'>
        <button onClick={onConfirm} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sim</button>
        <button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sair</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
