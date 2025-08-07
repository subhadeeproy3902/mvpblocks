'use client';
import React from 'react';
import { Geist } from 'next/font/google';
import { Spotlight } from '@/components/ui/spotlight';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { NavbarButton } from '../ui/resizable-navbar';


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
    features: [
      'Basic image generation',
      '1 style template',
      'No batch processing',
      'Limited AI enhancement',
    ],
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

const PricingSection = () => {
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
            space.className,
          )}
        >
          Choose Your Plan
          <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text dark:bg-gradient-to-b pl-3 ">
            Select the perfect plan for your creative needs
          </span>
        </motion.h1>
        {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 text-lg">Select the perfect plan for your creative needs</p> */}
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch max-w-6xl mx-auto py-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col w-full lg:w-96 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
              plan.popular 
                ? 'border-b-red-400 scale-105' 
                : 'border-b-red-400'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#D80040] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-8 flex flex-col h-full">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text from-gray-300 via-gray-400 to-gray-600 text-transparent mb-2">{plan.title}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {plan.disabled.map((feature, index) => (
                    <li
                      key={`disabled-${index}`}
                      className="flex items-start opacity-50"
                    >
                      <svg
                        className="w-5 h-5 text-gray-200 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-200 text-sm leading-relaxed line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">

                <NavbarButton variant="gradient" className={`w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${plan.popular
                  ? ' text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[rgba(255,182,193,0.4)_0px_10px_20px_-5px] shadow-lg'
                  : ' text-whitetransition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[rgba(255,182,193,0.4)_0px_10px_20px_-5px] shadow-lg'
                  }`}>
                  Get Started
                </NavbarButton>
                <p className="text-center text-white text-xs mt-3">
                  No setup fee • Cancel anytime
                </p>
              </div>
            </div>
          </div>
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
};

export default PricingSection;