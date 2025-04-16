import Features from "@/components/home/features";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import { Testimonials } from "@/components/home/testimonials";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
    </>
  );
}
