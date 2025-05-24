"use client";

import { motion } from "framer-motion";
import { ShowcaseCard } from "./showcase-card";
import { showcaseData } from "@/lib/showcase";

export function ShowcaseGrid() {
  return (
    <div className="space-y-8">
      {/* Showcase grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {showcaseData.map((item, index) => (
          <ShowcaseCard
            key={item.name}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
