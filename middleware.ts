import { launched } from "@/config/site";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Prevent redirect loops and API calls from being redirected
  if (!launched && pathname !== "/waitlist") {
    return NextResponse.redirect(new URL("/waitlist", request.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|static|favicon.ico).*)",
};
