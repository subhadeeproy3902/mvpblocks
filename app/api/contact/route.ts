import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import {
  generateContactAdminEmail,
  generateContactConfirmationEmail,
  type ContactMeta,
} from '@/lib/email';

// Instantiate inside the POST handler or with a fallback to avoid build-time crashes when RESEND_API_KEY is not set.
const getResendClient = () => new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

const FROM = 'Mvpblocks <blocks@mvp-subha.me>';
const ADMIN_EMAIL = 'subha9.5roy350@gmail.com';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('A valid email is required').max(200),
  subject: z.string().trim().max(160).optional(),
  message: z.string().trim().min(10, 'Message is too short').max(5000),
  // Client-collected, best-effort browser context.
  client: z
    .object({
      userAgent: z.string().max(600).optional(),
      language: z.string().max(60).optional(),
      languages: z.string().max(300).optional(),
      timezone: z.string().max(80).optional(),
      screen: z.string().max(40).optional(),
      viewport: z.string().max(40).optional(),
      referrer: z.string().max(500).optional(),
      page: z.string().max(500).optional(),
    })
    .optional(),
});

// Minimal user-agent parser — enough to surface browser / OS / device without a dep.
function parseUserAgent(ua = '') {
  const browser =
    /edg\//i.test(ua)
      ? 'Microsoft Edge'
      : /opr\/|opera/i.test(ua)
        ? 'Opera'
        : /chrome|crios/i.test(ua) && !/edg\//i.test(ua)
          ? 'Chrome'
          : /firefox|fxios/i.test(ua)
            ? 'Firefox'
            : /safari/i.test(ua) && !/chrome|crios/i.test(ua)
              ? 'Safari'
              : 'Unknown browser';

  const os = /windows nt 10/i.test(ua)
    ? 'Windows 10/11'
    : /windows/i.test(ua)
      ? 'Windows'
      : /android/i.test(ua)
        ? 'Android'
        : /iphone|ipad|ipod/i.test(ua)
          ? 'iOS'
          : /mac os x/i.test(ua)
            ? 'macOS'
            : /linux/i.test(ua)
              ? 'Linux'
              : 'Unknown OS';

  const device = /mobile|iphone|ipod|android.*mobile/i.test(ua)
    ? 'Mobile'
    : /ipad|tablet|android(?!.*mobile)/i.test(ua)
      ? 'Tablet'
      : 'Desktop';

  return { browser, os, device };
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message, client } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set — cannot send contact emails');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 503 },
      );
    }

    const resend = getResendClient();

    // ── Server-derived request context ──────────────────────────────────────
    const headers = req.headers;
    const ip =
      headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      headers.get('x-real-ip') ||
      headers.get('cf-connecting-ip') ||
      'Unknown';

    const city = headers.get('x-vercel-ip-city');
    const region = headers.get('x-vercel-ip-country-region');
    const country = headers.get('x-vercel-ip-country');

    const ua = client?.userAgent || headers.get('user-agent') || '';
    const { browser, os, device } = parseUserAgent(ua);

    const meta: ContactMeta = {
      ip,
      city: city ? decodeURIComponent(city) : undefined,
      region: region || undefined,
      country: country || undefined,
      userAgent: ua,
      browser,
      os,
      device,
      language: client?.language,
      languages: client?.languages,
      timezone: client?.timezone,
      screen: client?.screen,
      viewport: client?.viewport,
      referrer: client?.referrer,
      page: client?.page,
      submittedAt: new Date().toUTCString(),
    };

    // ── Send both emails ────────────────────────────────────────────────────
    const [adminResult, confirmResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `📬 New contact${subject ? `: ${subject}` : ''} — from ${name}`,
        html: generateContactAdminEmail({ name, email, subject, message, meta }),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: "Thanks for reaching out to MVPBlocks 👋 We've got your message",
        html: generateContactConfirmationEmail({ name, subject, message }),
      }),
    ]);

    // The admin notification is the critical one — fail the request only if it
    // didn't go out. The confirmation is best-effort.
    if (adminResult.status === 'rejected') {
      console.error('Admin contact email failed:', adminResult.reason);
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again.' },
        { status: 502 },
      );
    }

    if (confirmResult.status === 'rejected') {
      console.warn('Contact confirmation email failed:', confirmResult.reason);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
