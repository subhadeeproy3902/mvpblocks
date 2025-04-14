import CTA from "@/components/home/cta";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import { NavbarDemo } from "@/components/home/navbar";
import { Testimonials } from "@/components/home/testimonials";

export default function Homepage() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
