import { NavbarDemo } from "@/components/shared/navbar";
import ReactLenis from "lenis/react";
import EndSlider from "@/components/shared/comeagain";
import CTA from "@/components/shared/cta";
import Faqs from "@/components/shared/faq";
import Footer from "@/components/shared/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <NavbarDemo />
      {children} <CTA />
      <Faqs />
      <EndSlider />
      <Footer />{" "}
    </ReactLenis>
  );
}
