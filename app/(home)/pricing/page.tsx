'use client';


import { Spotlight } from '@/components/ui/spotlight';
import { Geist } from 'next/font/google';
import PricingCard from '@/components/pricing/PricingCard';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-2 py-32 md:px-6">
      <Spotlight />
     <div className="flex justify-center items-center min-h-screen">
      <PricingCard />
    </div>
    </div>
  );
}
