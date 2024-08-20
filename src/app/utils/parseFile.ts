import fs from 'fs';
import readline from 'readline';

export async function parseFile(filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    const results = [];

    for await (const line of rl) {
      if (line.startsWith('D')) {
        // Extrair os dados relevantes da linha
        const lote = line.substring(1, 6).trim();            // 5 dígitos após o 'D'
        const series = line.substring(31, 34).trim();        // 3 dígitos após os 25 zeros
        const luckyNumber = line.substring(34, 42).trim();   // 8 dígitos após a série
        const sequence = line.substring(42, 51).trim();      // 9 dígitos finais

        // Validar se os dados extraídos são válidos
        if (lote && series && luckyNumber && sequence) {
          results.push({ lote, series, luckyNumber, sequence });
        }
      }
    }

    return results;
  } catch (error) {
    console.error(`Erro ao processar o arquivo: ${error.message}`);
    throw new Error('Erro ao processar o arquivo');
  }
}
