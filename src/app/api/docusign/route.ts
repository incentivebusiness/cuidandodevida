
import path from "path";
import fs from "fs";
import { promisify } from "util";
import { ApiClient, EnvelopesApi } from "docusign-esign";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const readFileAsync = promisify(fs.readFile);

async function checkToken(req: any, res: any) {
  const { access_token, expires_at } = req.cookies;

  if (access_token && Date.now() < expires_at) {
    console.log("Token de acesso existente:", access_token);
    return access_token;
  } else {
    let dsApiClient = new ApiClient();
    dsApiClient.setBasePath(process.env.BASE_PATH!);

    const privateKeyPath = path.join(process.cwd(), "private.key");
    const privateKeyBuffer = await readFileAsync(privateKeyPath);
    const privateKey = privateKeyBuffer.toString("utf8");

    console.log("Solicitando novo token de acesso...");
    const results = await dsApiClient.requestJWTUserToken(
      process.env.DOCUSIGN_INTEGRATION_KEY!,
      process.env.DOCUSIGN_USER_ID!,
      ["signature"],
      privateKey as any,
      3600
    );

    const newAccessToken = results.body.access_token;
    const expiresAt = Date.now() + (results.body.expires_in - 60) * 1000;

    console.log("Novo Token de Acesso:", newAccessToken);
    console.log("Expira em:", new Date(expiresAt));

    cookies().set("access_token", newAccessToken);
    cookies().set("expires_at", expiresAt.toString());

    return newAccessToken;
  }
}

function getEnvelopesApi(token: any) {
  let dsApiClient = new ApiClient();
  dsApiClient.setBasePath(process.env.BASE_PATH!);
  dsApiClient.addDefaultHeader("Authorization", "Bearer " + token);
  return new EnvelopesApi(dsApiClient);
}

async function makeEnvelope(
  name: string,
  email: string,
  envelopesApi: any
) {
  console.log("Criando envelope para:", { name, email });

  const envelopeDefinition = {
    status: "sent",
    templateId: process.env.TEMPLATE_ID!,
    templateRoles: [
      {
        email: email,
        name: name,
        roleName: "Applicant",
        clientUserId: process.env.CLIENT_USER_ID!,
        tabs: {
          textTabs: [
            {
              tabLabel: "nome",
              value: name,
            },
            {
              tabLabel: "email",
              value: email,
            },
          ],
        },
      },
    ],
  };

  const envelopeResults = await envelopesApi.createEnvelope(
    process.env.ACCOUNT_ID!,
    { envelopeDefinition }
  );

  console.log("Envelope criado com sucesso:", envelopeResults);
  return envelopeResults;
}

function makeRecipientViewRequest(name: string, email: string) {
  return {
    returnUrl: "http://localhost:3000/success",
    authenticationMethod: "none",
    email: email,
    userName: name,
    clientUserId: process.env.CLIENT_USER_ID!,
  };
}

export async function POST(req: any, res: any) {
  try {
    const token = await checkToken(req, res);

    const { name, email } = await req.json();
    console.log("Dados recebidos da requisição:", { name, email });

    let envelopesApi = getEnvelopesApi(token);
    let envelope = await makeEnvelope(name, email, envelopesApi);
    
    let viewRequest = makeRecipientViewRequest(name, email);
    
    // Criar a visualização do destinatário
    let viewResults = await envelopesApi.createRecipientView(
      process.env.ACCOUNT_ID!,
      envelope.envelopeId,
      { recipientViewRequest: viewRequest }
    );

    console.log("URL da visualização do destinatário:", viewResults.url);

    return NextResponse.json({
      message: "Envelope criado com sucesso!",
      url: viewResults.url,
      envelopeId: envelope.envelopeId,
    });
  } catch (error) {
    console.error("Erro ao criar envelope:", error);
    return res.status(500).json({ error: error || "Erro desconhecido" });
  }
}



//----------------------------------------------------------------------
// import path from "path";
// import fs from "fs";
// import { promisify } from "util";
// import { ApiClient, EnvelopesApi } from "docusign-esign";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// const readFileAsync = promisify(fs.readFile);

// async function checkToken(req: any) {
//   const { access_token, expires_at } = req.cookies;

//   if (access_token && Date.now() < expires_at) {
//     console.log("Token de acesso existente:", access_token);
//     return access_token;
//   } else {
//     let dsApiClient = new ApiClient();
//     dsApiClient.setBasePath(process.env.BASE_PATH!);

//     const privateKeyPath = path.join(process.cwd(), "private.key");
//     const privateKeyBuffer = await readFileAsync(privateKeyPath);
//     const privateKey = privateKeyBuffer.toString("utf8");

//     console.log("Solicitando novo token de acesso...");
//     const results = await dsApiClient.requestJWTUserToken(
//       process.env.DOCUSIGN_INTEGRATION_KEY!,
//       process.env.DOCUSIGN_USER_ID!,
//       ["signature"],
//       privateKey,
//       3600
//     );

//     const newAccessToken = results.body.access_token;
//     const expiresAt = Date.now() + (results.body.expires_in - 60) * 1000;

//     console.log("Novo Token de Acesso:", newAccessToken);
//     console.log("Expira em:", new Date(expiresAt));

//     cookies().set("access_token", newAccessToken);
//     cookies().set("expires_at", expiresAt.toString());

//     return newAccessToken;
//   }
// }

// function getEnvelopesApi(token: any) {
//   let dsApiClient = new ApiClient();
//   dsApiClient.setBasePath(process.env.BASE_PATH!);
//   dsApiClient.addDefaultHeader("Authorization", "Bearer " + token);
//   return new EnvelopesApi(dsApiClient);
// }

// async function makeEnvelope(data: any, envelopesApi: EnvelopesApi) {
//   console.log("Criando envelope com dados:", data);

//   const envelopeDefinition = {
//     status: "sent",
//     templateId: process.env.TEMPLATE_ID!,
//     templateRoles: [
//       {
//         email: data.email,
//         name: data.fullName,
//         roleName: "Applicant",
//         clientUserId: process.env.CLIENT_USER_ID!,
//         tabs: {
//           textTabs: [
//             { tabLabel: "nomecompleto", value: data.fullName },
//             { tabLabel: "nomesocial", value: data.socialName },
//             { tabLabel: "cpf", value: data.cpf },
//             { tabLabel: "datanascimento", value: data.birthDate },
//             { tabLabel: "telefone", value: data.phone },
//             { tabLabel: "profissao", value: data.salaryRange },
//             { tabLabel: "nacionalidade", value: data.nationality },
//             { tabLabel: "estado_civil", value: data.maritalStatus },
//             { tabLabel: "sexo", value: data.gender },
//             { tabLabel: "profissao", value: data.profession },
//             { tabLabel: "endereco", value: data.address },
//             { tabLabel: "bairro", value: data.neighborhood },
//             { tabLabel: "cidade", value: data.city },
//             { tabLabel: "uf", value: data.uf },
//             { tabLabel: "cep", value: data.zipCode },
//             { tabLabel: "email", value: data.email },
//             { tabLabel: "envioemail", value: data.emailAuthorization },
//             { tabLabel: "politicamenteexposto", value: data.politicallyExposed },
//             { tabLabel: "local", value: data.location },
//             { tabLabel: "dataassinatura", value: data.date },
//             { tabLabel: "cpf", value: data.cpf },
//             { tabLabel: "beneficiario-1", value: data.cpf },
//             { tabLabel: "parentesco-1", value: data.cpf },
//             { tabLabel: "participacao-1", value: data.cpf },
//             { tabLabel: "beneficiario-2", value: data.cpf },
//             { tabLabel: "parentesco-2", value: data.cpf },
//             { tabLabel: "participacao-3", value: data.cpf },
//             { tabLabel: "beneficiario", value: data.cpf },
//             { tabLabel: "parentesco-3", value: data.cpf },
//             { tabLabel: "participacao-3", value: data.cpf },
//           ],
//         },
//       },
//     ],
//   };

  

//   const envelopeResults = await envelopesApi.createEnvelope(
//     process.env.ACCOUNT_ID!,
//     { envelopeDefinition }
//   );

//   console.log("Envelope criado com sucesso:", envelopeResults);
//   return envelopeResults;
// }

// function makeRecipientViewRequest(data:any) {
//   return {
//     returnUrl: "http://localhost:3000/success",
//     authenticationMethod: "none",
//     email: data.email,
//     userName: data.fullName,
//     clientUserId: process.env.CLIENT_USER_ID!,
//   };
// }

// export async function POST(req:any) {
//   try {
//     const token = await checkToken(req);

//     const data = await req.json();
//     console.log("Dados recebidos da requisição:", data);

//     let envelopesApi = getEnvelopesApi(token);
//     let envelope = await makeEnvelope(data, envelopesApi);

//     let viewRequest = makeRecipientViewRequest(data);

//     // Criar a visualização do destinatário
//     let viewResults = await envelopesApi.createRecipientView(
//       process.env.ACCOUNT_ID!,
//       envelope.envelopeId,
//       { recipientViewRequest: viewRequest }
//     );

//     console.log("URL da visualização do destinatário:", viewResults.url);

//     return NextResponse.json({
//       message: "Envelope criado com sucesso!",
//       url: viewResults.url,
//       envelopeId: envelope.envelopeId,
//     });
//   } catch (error) {
//     console.error("Erro ao criar envelope:", error);
//     return NextResponse.json({ error: error || "Erro desconhecido" }, { status: 500 });
//   }
// }
