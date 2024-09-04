import docusign from 'docusign-esign';
import fs from 'fs';
import path from 'path';
import { getSession } from 'next-auth/react';

async function checkToken(req) {
    const session = await getSession({ req });

    if (session?.access_token && Date.now() < session.expires_at) {
        console.log("Re-using access_token", session.access_token);
        return session.access_token;
    } else {
        try {
            console.log("Generating a new access token");
            let dsApiClient = new docusign.ApiClient();
            dsApiClient.setBasePath(process.env.BASE_PATH);
            const privateKey = fs.readFileSync(path.join(process.cwd(), "private.key"));

            const results = await dsApiClient.requestJWTUserToken(
                process.env.INTEGRATION_KEY,
                process.env.USER_ID,
                "signature",
                privateKey,
                3600
            );
            const { access_token, expires_in } = results.body;

            session.access_token = access_token;
            session.expires_at = Date.now() + (expires_in - 60) * 1000;

            console.log("New access token generated", access_token);

            return session.access_token;
        } catch (error) {
            console.error("Error generating new access token", error);
            throw new Error("Failed to generate a new access token");
        }
    }
}

export async function POST(req, res) {
    try {
        const accessToken = await checkToken(req);

        if (!accessToken) {
            throw new Error("Access token is null or undefined");
        }

        let dsApiClient = new docusign.ApiClient();
        dsApiClient.setBasePath(process.env.BASE_PATH);
        dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken);

        let envelopesApi = new docusign.EnvelopesApi(dsApiClient);
        let envelope = makeEnvelope(req.body.name, req.body.email, req.body.company);

        let results = await envelopesApi.createEnvelope(process.env.ACCOUNT_ID, { envelopeDefinition: envelope });
        console.log("Envelope results", results);

        let viewRequest = makeRecipientViewRequest(req.body.name, req.body.email);
        results = await envelopesApi.createRecipientView(process.env.ACCOUNT_ID, results.envelopeId, { recipientViewRequest: viewRequest });

        res.redirect(results.url);
    } catch (error) {
        console.error('Error creating envelope:', error);
        res.status(500).json({ error: 'Failed to create envelope', details: error.message });
    }
}

function makeEnvelope(name, email, company) {
    let env = new docusign.EnvelopeDefinition();
    env.templateId = process.env.TEMPLATE_ID;

    let text = docusign.Text.constructFromObject({
        tabLabel: "company_name",
        value: company
    });

    let tabs = docusign.Tabs.constructFromObject({
        textTabs: [text],
    });

    let signer1 = docusign.TemplateRole.constructFromObject({
        email: email,
        name: name,
        tabs: tabs,
        clientUserId: process.env.CLIENT_USER_ID,
        roleName: 'Applicant'
    });

    env.templateRoles = [signer1];
    env.status = "sent";

    return env;
}

function makeRecipientViewRequest(name, email) {
    let viewRequest = new docusign.RecipientViewRequest();
    viewRequest.returnUrl = "http://localhost:3000/success";
    viewRequest.authenticationMethod = 'none';
    viewRequest.email = email;
    viewRequest.userName = name;
    viewRequest.clientUserId = process.env.CLIENT_USER_ID;
    return viewRequest;
}