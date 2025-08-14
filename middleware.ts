import arcjet, { createMiddleware, detectBot } from "@arcjet/next";

export const config = {
  matcher: [
    // Match everything except Next.js internals and static assets in /public
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|txt|xml|json)).*)",
  ],
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // allow Google, Bing, etc.
      ],
    }),
  ],
});

export default createMiddleware(aj);
