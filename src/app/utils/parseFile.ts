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
        // Ignorar linhas que começam com 'D'
        continue;
      }

      // Extrair dados relevantes da linha
      const series = line.substring(30, 33).trim(); // Lote de distribuição
      const luckyNumber = line.substring(33, 41).trim(); // Número de Sorte

      // Validar se os dados extraídos são válidos
      if (series && luckyNumber) {
        results.push({ series, luckyNumber });
      }
    }

    return results;
  } catch (error) {
    console.error(`Erro ao processar o arquivo: ${error.message}`);
    throw new Error('Erro ao processar o arquivo');
  }
}
