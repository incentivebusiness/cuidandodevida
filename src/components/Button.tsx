// src/components/Button.tsx
import { useRouter } from 'next/navigation';
import React from 'react';

const Button: React.FC = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <button 
      className="text-white bg-[#01184a] p-4 rounded-xl absolute top-10 right-14" 
      onClick={handleHomeClick}
    >
      Home
    </button>
  );
};

export default Button;
