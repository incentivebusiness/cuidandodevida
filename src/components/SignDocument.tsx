'use client';
import { createEmbeddedFormFromTemplate } from "@/lib/docusign/template";

export async function SignDocument() {
  const result = await createEmbeddedFormFromTemplate({
    signerEmail: "client@test.com",
    signerName: "Test Client",
    templateId: "123c12ab-1234-1234-1234-123abc123abc", // Template ID copiado do console DocuSign
    clientUserId: "unique-id-123-you-should-use-a-value-from-your-db",
    dsReturnUrl: "https://your-website.com/success",
  });

  return <iframe src={result.formUrl} className="w-full h-[100vh]" />;
}

export default SignDocument;
