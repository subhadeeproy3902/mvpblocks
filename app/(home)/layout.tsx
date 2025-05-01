import { NavbarDemo } from "@/components/shared/navbar";
import ReactLenis from "lenis/react";
import EndSlider from "@/components/shared/comeagain";
import Footer from "@/components/shared/footer";
import { siteConfig } from "@/config/site";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <NavbarDemo />
      {children}
      <EndSlider />
      <Footer />{" "}
      <Script id="json-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "description": siteConfig.description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteConfig.url}/docs/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "creator": {
            "@type": "Individual",
            "name": "Subhadeep Roy",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteConfig.url}/logo.webp`
            },
            "sameAs": [
              siteConfig.links.twitter,
              siteConfig.links.github
            ]
          }
        })}
      </Script>
    </ReactLenis>
  );
}
