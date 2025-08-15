import arcjet, { createMiddleware, detectBot } from "@arcjet/next";

export const config = {
  matcher: [
    // Match everything except Next.js internals and static assets in /public
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
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
