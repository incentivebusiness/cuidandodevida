// lib/docusignConfig.js

export const docusignConfig = {
  dsJWTClientId: process.env.DS_JWT_CLIENT_ID || docusignConfigJson.dsJWTClientId,
  impersonatedUserGuid: process.env.DS_IMPERSONATED_USER_GUID || docusignConfigJson.impersonatedUserGuid,
  privateKeyLocation: process.env.DS_PRIVATE_KEY_LOCATION || docusignConfigJson.privateKeyLocation,
  dsOauthServer: process.env.DS_OAUTH_SERVER || docusignConfigJson.dsOauthServer,
  oAuthBasePath: process.env.OAUTH_BASEPATH || docusignConfigJson.oAuthBasePath,
};
