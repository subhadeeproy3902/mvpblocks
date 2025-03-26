import { launched } from "@/config/site";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // If launched is false, redirect all requests to /prelaunch
  if (!launched) {
    return NextResponse.redirect(new URL("/prelaunch", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/(.*)", // Apply middleware to all routes
};
