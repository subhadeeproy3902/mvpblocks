import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateThankYouEmail } from '@/lib/email';

// Instantiate inside the POST handler or with a fallback to avoid build-time crashes when RESEND_API_KEY is not set.
const getResendClient = () => new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      paymentId,
      orderId,
      productId,
      amount,
      currency,
      downloadUrl,
      autoDownload,
    } = await req.json();

    const html = generateThankYouEmail({
      orderId,
      paymentId,
      productName: productId ?? 'Template',
      downloadUrl: downloadUrl,
      amount: amount,
      currency: currency,
      autoDownload: autoDownload ?? true,
    });

    const resend = getResendClient();
    await resend.emails.send({
      from: 'Mvpblocks <blocks@mvp-subha.me>',
      to: email,
      subject: 'Thanks for the purchase. Here is your Download Link 🎉',
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
