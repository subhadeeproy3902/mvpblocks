import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent')?.toLowerCase() || '';
  const path = req.nextUrl.pathname;

  // Paths to protect from bots
  const protectedPaths = [
    '/preview',
    '/docs',
    '/api',
    '/about',
    '/privacy',
    '/terms',
    '/showcase',
    '/404'
  ];

  const isProtected = protectedPaths.some((p) => path.startsWith(p));

  if (isProtected) {
    if (ua.includes('bot') || ua.includes('crawler') || ua.includes('spider')) {
      return new NextResponse('Blocked', { status: 403 });
    }
  }

  return NextResponse.next();
}

// Only run middleware for non-static application routes
export const config = {
  matcher: [
    // Match all paths except _next, static assets, files with .ext, etc.
    '/((?!_next|static|.*\\..*).*)',
  ],
};
