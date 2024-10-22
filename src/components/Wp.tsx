// src/components/WhatsAppIcon.tsx
import Image from 'next/image';
import React from 'react';

const WhatsAppIcon = () => {
  const phoneNumber = '+551191071-8727'; // Substitua pelo número da empresa

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        padding: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
     <Image src='/images/wp.png' width={40} height={40} alt='whatssapp' className='w-[60px]'/>
    </a>
  );
};

export default WhatsAppIcon;
