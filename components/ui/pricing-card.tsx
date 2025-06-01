'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { PaymentModal } from './payment-modal';

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  featured?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  features,
  featured,
}: PricingCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <>
      <div className="relative rounded-lg border border-zinc-800 p-6">
        {featured && (
          <div className="absolute -top-2 right-4 rounded-full bg-black px-3 py-1 text-sm font-medium text-white dark:bg-white dark:text-black">
            Featured
          </div>
        )}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">{name}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-5xl font-bold tracking-tight">
                €{price}
              </span>
              <span className="ml-1 text-sm font-medium text-zinc-400">
                /{period}
              </span>
            </div>
          </div>
          <Button className="w-full" onClick={() => setShowPaymentModal(true)}>
            Get {name}
          </Button>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm text-zinc-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={{ name, price, period }}
      />
    </>
  );
}
