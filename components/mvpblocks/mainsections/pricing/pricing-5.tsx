"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { BadgeCheck } from "lucide-react";

const PAYMENT_FREQUENCIES: ("monthly" | "yearly")[] = ["monthly", "yearly"];
const TIERS = [
  {
    name: "basic",
    description: "Essential features to get started",
    price: { monthly: 9, yearly: 90 },
    features: ["Feature 1", "Feature 2", "Feature 3"],
    cta: "Get Started",
    highlighted: false,
    popular: false,
  },
  {
    name: "pro",
    description: "For growing businesses",
    price: { monthly: 29, yearly: 290 },
    features: ["All Basic features", "Feature 4", "Feature 5"],
    cta: "Go Pro",
    highlighted: false,
    popular: true,
  },
  {
    name: "enterprise",
    description: "For large organizations",
    price: { monthly: 99, yearly: 990 },
    features: ["All Pro features", "Feature 6", "Feature 7", "Feature 8"],
    cta: "Contact Us",
    highlighted: true,
    popular: false,
  },
];

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] opacity-100 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30" />
);

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
);

const Tab = ({
  text,
  selected,
  setSelected,
  discount,
}: {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
}) => (
  <button
    onClick={() => setSelected(text)}
    className={cn(
      "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
      selected
        ? "bg-white text-black shadow dark:bg-[#333] dark:text-white"
        : "hover:bg-[#E5E7EB] dark:hover:bg-[#333]",
    )}
  >
    {text}
    {discount && (
      <span className="absolute -right-1 -top-1 rounded-full bg-orange-500 px-1.5 py-0.5 text-[0.6rem] text-white">
        Save
      </span>
    )}
  </button>
);

const PricingCard = ({
  tier,
  paymentFrequency,
}: {
  tier: (typeof TIERS)[0];
  paymentFrequency: keyof typeof tier.price;
}) => {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden rounded-2xl border p-6 shadow",
        isHighlighted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        isPopular && "outline outline-[rgba(120,119,198)]",
      )}
    >
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge className="mt-1 bg-orange-900 px-1 py-0 text-white hover:bg-orange-900">
            🔥 Most Popular
          </Badge>
        )}
      </h2>

      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-4xl font-medium"
            />
            <p className="-mt-2 text-xs font-medium">Per month/user</p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-foreground/60",
              )}
            >
              <BadgeCheck strokeWidth={1} size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={cn(
          "h-fit w-full rounded-lg",
          isHighlighted && "bg-accent text-foreground hover:bg-accent/95",
        )}
      >
        {tier.cta}
      </Button>
    </div>
  );
};

export const PricingSection = () => {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState<"monthly" | "yearly">(
    PAYMENT_FREQUENCIES[0],
  );

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-medium md:text-5xl">Plans and Pricing</h1>
          <p>Receive unlimited credits when you pay yearly, and save on your plan.</p>
        </div>
        <div className="mx-auto flex w-fit rounded-full bg-[#F3F4F6] p-1 dark:bg-[#222]">
          {PAYMENT_FREQUENCIES.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedPaymentFreq === freq}
              setSelected={(text) => setSelectedPaymentFreq(text as "monthly" | "yearly")}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {TIERS.map((tier, i) => (
          <PricingCard
            key={i}
            tier={tier}
            paymentFrequency={selectedPaymentFreq}
          />
        ))}
      </div>
    </section>
  );
};