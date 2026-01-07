import Advertisement from '@/components/important/Advertisement';
import Features from '@/components/home/features';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/hero';
import Testimonials from '@/components/home/testimonials';

export default function Homepage() {
  return (
    <>
      {/* <Advertisement /> */}
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
    </>
  );
}
