// lib/docusignConfig.js

export const docusignConfig = {
  dsJWTClientId: process.env.DS_JWT_CLIENT_ID || docusignConfigJson.dsJWTClientId,
  impersonatedUserGuid: process.env.DS_IMPERSONATED_USER_GUID || docusignConfigJson.impersonatedUserGuid,
  privateKeyLocation: process.env.DS_PRIVATE_KEY_LOCATION || docusignConfigJson.privateKeyLocation,
  dsOauthServer: process.env.DS_OAUTH_SERVER || docusignConfigJson.dsOauthServer,
  oAuthBasePath: process.env.OAUTH_BASEPATH || docusignConfigJson.oAuthBasePath,
};
// DOCUSIGN_INTEGRATION_KEY=your_integration_key
// DOCUSIGN_USER_ID=your_user_id
// DOCUSIGN_ACCOUNT_ID=your_account_id
// DOCUSIGN_TEMPLATE_ID=your_template_id
// DOCUSIGN_PK=your_private_key_base64
// OAUTH_BASEPATH=account-d.docusign.com
