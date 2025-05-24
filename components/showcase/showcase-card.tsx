"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ShowcaseItem } from "@/lib/showcase";
import { cn } from "@/lib/utils";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  index: number;
}

export function ShowcaseCard({ item, index }: ShowcaseCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    window.open(item.link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div
        onClick={handleClick}
        className={cn(
          "relative border-primary/20 hover:border-primary border-b overflow-hidden rounded-xl bg-card/40 hover:bg-card/10 cursor-pointer transition-all duration-300",
          "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
        )}
      >

        {/* Image container */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/50 to-muted" />
          )}

          <Image
            src={item.image}
            alt={item.name}
            fill
            className={cn(
              "object-cover rounded-t-xl overflow-hidden transition-all duration-300 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />

          {/* Fallback for failed images */}
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center">
                <div className="mb-2 text-2xl">🖼️</div>
                <p className="text-sm text-muted-foreground">Image not available</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* External link icon */}
          <div className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <ExternalLink className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="mb-2 text-xl group-hover:text-primary transition-colors text-primary duration-200">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {item.about}
          </p>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
