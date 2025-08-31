'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { initiatePayment } from '@/lib/razorpay';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import ThankYou from './ThankYou';
import Image from 'next/image';

interface BuyDialogProps {
  title: string;
  price: number;
  currency: 'INR' | 'USD' | string;
  image: string;
  productId: string;
  downloadUrl: string;
}

export function BuyDialog({
  title,
  price,
  currency,
  image,
  productId,
  downloadUrl,
}: BuyDialogProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Verify email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await initiatePayment({
        email,
        amount: price,
        currency,
        title,
        productId,
        onSuccess: () => {
          setIsDialogOpen(false);
          setShowThankYou(true);
        },
        downloadUrl: downloadUrl,
      });
    } catch (err) {
      console.error('Checkout error:', err);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Buy Now {currencySymbol(currency)}
            {price}
          </Button>
        </DialogTrigger>

        <DialogContent className="flex max-w-md flex-col gap-2 overflow-hidden rounded-xl bg-neutral-100 p-0 shadow-lg dark:bg-neutral-900">
          <div className="relative px-6 py-10">
            <div className="bg-primary/30 absolute -top-10 left-0 h-16 w-full blur-2xl"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-md p-4">
                <div className="flex w-full gap-2">
                  <Image
                    src={image}
                    alt="Product Preview"
                    width={200}
                    height={200}
                    className="rounded-md border"
                  />
                  <div className="ml-2 flex w-full items-start justify-between">
                    <div>
                      <p className="text-md text-foreground font-medium">
                        {title}
                      </p>
                      <p className="text-foreground/60 flex items-center gap-2 text-xl">
                        {currencySymbol(currency)}
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-md text-foreground/50 flex flex-col items-center text-center">
                <span className="flex gap-1">
                  Paying a total of
                  <span className="text-foreground font-bold">
                    {currencySymbol(currency)}
                    {price}
                  </span>
                  for <span className="font-bold">1 product</span>
                </span>
                <span className="">
                  Provide your{' '}
                  <span className="text-foreground font-bold">Valid email</span>{' '}
                  to get it
                </span>
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-sm"
                required
              />
              <p className="text-foreground/60 text-center text-xs">
                The above email will be used for your purchase receipt and
                account creation. You will be redirected to Razorpay to complete
                your payment.
              </p>

              <Button
                onClick={handleCheckout}
                disabled={!email || loading}
                className="w-full max-w-sm"
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ThankYou isOpen={showThankYou} setIsOpen={setShowThankYou} />
    </>
  );
}

function currencySymbol(currency: string) {
  switch (currency.toUpperCase()) {
    case 'INR':
      return '₹';
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return currency.toUpperCase() + ' ';
  }
}
