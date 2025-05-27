"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface DashboardCardProps {
  stat: {
    title: string;
    value: string;
    change: string;
    changeType: "positive" | "negative";
    icon: any;
    color: string;
    bgColor: string;
  };
  index: number;
}

export const DashboardCard = memo(({ stat, index }: DashboardCardProps) => {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="relative group cursor-pointer"
    >
      <div className="bg-card/40 border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <Icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            
            <div className={`flex items-center gap-1 text-sm font-medium ${
              stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
            }`}>
              <TrendingUp className={`w-4 h-4 ${
                stat.changeType === 'negative' ? 'rotate-180' : ''
              }`} />
              <span>{stat.change}</span>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${65 + (index * 8)}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`h-full rounded-full ${stat.color.replace('text-', 'bg-')}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

DashboardCard.displayName = "DashboardCard";
