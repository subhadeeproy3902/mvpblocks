'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NavbarButton } from '../ui/resizable-navbar';

interface PricingCardProps {
  plan: {
    title: string;
    price: string;
    period: string;
    popular: boolean;
    features: string[];
    disabled: string[];
  };
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative flex flex-col w-full lg:w-96 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
        plan.popular ? 'border-b-red-400 scale-105' : 'border-b-red-400'
      )}
    >
      {/* Popular Badge */}
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
          <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text from-gray-300 via-gray-400 to-gray-600 text-transparent mb-2">
            {plan.title}
          </h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold">{plan.price}</span>
            <span className="text-lg ml-1">{plan.period}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
            {plan.disabled.map((feature, i) => (
              <li key={`disabled-${i}`} className="flex items-start opacity-50">
                <svg
                  className="w-5 h-5 text-gray-200 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-200 text-sm leading-relaxed line-through">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-auto">
          <NavbarButton
            variant="gradient"
            className={cn(
              'w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200',
              plan.popular
                ? 'text-white hover:scale-105 hover:shadow-lg hover:shadow-[rgba(255,182,193,0.4)_0px_10px_20px_-5px]'
                : 'text-white hover:scale-105 hover:shadow-lg hover:shadow-[rgba(255,182,193,0.4)_0px_10px_20px_-5px]'
            )}
          >
            Get Started
          </NavbarButton>
          <p className="text-center text-white text-xs mt-3">No setup fee • Cancel anytime</p>
        </div>
      </div>
    </motion.div>
  );
}
