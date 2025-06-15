'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'paypal',
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
    description: 'Pay with your PayPal account',
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s',
    description: 'Pay with credit card',
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    logo: 'https://cdn.prod.website-files.com/62979cdcff90ad6bae40b3ef/62d855876f4add6e152a5567_unnamed.png',
    description: 'Pay with Indian payment methods',
  },
];

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: number;
    period: string;
  };
}

export function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('stripe');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Simulated payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:max-w-[500px]">
        <DialogHeader className="border-b p-6">
          <DialogTitle className="text-xl font-medium">
            Choose payment method
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 p-6">
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-zinc-400">
                Selected plan
              </h3>
              <div className="text-right">
                <div className="text-sm font-medium">{plan.name}</div>
                <div className="text-2xl font-bold">
                  €{plan.price}
                  <span className="text-sm text-zinc-400">/{plan.period}</span>
                </div>
              </div>
            </div>
            <RadioGroup
              value={selectedMethod}
              onValueChange={setSelectedMethod}
              className="grid gap-4"
            >
              {paymentMethods.map((method) => (
                <Label
                  key={method.id}
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 transition-colors',
                    selectedMethod === method.id ? 'border-primary' : 'border',
                  )}
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem
                      value={method.id}
                      className="border-zinc-700"
                    />
                    <div className="space-y-1">
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-zinc-400">
                        {method.description}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-8 w-20">
                    <img
                      src={method.logo || '/placeholder.svg'}
                      alt={method.name}
                      className="object-contain"
                    />
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Continue to payment'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
