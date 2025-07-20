import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateThankYouEmail } from '@/lib/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, paymentId, orderId, productId, amount, currency } =
      await req.json();

    const html = generateThankYouEmail({
      orderId,
      paymentId,
      productName: productId ?? 'Template',
      downloadUrl: process.env.DEVELOPER_PORTFOLIO_DOWNLOAD_URL!,
      amount: amount,
      currency: currency,
    });

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
