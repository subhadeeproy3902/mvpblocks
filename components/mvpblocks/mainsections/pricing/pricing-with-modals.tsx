import { PricingCard } from "@/components/ui/pricing-card"

const plans = [
  {
    name: "Starter",
    price: 15,
    period: "month",
    features: ["Up to 10,000 data points per month", "Email support", "Community forum access", "Cancel anytime"],
  },
  {
    name: "Pro",
    price: 40,
    period: "quarter",
    featured: true,
    features: [
      "Advanced analytics dashboard",
      "Customizable reports and charts",
      "Real-time data tracking",
      "Integration with third-party tools",
      "Everything in Hobby Plan",
    ],
  },
  {
    name: "Premium",
    price: 120,
    period: "year",
    features: [
      "Unlimited data storage",
      "Customizable dashboards",
      "Advanced data segmentation",
      "Real-time data processing",
      "AI-powered insights and recommendations",
      "Everything in Hobby Plan",
      "Everything in Pro Plan",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Simple pricing for advanced people</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our pricing is designed for advanced people who need more features and more flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}
