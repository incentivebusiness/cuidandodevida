import * as docusign from 'docusign-esign';
import fs from 'fs';
import path from 'path';

export const getDocusignClient = async () => {
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(process.env.DOCUSIGN_BASE_PATH!);

  const privateKey = fs.readFileSync(path.resolve(process.env.DOCUSIGN_PK!));
  const scopes = ["signature"];

  try {
    const results = await apiClient.requestJWTUserToken(
      process.env.DOCUSIGN_INTEGRATION_KEY!,
      process.env.DOCUSIGN_USER_ID!,
      scopes,
      privateKey,
      3600
    );

    const accessToken = results.body.access_token;
    apiClient.addDefaultHeader("Authorization", `Bearer ${accessToken}`);

    return apiClient;
  } catch (error) {
    console.error('Error obtaining access token:', error);
    throw error;
  }
};
