'use client';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { initiatePayment } from '@/lib/razorpay';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { toast } from 'sonner';
import ThankYou from './ThankYou';
import Image from 'next/image';
import LiveDemo from '@/components/important/LiveDemo';
import InternationalBuyButton from './InternationalBuyButton';
import NumberFlow from '@number-flow/react';
import { cn } from '@/lib/utils';
import { Check, Mic, Sparkles } from 'lucide-react';

type AuraClawPlan = 'starter' | 'pro' | 'ultimate';

interface AuraClawComponentsProps {
  downloadUrls: {
    ultimate: string;
    pro: string;
    starter: string;
  };
}

const PRICES: Record<AuraClawPlan, { inr: number; usd: number }> = {
  starter: { inr: 5999, usd: 69 },
  pro: { inr: 8999, usd: 99 },
  ultimate: { inr: 13999, usd: 149 },
};

const ALL_PERKS = [
  'Multi-model chat',
  'Streaming responses',
  'Markdown + KaTeX rendering',
  'Authentication & user management',
  'Actual Database (PostgreSQL)',
  'Voice mode (Whisper + playback)',
];

// How many perks from the end are locked (strikethrough) per plan
const LOCKED_PERKS: Record<AuraClawPlan, number> = {
  starter: 3,
  pro: 1,
  ultimate: 0,
};

const PLAN_META: Record<
  AuraClawPlan,
  { label: string; tagline?: string }
> = {
  starter: {
    label: 'Starter',
    tagline: 'Runs totally on local',
  },
  pro: {
    label: 'Pro',
    tagline: 'Has Auth and DB, but no Voice mode',
  },
  ultimate: {
    label: 'Ultimate',
    tagline: 'Everything is unlocked',
  },
};

const PLAN_ORDER: AuraClawPlan[] = ['starter', 'pro', 'ultimate'];

export default function AuraClawComponents({
  downloadUrls,
}: AuraClawComponentsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <LiveDemo url="https://chatbot.auradevs.co" />
      <AuraClawBuyDialog downloadUrls={downloadUrls} />
      <InternationalBuyButton />
    </div>
  );
}

function AuraClawBuyDialog({
  downloadUrls,
}: {
  downloadUrls: AuraClawComponentsProps['downloadUrls'];
}) {
  const [selectedPlan, setSelectedPlan] = useState<AuraClawPlan>('ultimate');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const price = PRICES[selectedPlan].inr;
  const meta = PLAN_META[selectedPlan];
  const title = `AuraClaw — ${meta.label}`;
  const productId = `AuraClaw ${meta.label}`;

  const handleCheckout = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    setLoading(true);
    try {
      await initiatePayment({
        email,
        amount: price,
        currency: 'INR',
        title,
        productId,
        onSuccess: () => {
          setIsOpen(false);
          setShowThankYou(true);
        },
        downloadUrl: downloadUrls[selectedPlan],
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>
            Buy Now ₹5999
          </Button>
        </DialogTrigger>

        <DialogContent className="flex flex-col gap-2 overflow-hidden rounded-xl bg-neutral-100 p-0 shadow-lg max-w-lg dark:bg-neutral-900">
          <div className="relative px-6 py-10">
            <div className="bg-primary/30 absolute -top-10 left-0 h-16 w-full blur-2xl"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-md p-4">
                <div className="flex w-full gap-2">
                  <Image
                    src="/images/auraclaw.webp"
                    alt="Product Preview"
                    width={200}
                    height={200}
                    className="rounded-md border"
                  />
                  <div className="ml-2 flex w-full items-start justify-between">
                    <div>
                      <p className="text-foreground text-md font-medium">
                        {title}
                      </p>
                      {meta.tagline && (
                        <p className="text-muted-foreground mt-1 text-xs">
                          {meta.tagline}
                        </p>
                      )}
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-foreground text-2xl font-bold">
                          ₹
                        </span>
                        <NumberFlow
                          value={price}
                          className="text-foreground text-2xl font-bold"
                        />
                        <span className="text-muted-foreground ml-1 text-xs">
                          one-time
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              role="radiogroup"
              aria-label="Select AuraClaw plan"
              className="mt-5 flex gap-2"
            >
              {PLAN_ORDER.map((plan) => {
                const isSelected = selectedPlan === plan;
                const planPrice = PRICES[plan].inr;
                const planMeta = PLAN_META[plan];
                return (
                  <button
                    key={plan}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedPlan(plan)}
                    className={cn(
                      'group relative w-full flex items-center gap-3 rounded-lg border p-3 text-left transition-colors',
                      isSelected
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-secondary/40 hover:bg-secondary',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors',
                        isSelected
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground/40',
                      )}
                    >
                      {isSelected && (
                        <span className="bg-primary-foreground h-1.5 w-1.5 rounded-full" />
                      )}
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="flex items-center gap-1.5">
                        <span className="text-foreground text-sm font-semibold">
                          {planMeta.label}
                        </span>
                        {plan === 'ultimate' && (
                          <span className="bg-primary/15 text-primary rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase">
                            Best
                          </span>
                        )}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <ul className="border-border/60 mt-4 flex flex-col gap-1.5 rounded-lg border border-dashed p-3">
              {ALL_PERKS.map((perk, i) => {
                const locked = i >= ALL_PERKS.length - LOCKED_PERKS[selectedPlan];
                const isVoice = perk.startsWith('Voice mode');
                return (
                  <li
                    key={perk}
                    className={cn(
                      'flex items-start gap-2 text-xs',
                      locked ? 'text-muted-foreground' : 'text-foreground/80',
                    )}
                  >
                    {isVoice && locked ? (
                      <Mic className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50" />
                    ) : (
                      <Check
                        className={cn(
                          'mt-0.5 h-3.5 w-3.5 shrink-0',
                          locked ? 'opacity-40' : 'text-primary',
                        )}
                      />
                    )}
                    <span className={locked ? 'line-through opacity-70' : ''}>
                      {perk}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex flex-col items-center justify-center gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <p className="text-muted-foreground text-center text-[11px]">
                Receipt and access link will be sent to this email. You will be
                redirected to Razorpay to complete payment.
              </p>
              <Button
                onClick={handleCheckout}
                disabled={!email || loading}
                className="w-full"
              >
                {loading ? (
                  'Processing…'
                ) : (
                  <>
                    Pay ₹
                    <NumberFlow value={price} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ThankYou isOpen={showThankYou} setIsOpen={setShowThankYou} />
    </>
  );
}
