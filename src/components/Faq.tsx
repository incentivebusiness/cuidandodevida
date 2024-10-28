"use client";
import React from 'react';
import FaqItem from './FaqItem'; // Importe o componente FAQItem

const Faq = () => {
  const faqData = [
    {
      question: 'Como faço para acessar os serviços da Mapfre Cuidando de Você?',
      answer: 'Para participar do programa Mapfre Cuidando de Você, é necessário se cadastrar no aplicativo ou site da TEM (www.temsaude.com) e gerar seu cartão virtual.',
    },
    {
      question: 'Como faço para acessar aos benefícios da Rede de Parcerias?',
      answer: 'Para acessar a plataforma de comunicação de benefícios é necessário em seu primeiro acesso se cadastrar no site www.clubeincentiveplus.com.br.',
    },
    {
      question: 'Quais são os animais que entram para a assistência do Affinty PET?',
      answer: 'Entende-se por animal assistido, somente cães e gatos indicados legalmente como domésticos, desde que convivam com o usuário em sua residência.',
    },
  ];

  return (
    <div className='py-10 md:pt-20 px-10 md:px-20 xl:px-[10rem]'>
      <h1 className='text-4xl md:text-5xl xl:text-6xl text-center text-[rgb(1,24,74)] font-extrabold py-20'>Dúvidas Frequentes</h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
