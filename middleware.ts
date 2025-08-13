// middleware.ts
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
    '/terms',
    '/privacy',
    '/contact',
    '/404',
  ];

  // If path starts with any of these, block bad bots
  if (protectedPaths.some(p => path.startsWith(p))) {
    if (
      ua.includes('bot') ||
      ua.includes('crawler') ||
      ua.includes('spider') ||
      ua.includes('curl') ||
      ua.includes('wget') ||
      ua.includes('python') ||
      ua.includes('scrapy')
    ) {
      return new NextResponse('Access denied', { status: 403 });
    }
  }

  return NextResponse.next();
}
