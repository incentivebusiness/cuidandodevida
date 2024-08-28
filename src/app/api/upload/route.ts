
import { prisma } from '@/lib/prisma';

interface LuckyNumber {
  number: string;
  series: string;
  loteClient: string;
  qnty: string;
}

export async function POST(req: Request) {
  try {
    const { fileContent } = await req.json();

    if (!fileContent || typeof fileContent !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid data' }), { status: 400 });
    }

    const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line);

    // Verifica se há pelo menos 3 linhas (para ignorar a primeira e a última)
    if (lines.length < 3) {
      return new Response(JSON.stringify({ error: 'File must have at least 3 lines' }), { status: 400 });
    }

    // Ignorar a primeira e a última linha
    const relevantLines = lines.slice(1, lines.length - 1);

    const luckyNumbersData: LuckyNumber[] = relevantLines.map(line => {
      if (line.startsWith('D')) {
        // Lote de envio do cliente: 5 caracteres após o 'D'
        const loteClient = line.substring(1, 6);

        // Ignora os 25 zeros
        // Série de distribuição: 3 caracteres após os 25 zeros (posição 31-34)
        const series = line.substring(31, 34);

        // Número de Sorte: 8 caracteres após a série (posição 34-42)
        const number = line.substring(34, 42);

        // Quantidade: 9 caracteres após o número de sorte (posição 42-51)
        const qnty = line.substring(42, 51);

        return { number, series, loteClient, qnty };
      }
      return null;
    }).filter((item): item is LuckyNumber => item !== null);//filter(Boolean); // Remove quaisquer nulos do array

    // Insere todos os números da sorte no banco de dados
    const createdNumbers = await prisma.luckyNumber.createMany({
      data: luckyNumbersData,
      
    });
    console.log(luckyNumbersData);
    return new Response(JSON.stringify({ message: 'Numbers saved successfully', count: createdNumbers.count }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to save numbers' }), { status: 500 });
  }
}
