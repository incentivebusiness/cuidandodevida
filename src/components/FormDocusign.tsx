'use client'

import { useState } from 'react';

const FormDocusign = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/docusign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, company }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Envelope criado com sucesso! Acesse aqui: ${data.url}`);
      } else {
        setMessage(`Erro: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Erro ao enviar: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default FormDocusign;
