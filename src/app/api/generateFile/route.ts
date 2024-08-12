// // pages/api/generateFile.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { generateFileName, generateFileContent } from '../../utils/fileUtils'; // Caminho relativo para o arquivo de utilidades

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { codigoCliente, codigoPlano, sequencial } = req.query;

//     // Verificar se todos os parâmetros necessários estão presentes
//     if (typeof codigoCliente !== 'string' || typeof codigoPlano !== 'string' || typeof sequencial !== 'string') {
//         return res.status(400).json({ error: 'Parâmetros insuficientes ou inválidos' });
//     }

//     // Converter sequencial para número
//     const sequencialNum = parseInt(sequencial, 10);
//     if (isNaN(sequencialNum)) {
//         return res.status(400).json({ error: 'Sequencial inválido' });
//     }

//     const fileName = generateFileName(codigoPlano, sequencialNum);
//     const fileContent = generateFileContent(codigoCliente, codigoPlano, sequencialNum);

//     res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(fileContent);
// }
