'use client';
import { useState } from 'react';

export default function PreRegister() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [role, setRole] = useState('EMPLOYEE');

  const handlePreRegister = async () => {
    await fetch('/api/company', {
      method: 'POST',
      body: JSON.stringify({ name, cpf, role }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <div>
      <h1>Pré-Cadastro de Funcionários</h1>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="EMPLOYEE">Funcionário</option>
        <option value="MANAGER">Gerente</option>
      </select>
      <button onClick={handlePreRegister}>Cadastrar</button>
    </div>
  );
}
