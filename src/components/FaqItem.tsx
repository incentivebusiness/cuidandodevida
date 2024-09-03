"use client";
import React, { useState, FC } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-[1px] mb-4 rounded-full bg-gradient-to-r from-[rgb(21,154,194)] to-[rgb(131,189,87)]">
  <div className="p-6 bg-white rounded-full">
      <button
        className="flex justify-between items-center w-full mb-2 focus:outline-none"
        onClick={toggleOpen}
      >
        <div className='w-full px-4'>
        <h2 className="text-lg text-center font-bold">{question}</h2>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 font-medium px-4 py-4">{answer}</div>
      )}
    </div>
    </div>
  );
};

export default FaqItem;
