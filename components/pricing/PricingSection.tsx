'use client';

import React from 'react';
import { Geist } from 'next/font/google';
import { Spotlight } from '@/components/ui/spotlight';
import { cn } from '@/lib/utils';
import PricingCard from './PricingCard';
import { motion } from 'framer-motion';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

const plans = [
  {
    title: 'Starter',
    price: '$9',
    period: '/mo',
    popular: false,
    features: ['Basic image generation', '1 style template', 'No batch processing', 'Limited AI enhancement'],
    disabled: ['Cloud integration', 'Collaboration tools'],
  },
  {
    title: 'Premium',
    price: '$29',
    period: '/mo',
    popular: true,
    features: [
      'High-resolution image generation',
      'Customizable style templates',
      'Batch processing capabilities',
      'AI-driven image enhancements',
    ],
    disabled: ['Seamless cloud integration', 'Real-time collaboration tools'],
  },
  {
    title: 'Enterprise',
    price: '$99',
    period: '/mo',
    popular: false,
    features: [
      'Unlimited image generation',
      'Advanced template library',
      'Priority batch processing',
      'Full AI pipeline access',
      'Seamless cloud integration',
      'Real-time collaboration tools',
    ],
    disabled: [],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4 min-h-screen bg-none">
      <Spotlight />
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'from-foreground via-foreground/90 to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text text-4xl tracking-tight text-transparent sm:text-5xl lg:text-6xl',
            space.className
          )}
        >
          Choose Your Plan
          <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text dark:bg-gradient-to-b pl-3 ">
            Select the perfect plan for your creative needs
          </span>
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-6xl mx-auto py-4">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} index={idx} />
        ))}
      </div>

      <div className="text-center mt-15">
        <p className="text-white mb-4">Need a custom solution?</p>
        <button className="text-white hover:text-[#DE2F4F] font-semibold underline cursor-pointer">
          Contact our sales team
        </button>
      </div>
    </section>
  );
}
