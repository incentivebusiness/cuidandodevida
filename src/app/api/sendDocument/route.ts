// import { NextApiRequest, NextApiResponse } from 'next';
// import * as docusign from 'docusign-esign';
// import { docusignConfig } from '@/lib/docusignConfig';
// import { getAccessToken } from '@/lib/getAccessToken';

// type Diff<T, U> = T extends U ? never : T;
// type OmitWithTag<T, K extends keyof T, Tag> = Omit<T, K> & { [P in K]: Tag };

// function checkFields<T extends Record<string, any>>(fields: T) {
//   // Implementação da função de verificação
//   // Exemplo simples para verificar campos válidos
//   Object.keys(fields).forEach(key => {
//     if (typeof fields[key] === 'undefined') {
//       throw new Error(`Campo ${key} está indefinido`);
//     }
//   });
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, documentBase64, documentName } = req.body;

//     const accessToken = await getAccessToken();
//     const dsApiClient = new docusign.ApiClient();
//     dsApiClient.setBasePath(docusignConfig.dsOauthServer); // Verifique se a variável está correta
//     dsApiClient.addDefaultHeader('Authorization', `Bearer ${accessToken}`);

//     const envDef = new docusign.EnvelopeDefinition();
//     envDef.emailSubject = "Please sign this document";
//     envDef.emailBlurb = "Please sign this document";

//     const doc = new docusign.Document();
//     doc.documentBase64 = documentBase64;
//     doc.name = documentName;
//     doc.documentId = '1';

//     envDef.documents = [doc];

//     const signer = new docusign.Signer();
//     signer.email = email;
//     signer.name = name;
//     signer.recipientId = '1';

//     const signHere = new docusign.SignHere();
//     signHere.documentId = '1';
//     signHere.pageNumber = '1';
//     signHere.recipientId = '1';
//     signHere.tabLabel = 'SignHereTab';
//     signHere.xPosition = '200';
//     signHere.yPosition = '200';

//     signer.tabs = new docusign.Tabs();
//     signer.tabs.signHereTabs = [signHere];

//     envDef.recipients = new docusign.Recipients();
//     envDef.recipients.signers = [signer];

//     envDef.status = 'sent';

//     try {
//       const envelopesApi = new docusign.EnvelopesApi(dsApiClient);
//       const results = await envelopesApi.createEnvelope(docusignConfig.accountId, { envelopeDefinition: envDef });

//       res.status(200).json({
//         success: true,
//         envelopeId: results.envelopeId,
//         message: "Documento enviado para assinatura com sucesso!"
//       });
//     } catch (error) {
//       console.error('Error creating envelope:', error);
//       res.status(500).json({
//         success: false,
//         message: "Erro ao enviar o documento para assinatura.",
//         error: error.message
//       });
//     }
//   } else {
//     res.status(405).json({ message: 'Método não permitido' });
//   }
// }

// // Verifique os campos do handler
// checkFields<Diff<{
//   GET?: Function;
//   HEAD?: Function;
//   OPTIONS?: Function;
//   POST?: Function;
// }, 'handler'>>({
//   POST: handler
// });