import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent')?.toLowerCase() || '';
  const path = req.nextUrl.pathname;

  // Paths to protect from bots
  const protectedPaths = [
    '/preview/',
    '/docs/',
    '/api/',
    '/_next/',
    '/about',
    '/privacy',
    '/terms',
    '/showcase',
  ];

  // Block known bots/crawlers
  const isProtected = protectedPaths.some(p => path.startsWith(p));
  if (isProtected) {
    if (ua.includes('bot') || ua.includes('crawler') || ua.includes('spider')) {
      return new NextResponse('Blocked', { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/preview/:path*',
    '/docs/:path*',
    '/api/:path*',
    '/_next/:path*',
    '/about',
    '/privacy',
    '/terms',
  ],
};
