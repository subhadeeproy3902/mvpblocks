import Advertisement from "@/components/Advertisement";
import Features from "@/components/home/features";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/testimonials";
import CTA from "@/components/shared/cta";
import Faqs from "@/components/shared/faq";
import FooterAnimated from "@/components/mvpblocks/required/footers/FooterAnimated";



// 👇 Import your new block directly
import PricingGlassmorphism from "@/components/mvpblocks/mainsections/pricing/pricing-glassmorphism";

export const dynamic = 'force-static';
export const revalidate = false;

export default function Homepage() {
  return (
    <>
      <Advertisement />
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />

      {/* 👇 Add your new block here */}
      <PricingGlassmorphism />

      <CTA />
      <Faqs />
    </>
  );
}
<FooterAnimated />

