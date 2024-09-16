'use client';
import { useState } from 'react';

export default function RegisterCompany() {
  const [cnpj, setCnpj] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const response = await fetch('/api/company-register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cnpj, name, email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Empresa registrada com sucesso!');
    } else {
      alert(`Erro: ${result.message}`);
    }
  };

  return (
    <div>
      <h1>Registrar Empresa</h1>
      <input
        type="text"
        placeholder="CNPJ"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome da Empresa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}
