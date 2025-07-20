'use client';

import Advertisement from '@/components/Advertisement';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Gallery = dynamic(() => import('@/components/home/gallery'), {
  ssr: false,
});

const Testimonials = dynamic(() => import('@/components/home/testimonials'), {
  ssr: false,
});
const CTA = dynamic(() => import('@/components/shared/cta'), {
  ssr: false,
});
const Faqs = dynamic(() => import('@/components/shared/faq'));

export default function Homepage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {show && <Advertisement setShow={setShow} />}
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Faqs />
    </>
  );
}
