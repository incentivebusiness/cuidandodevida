import { NextRequest, NextResponse } from 'next/server';
import { createEnvelope } from '@/lib/docusignEnvelope';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company } = await request.json();

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    //console.log({ name, email, company });

    const formUrl = await createEnvelope({ name, email, company });
    //console.log('Form URL:', formUrl);

    return NextResponse.json({ url: formUrl });

  } catch (error) {
    console.error('Error creating envelope:', error);
    
    return NextResponse.json({ error: 'Failed to create envelope' }, { status: 500 });
  }
}
