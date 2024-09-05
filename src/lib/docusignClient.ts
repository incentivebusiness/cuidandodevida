// import * as docusign from 'docusign-esign';
// import fs from 'fs';
// import path from 'path';

// export const getDocusignClient = async () => {
//   console.log('Entering getDocusignClient function');
//   const apiClient = new docusign.ApiClient();
//   apiClient.setBasePath(process.env.DOCUSIGN_BASE_PATH!);
//   //const privateKey = fs.readFileSync(path.join(__dirname, "private.key"));
//   const privateKey = fs.readFileSync(path.resolve(process.env.DOCUSIGN_PK!));
//   const scopes = ["signature"];
//   console.log('Integration Key:', process.env.DOCUSIGN_INTEGRATION_KEY);
//   console.log('User ID:', process.env.DOCUSIGN_USER_ID);
//   console.log('Scopes:', scopes);
//   console.log('Private Key:', privateKey.toString('utf8'));

//   try {
//     const results = await apiClient.requestJWTUserToken(
//       process.env.DOCUSIGN_INTEGRATION_KEY!,
//       process.env.DOCUSIGN_USER_ID!,
//       scopes,
//       privateKey,
//       4600
//     );
    
//     console.log(results.body);
//     const accessToken = results.body.access_token;
//     apiClient.addDefaultHeader("Authorization", `Bearer ${accessToken}`);

//     return new docusign.EnvelopesApi(apiClient);
//   } catch (error) {
//     console.error('Error obtaining access token:', error);
//     throw error;
//   }
// };
// //https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=31d32bc7-4776-40c3-91d5-541bcfa57c0c&redirect_uri=http://localhost:3000/
import * as docusign from 'docusign-esign';
import axios from 'axios';  // Importar axios para fazer a chamada HTTP
import fs from 'fs';
import path from 'path';

export const getDocusignClient = async () => {
  console.log('Entering getDocusignClient function');
  
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(process.env.DOCUSIGN_BASE_PATH!);
  
  const privateKeyPath = path.resolve(process.env.DOCUSIGN_PK!);
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
  
  // Aqui você deve ter gerado o JWT manualmente e o armazenado em uma variável
  const jwtToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlMjg1ODM5ZC01MGYxLTQ1ZGEtOWM5Mi1hMTJiZGY2NTFiMWEiLCJzdWIiOiJjMjZkNTQzYy1hZTUyLTQxOWItYjg0Yy04YTIyOTZkNmE3ZTYiLCJhdWQiOiJhY2NvdW50LWQuZG9jdXNpZ24uY29tIiwiaWF0IjoxNzI1NTU5MjAwLCJleHAiOjE3MjU1NjY0MDAsInNjb3BlcyI6InNpZ25hdHVyZSJ9.D4xFaLJIXdUip-D2Hp2IEnY2grCBwGzf2P7jXKGG7xa0Sq2XIF9LvB27C3XxI9oLRXdQu6-7mqFbIcOMc4ybtgRSsL6AkNHWx5TvIr_Kxepijbr5Z2zVraSP343hpiL9G9FQoPTE3DBdQcPfTLuA1TD7rhewMePEPNRiNE-rrFiHNYKP7fvJZEWKgvE2VQwb9PeZfRyPMpJAVpkgi9qDHrbO33JJ0VuZZQB0XUbISkcmklWZwBj4jHN-XQX4GRT7i50Awbr9VAkk4cHlH5CVfJJjdaMMGtWjzfRzOUe3Amunmu1gS5rsND_jOWu_xiM5X_cuyKvx8qJlZtlBO42axQ';  // Substitua pelo seu JWT gerado manualmente

  try {
    // Fazer a chamada HTTP para obter o token de acesso usando o JWT
    const response = await axios.post(
      'https://account-d.docusign.com/oauth/token',  // Use o endpoint correto (sandbox ou produção)
      new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwtToken
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    );
    
    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);
    
    apiClient.addDefaultHeader('Authorization', `Bearer ${accessToken}`);
    return new docusign.EnvelopesApi(apiClient);
  } catch (error) {
    console.error('Error obtaining access token:', error);
    throw error;
  }
};
