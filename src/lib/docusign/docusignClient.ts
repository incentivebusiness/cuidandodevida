import * as docusign from "docusign-esign";

const oAuth = docusign.ApiClient.OAuth;
const restApi = docusign.ApiClient.RestApi;

export const getDocusignClient = async () => {
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(restApi.BasePath.DEMO);
  apiClient.setOAuthBasePath(oAuth.BasePath.DEMO);

  const privateKey = Buffer.from(process.env.DOCUSIGN_PK!);
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

    console.log("apiClient", apiClient);

    return apiClient;
  } catch (e: any) {
    console.error("docusignClient error", e.code, e.response);
    console.log("errrroooooooooooooooooooooo", e);
  }
};
