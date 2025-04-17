import Features from "@/components/home/features";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";
import CTA from "@/components/shared/cta";
import Faqs from "@/components/shared/faq";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Faqs />
    </>
  );
}
