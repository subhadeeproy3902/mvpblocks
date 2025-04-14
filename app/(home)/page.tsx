import EndSlider from "@/components/home/comeagain";
import CTA from "@/components/home/cta";
import Faqs from "@/components/home/faq";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import { NavbarDemo } from "@/components/home/navbar";
import { Testimonials } from "@/components/home/testimonials";

export default function Homepage() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Faqs />
      <EndSlider />
      <Footer />
    </>
  );
}
