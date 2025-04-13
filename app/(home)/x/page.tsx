"use client"

import { Code, Brush, Sparkles, Shapes } from "lucide-react";
import { CardHoverEffect as PulseCard } from "@/components/ui/pulse-card";

export default function PulseCardDemo() {
  const cards = [
    {
      title: "Smart Coding",
      description: "Intelligent code suggestions and auto-completion",
      icon: <Code className="h-full w-full" />,
      variant: "blue",
      showGridLines: false,
    },
    {
      title: "Intuitive Brushes",
      description: "Natural and responsive digital painting experience",
      icon: <Brush className="h-full w-full" />,
      variant: "rose",
      showGridLines: true,
    },
    {
      title: "AI-Powered",
      description: "Harness the power of AI for enhanced creativity",
      icon: <Sparkles className="h-full w-full" />,
      variant: "amber",
      showGridLines: false,
    },
    {
      title: "Vector Magic",
      description: "Create scalable graphics with precision",
      icon: <Shapes className="h-full w-full" />,
      variant: "emerald",
      showGridLines: true,
    },
  ] as const;

  return (
    <div className="mx-auto w-full">
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, i) => (
          <PulseCard
            key={i}
            title={card.title}
            description={card.description}
            icon={card.icon}
            variant={card.variant}
            glowEffect={true}
            size={"lg"}
            showGridLines={card.showGridLines}
          />
        ))}
      </div>
    </div>
  );
}
