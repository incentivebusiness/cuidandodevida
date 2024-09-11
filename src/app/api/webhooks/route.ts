
import { NextRequest, NextResponse } from 'next/server';
import { updateUserDocumentSignedByEmail } from '../../../lib/user'; // Atualize o caminho conforme necessário

export async function POST(req: NextRequest) {
  try {
    // Pega o corpo da requisição
    const payload = await req.json();
    
    // Log para depuração
    console.log('Recebido payload:', JSON.stringify(payload, null, 2));
    console.log('Event:', payload.event);
    console.log('Data:', payload.data);
    console.log('Recipients:', payload.data?.envelopeSummary?.recipients);
    console.log('Signers:', payload.data?.envelopeSummary?.recipients?.signers);

    // Verifica se o evento é 'recipient-completed'
    if (payload.event === 'recipient-completed') {
      const recipients = payload.data?.envelopeSummary?.recipients;
      if (recipients && recipients.signers && recipients.signers.length > 0) {
        const signers = recipients.signers;

        // Itera sobre cada signatário e atualiza o status de assinatura
        for (const signer of signers) {
          if (signer.email) {
            try {
              // Atualiza o banco de dados para marcar o documento como assinado
              await updateUserDocumentSignedByEmail(signer.email);
              console.log(`Documento marcado como assinado para o email: ${signer.email}`);
            } catch (error) {
              console.error(`Erro ao atualizar o status para o email ${signer.email}:`, error);
            }
          } else {
            console.log('Email do signatário não encontrado');
          }
        }
        
        return NextResponse.json({ message: 'Documentos marcados como assinados com sucesso' });
      } else {
        return NextResponse.json({ message: 'Signatários não encontrados' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ message: 'Evento desconhecido' }, { status: 400 });
    }
  } catch (error) {
    console.error('Erro ao processar o payload:', error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}
