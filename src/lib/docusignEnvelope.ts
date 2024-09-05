import * as docusign from 'docusign-esign';
import { getDocusignClient } from './docusignClient';

type CreateEnvelopeParams = {
  name: string;
  email: string;
  company: string;
};

export const createEnvelope = async ({ name, email, company }: CreateEnvelopeParams) => {
  console.log("sharingan");
  const dsApiClient = await getDocusignClient();
  console.log("ideal",dsApiClient);
  const envelopesApi = new docusign.EnvelopesApi(dsApiClient);

  const envelopeDefinition: docusign.EnvelopeDefinition = {
    templateId: process.env.DOCUSIGN_TEMPLATE_ID!,
    templateRoles: [
      {
        email: email,
        name: name,
        roleName: "Applicant",
        clientUserId: process.env.DOCUSIGN_CLIENT_USER_ID!,
      } as docusign.TemplateRole,
    ],
    status: "sent",
    customFields: {
      textCustomFields: [
        {
          name: "company_name",
          value: company,
          show: "true"
        }
      ]
    }
  };

  try {
    const envelopeSummary = await envelopesApi.createEnvelope(
      process.env.DOCUSIGN_ACCOUNT_ID!,
      { envelopeDefinition }
    );
    
    console.log('Envelope created successfully:', envelopeSummary);

    const envelopeId = envelopeSummary.envelopeId;
    if (!envelopeId) throw new Error('Failed to create envelope');

  const viewRequest: docusign.RecipientViewRequest = {
    returnUrl: "http://localhost:3000/success",
    authenticationMethod: "none",
    email: email,
    userName: name,
    clientUserId: process.env.DOCUSIGN_CLIENT_USER_ID!,
  };

  const recipientView = await envelopesApi.createRecipientView(
    process.env.DOCUSIGN_ACCOUNT_ID!,
    envelopeId,
    { recipientViewRequest: viewRequest }
  );

  return recipientView.url;
} catch (error) {
    console.error('Error creating envelope or recipient view:', error);
    throw error;
  }
};
