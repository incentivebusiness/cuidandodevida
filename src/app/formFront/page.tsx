'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importando o useRouter

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para mensagens de erro
    const router = useRouter(); // Instanciando o router

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null); // Limpa o erro anterior

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, company }),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar o formulário'); // Lançar um erro se a resposta não for ok
            }
            console.log('Response status:', response.status);
console.log('Response body:', await response.text());

            const result = await response.json();
            router.push(result.url); // Usar router.push para navegação
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
    setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibir mensagem de erro */}
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required // Adicionar required para validação básica
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required // Adicionar required para validação básica
                />
            </label>
            <label>
                Company:
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required // Adicionar required para validação básica
                />
            </label>
            <button type="submit">Send Document</button>
        </form>
    );
}
