// components/DetailsCard.jsx
import Image from 'next/image';
import React from 'react';

const DetailsCard = ({ title, description, image, details }) => {
  return (
    <div className="details-card">
      <div className="header" style={{ backgroundImage: `url(${image})` }}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg mt-4">{description}</p>
      </div>
      <div className="content mt-6">
        <Image src={image} alt={title} width={100} height={200} />
        <p className="mt-4">{details}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
