import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

type PricingPlan = {
  name: string;
  price: {
    monthly: string;
    annual: string;
  };
  description: string;
  features: string[];
  cta: string;
  tag: string;
  link: string;
  highlight?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: {
      monthly: 'Free',
      annual: 'Free',
    },
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    link: '#',
    tag: 'Free Plan',
  },
  {
    name: 'Professional',
    price: {
      monthly: '$49',
      annual: '$39',
    },
    description: 'For growing teams and businesses',
    features: [
      'Unlimited projects',
      '50GB storage',
      'Advanced analytics',
      'Priority email support',
      'API access',
    ],
    cta: 'Start Free Trial',
    link: '#',
    tag: 'Standard Plan',
  },
  {
    name: 'Enterprise',
    price: {
      monthly: '$99',
      annual: '$79',
    },
    description: 'For large scale organizations',
    features: [
      'Unlimited projects',
      'Unlimited storage',
      'Advanced analytics',
      '24/7 phone support',
      'API access',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    link: '#',
    tag: 'Premium Plan',
    highlight: true,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 150,
    },
  },
};

interface PricingProps {
  plans?: typeof pricingPlans;
  className?: string;
}

const PricingPage = ({ plans = pricingPlans, className }: PricingProps) => {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <h1 className="text-center font-bold text-[7rem] md:text-[10rem]">
          Pricing
        </h1>
      </div>
      {/* Pricing Container */}
      <div className="relative container pt-28 md:pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              variants={itemVariants}
              plan={plan}
              isAnnual={isAnnual}
            />
          ))}
        </motion.div>
      </div>

      <BillingToggle
        isAnnual={isAnnual}
        onCheckedChange={setIsAnnual}
        className="mb-12"
      />
    </div>
  );
};

interface PriceDisplayProps {
  price: {
    monthly: string;
    annual: string;
  };
  isAnnual: boolean;
  className?: string;
}

const PriceDisplay = ({ price, isAnnual, className }: PriceDisplayProps) => {
  return (
    <div className={cn('relative mb-8', className)}>
      <div
        className={cn(
          'mt-2 text-6xl font-bold',
          'from-foreground bg-gradient-to-r to-transparent bg-clip-text text-transparent',
        )}
      >
        {price.monthly === 'Free' ? (
          <span>Free</span>
        ) : (
          <>
            <span>{isAnnual ? price.annual : price.monthly}</span>
            <span>/{isAnnual ? 'y' : 'm'}</span>
          </>
        )}
      </div>
    </div>
  );
};

interface PricingFeaturesProps {
  features: string[];
  className?: string;
}

const PricingFeatures = ({ features, className }: PricingFeaturesProps) => {
  return (
    <ul className={cn('relative mb-8 space-y-3', className)}>
      {features.map((feature) => (
        <li key={feature} className="flex items-center">
          <div className="bg-foreground/10 shadow-foreground/50 mr-3 rounded-full p-1 shadow-inner">
            <Check className="h-4 w-4" />
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

interface PricingCardProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {
  plan: PricingPlan;
  isAnnual: boolean;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ plan, isAnnual, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative flex flex-col justify-between overflow-hidden rounded-2xl p-6',
          'border-border/50 border',
          'bg-background/20 backdrop-blur-sm',
          'shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)]',
          "before:absolute before:inset-0 before:-z-10 before:content-['']",
          'before:bg-gradient-to-br before:from-white/5 before:to-transparent',
          'before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
          "after:absolute after:inset-0 after:-z-20 after:content-['']",
          'after:bg-[radial-gradient(circle_at_75%_25%,hsl(var(--primary)/0.15),transparent_70%)]',
          'after:opacity-70',
          'hover:border-border/70 hover:shadow-lg',
          className,
        )}
        whileHover={{ y: -8 }}
        {...props}
      >
        <div>
          <div className="py-2">
            <div className="text-muted-foreground text-sm font-medium">
              {plan.tag}
            </div>
          </div>

          <PriceDisplay price={plan.price} isAnnual={isAnnual} />
          <PricingFeatures features={plan.features} />
        </div>

        <div className="relative">
          <Button
            className={cn(
              'after:bg-primary/80 relative w-full after:absolute after:-z-10 after:h-full after:w-full after:blur-xs',
            )}
          >
            {plan.cta}
          </Button>
        </div>
      </motion.div>
    );
  },
);

PricingCard.displayName = 'PricingCard';

interface BillingToggleProps {
  isAnnual: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const BillingToggle = ({
  isAnnual,
  onCheckedChange,
  className,
}: BillingToggleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'flex flex-col items-center justify-center text-center',
        className,
      )}
    >
      <div className="bg-background/50 border-border/50 mt-8 flex items-center gap-4 rounded-full border p-2 backdrop-blur-sm">
        <Label htmlFor="billing-toggle">Monthly</Label>
        <Switch
          id="billing-toggle"
          checked={isAnnual}
          onCheckedChange={onCheckedChange}
        />
        <Label htmlFor="billing-toggle">
          Annual <span className="text-primary">(20% off)</span>
        </Label>
      </div>
    </motion.div>
  );
};

export default PricingPage;

export type { PricingPlan };

export { pricingPlans };

export { PriceDisplay, PricingFeatures, PricingCard, BillingToggle };
