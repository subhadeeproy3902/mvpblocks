import type React from "react"
import { cn } from "@/lib/utils"
import { Home, MapPin, Compass, Building, Heart, HomeIcon, Camera } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

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
    title: "Luxury Beachfront Villa",
    meta: "4.9 (128 reviews)",
    description:
      "Stunning oceanfront property with private pool, modern amenities, and breathtaking sunset views. Perfect for family getaways.",
    icon: <Home className="w-4 h-4 text-blue-500" />,
    status: "Superhost",
    tags: ["Beachfront", "Pool", "Luxury"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Downtown Loft",
    meta: "$199/night",
    description: "Modern urban living in the heart of the city. Walking distance to restaurants and attractions.",
    icon: <Building className="w-4 h-4 text-emerald-500" />,
    status: "Instant Book",
    tags: ["Urban", "Modern"],
  },
  {
    title: "Popular Areas",
    description: "Discover trending neighborhoods with the highest guest satisfaction",
    icon: <MapPin className="w-4 h-4 text-red-500" />,
    status: "New",
  },
  {
    title: "Bali Villa",
    description: "A luxurious villa in Bali with a private pool and stunning views of the ocean",
    icon: <HomeIcon className="w-4 h-4 text-amber-500" />,
    meta: "12 houses",
    tags: ["Housing", "Tools"],
  },
  {
    title: "Travel Collections",
    description: "Curated lists of unique stays and experiences worldwide",
    icon: <Heart className="w-4 h-4 text-purple-500" />,
    meta: "Updated weekly",
    tags: ["Featured", "Curated"],
  },
  {
    title: "Local Guide",
    meta: "6 cities",
    description: "Expert recommendations for local attractions and hidden gems",
    icon: <Compass className="w-4 h-4 text-sky-500" />,
    status: "Featured",
    tags: ["Local", "Guide"],
  },
  {
    title: "Exclusive Experiences",
    meta: "100+ activities",
    description:
      "Unique adventures and memorable experiences curated by local experts. From cooking classes to outdoor expeditions.",
    icon: <Camera className="w-4 h-4 text-indigo-500" />,
    status: "Premium",
    tags: ["Activities", "Local"],
    colSpan: 2,
  },
]

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item) => (
        <a
          href="#"
          key={`${item.title}-${item.status || item.meta}`}
          className={cn(item.colSpan || "col-span-1", item.colSpan === 2 ? "md:col-span-2" : "")}
        >
          <Card
            className={cn(
              "group relative h-full transition-all duration-300 hover:shadow-lg",
              "hover:-translate-y-0.5 will-change-transform",
              "overflow-hidden",
              {
                "shadow-md -translate-y-0.5": item.hasPersistentHover,
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <CardHeader className="relative space-y-0 p-4">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                  {item.icon}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                  {item.status || "Active"}
                </span>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-2 p-4 pt-0">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
                {item.title}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">{item.meta}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">{item.description}</p>
            </CardContent>

            <CardFooter className="relative p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  {item.tags?.map((tag) => (
                    <span
                      key={`${item.title}-${tag}`}
                      className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.cta || "Explore →"}
                </span>
              </div>
            </CardFooter>

            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-200/70 to-transparent dark:via-white/10",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300",
              )}
            />
          </Card>
        </a>
      ))}
    </div>
  )
}