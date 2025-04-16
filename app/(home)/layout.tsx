import { NavbarDemo } from "@/components/home/navbar";
import ReactLenis from "lenis/react";
import EndSlider from "@/components/home/comeagain";
import CTA from "@/components/home/cta";
import Faqs from "@/components/home/faq";
import Footer from "@/components/home/footer";

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
