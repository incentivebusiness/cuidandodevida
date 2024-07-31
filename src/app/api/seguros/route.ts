import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { parse } from 'json2csv';
import fs from 'fs';
import path from 'path';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Salvar no banco de dados
      const newSeguro = await prisma.seguro.create({
        data: {
          competencia: data.competencia,
          tipoSegurado: data.tipoSegurado,
          statusSegurado: data.statusSegurado,
          nomeCompleto: data.nomeCompleto,
          dataNascimento: data.dataNascimento,
          dataAdesao: data.dataAdesao,
          planoContratado: data.planoContratado,
          capitalSegurado: data.capitalSegurado,
          premioTotal: data.premioTotal,
          sexo: data.sexo,
          estadoCivil: data.estadoCivil,
          cpf: data.cpf,
          endereco: data.endereco,
          inicioVigencia: data.inicioVigencia,
          fimVigencia: data.fimVigencia,
        },
      });

      // Gerar CSV
      const csv = parse(data);
      const filePath = path.join(process.cwd(), 'public', 'seguros.csv');
      fs.writeFileSync(filePath, csv);

      res.status(200).json({ message: 'Dados salvos com sucesso e CSV gerado.' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
};

export default handler;
