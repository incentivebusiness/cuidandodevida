// lib/getAccessToken.js
import * as docusign from "docusign-esign";
import { docusignConfig } from "./docusignConfig";

export async function getAccessToken() {
  const dsApiClient = new docusign.ApiClient();
  dsApiClient.setOAuthBasePath(docusignConfig.oAuthBasePath);

  const results = await dsApiClient.requestJWTUserToken(
    docusignConfig.integratorKey,
    docusignConfig.userId,
    docusignConfig.oAuthBasePath,
    Buffer.from(docusignConfig.privateKey).toString('base64'),
    ['signature'],
    3600
  );

  return results.body.access_token;
}
