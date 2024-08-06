import * as docusign from "docusign-esign";
import { getDocusignClient } from "./docusignClient";

type CreateEnvelopeParams = {
  signerEmail: string;
  signerName: string;
  templateId: string;
  clientUserId: string;
  dsReturnUrl: string;
};

export const createEmbeddedFormFromTemplate = async ({
  signerEmail,
  signerName,
  templateId,
  clientUserId,
  dsReturnUrl,
}: CreateEnvelopeParams) => {
  const dsApiClient = await getDocusignClient();
  const envelopesApi = new docusign.EnvelopesApi(dsApiClient);

  const envelopeDefinition: docusign.EnvelopeDefinition = {
    templateId: templateId,
    templateRoles: [
      {
        email: signerEmail,
        name: signerName,
        roleName: "Client",
        clientUserId: clientUserId,
      } as docusign.TemplateRole,
    ],
    status: "sent",
  };

  const envelopeSummary = await envelopesApi.createEnvelope(
    process.env.DOCUSIGN_ACCOUNT_ID!,
    { envelopeDefinition }
  );
  console.log(envelopeSummary);
  const envelopeId = envelopeSummary.envelopeId;

  if (!envelopeId) {
    throw new Error("Failed to create envelope");
  }

  const viewRequest: docusign.RecipientViewRequest = {
    returnUrl: dsReturnUrl,
    authenticationMethod: "none",
    email: signerEmail,
    userName: signerName,
    clientUserId: clientUserId,
  };

  const recipientView = await envelopesApi.createRecipientView(
    process.env.DOCUSIGN_ACCOUNT_ID!,
    envelopeId,
    { recipientViewRequest: viewRequest }
  );

  return { envelopeId, formUrl: recipientView.url };
};
