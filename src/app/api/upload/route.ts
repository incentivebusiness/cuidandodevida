
// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/lib/prisma';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const { numbers } = req.body;

//   if (!numbers || !Array.isArray(numbers) || numbers.some((num: string) => typeof num !== 'string')) {
//     return res.status(400).json({ error: 'Invalid data' });
//   }

//   try {
//     const createdNumbers = await prisma.luckyNumber.createMany({
//       data: numbers.map((number: string) => ({ number })),
//     });

//     return res.status(200).json({ message: 'Numbers saved successfully', count: createdNumbers.count });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Failed to save numbers' });
//   }
// }
// import { prisma } from '@/lib/prisma';

// export async function POST(req: Request) {
//   try {
//     const { numbers } = await req.json(); // Obtenha os dados do corpo da requisição

//     if (!numbers || !Array.isArray(numbers) || numbers.some((num: string) => typeof num !== 'string')) {
//       return new Response(JSON.stringify({ error: 'Invalid data' }), { status: 400 });
//     }

//     const createdNumbers = await prisma.luckyNumber.createMany({
//       data: numbers.map((number: string) => 
//         ({ 
//           number,
//           series: '123',
//           loteClient: '123',
//           qnty: '123',
//          })),
//     });

//     return new Response(JSON.stringify({ message: 'Numbers saved successfully', count: createdNumbers.count }), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: 'Failed to save numbers' }), { status: 500 });
//   }
// }



// import { prisma } from '@/lib/prisma';

// export async function POST(req: Request) {
//   try {
//     const { fileContent } = await req.json(); // Obtenha os dados do corpo da requisição

//     if (!fileContent || typeof fileContent !== 'string') {
//       return new Response(JSON.stringify({ error: 'Invalid data' }), { status: 400 });
//     }

//     const lines = fileContent.split('\n').map(line => line.trim()).filter(line => line);
    
//     // Verifica se há pelo menos 3 linhas (para ignorar a primeira e a última)
//     if (lines.length < 3) {
//       return new Response(JSON.stringify({ error: 'File must have at least 3 lines' }), { status: 400 });
//     }

//     // Ignorar a primeira e a última linha
//     const relevantLines = lines.slice(1, lines.length - 1);
    
//     const luckyNumbersData = relevantLines.map(line => {
//       // Verifica se a linha começa com 'D' e processa
//       if (line.startsWith('D')) {
//         // Lote: os próximos 5 caracteres
//         const loteClient = line.substring(1, 6); // Pega os 5 caracteres após o 'D'
//         // Ignora os 25 zeros e pega os próximos 25 caracteres fixos
//         const serie = line.substring(6, 31).padEnd(25, '0'); // Preencher com zeros se necessário
//         // Série: os próximos 3 caracteres
//         const series = line.substring(31, 34);
//         // Número de sorte: os próximos 8 caracteres
//         const number = line.substring(34, 42);
//         // Quantidade: os próximos 9 caracteres
//         const qnty = line.substring(42, 51);
        
//         return { number, series, loteClient, qnty };
//       }
//       return null; // Se a linha não começa com 'D', retorna nulo
//     }).filter(Boolean); // Remove linhas que não são válidas

//     // Insere todos os números da sorte no banco de dados
//     const createdNumbers = await prisma.luckyNumber.createMany({
//       data: luckyNumbersData,
//     });

//     return new Response(JSON.stringify({ message: 'Numbers saved successfully', count: createdNumbers.count }), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: 'Failed to save numbers' }), { status: 500 });
//   }
// }
import { prisma } from '@/lib/prisma';

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

    const luckyNumbersData = relevantLines.map(line => {
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
    }).filter(Boolean); // Remove quaisquer nulos do array

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
