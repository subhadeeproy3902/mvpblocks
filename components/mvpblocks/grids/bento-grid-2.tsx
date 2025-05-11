"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Home, MapPin, Compass, Building, Heart, HomeIcon, Camera } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"

interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
}

const itemsSample: BentoItem[] = [
  {
    title: "Component Library",
    meta: "100+ components",
    description:
      "Explore our extensive collection of ready-to-use UI components built with Next.js and Tailwind CSS. Perfect for quickly building beautiful, responsive websites.",
    icon: <Home className="w-4 h-4 text-primary" />,
    status: "Popular",
    tags: ["UI", "Components", "Tailwind"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Responsive Design",
    meta: "All devices",
    description: "Every component is fully responsive and works beautifully on all screen sizes, from mobile to desktop.",
    icon: <Building className="w-4 h-4 text-primary" />,
    status: "Essential",
    tags: ["Mobile", "Desktop"],
  },
  {
    title: "Theme Support",
    description: "All components support both light and dark modes out of the box, with seamless transitions.",
    icon: <MapPin className="w-4 h-4 text-primary" />,
    status: "New",
  },
  {
    title: "Performance Optimized",
    description: "Built with performance in mind, ensuring fast load times and smooth interactions.",
    icon: <HomeIcon className="w-4 h-4 text-primary" />,
    meta: "Lighthouse 100",
    tags: ["Speed", "Optimization"],
  },
  {
    title: "Accessibility",
    description: "All components follow WCAG guidelines and are fully accessible to all users.",
    icon: <Heart className="w-4 h-4 text-primary" />,
    meta: "WCAG 2.1 AA",
    tags: ["A11y", "Inclusive"],
  },
  {
    title: "Developer Experience",
    meta: "TypeScript",
    description: "Clean, well-documented code with TypeScript support for a seamless development experience.",
    icon: <Compass className="w-4 h-4 text-primary" />,
    status: "Featured",
    tags: ["DX", "TypeScript"],
  },
  {
    title: "Open Source",
    meta: "MIT License",
    description:
      "MVPBlocks is completely free and open-source. Use it for personal and commercial projects without any restrictions or attribution requirements.",
    icon: <Camera className="w-4 h-4 text-primary" />,
    status: "Free",
    tags: ["Open Source", "MIT"],
    colSpan: 2,
  },
]

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto relative">
        {items.map((item, index) => (
          <motion.a
            href="#"
            key={`${item.title}-${item.status || item.meta}`}
            className={cn(item.colSpan || "col-span-1", item.colSpan === 2 ? "md:col-span-2" : "")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                "group relative bg-card/40 h-full transition-all duration-300 hover:shadow-md",
                "hover:-translate-y-1 will-change-transform",
                "overflow-hidden border-border/60",
                {
                  "shadow-md -translate-y-1": item.hasPersistentHover,
                },
              )}
            >
              <div
                className={cn(
                  "absolute inset-0",
                  item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
              </div>

              <CardHeader className="relative space-y-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {item.status || "Active"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-2 p-4 pt-0">
                <h3 className="font-medium text-foreground tracking-tight text-[15px]">
                  {item.title}
                  {item.meta && (
                    <span className="ml-2 text-xs text-muted-foreground font-normal">{item.meta}</span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>

              <CardFooter className="relative p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {item.tags?.map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="px-2 py-1 rounded-md bg-secondary/50 backdrop-blur-xs transition-all duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    {item.cta || "Explore →"}
                  </span>
                </div>
              </CardFooter>

              <div
                className={cn(
                  "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-primary/10 to-transparent",
                  item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300",
                )}
              />
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  )
}