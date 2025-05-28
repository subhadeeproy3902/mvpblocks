"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BarChart3, Calendar } from "lucide-react";

const chartData = [
  { month: "Jan", value: 4000, growth: 12, color: "bg-blue-500" },
  { month: "Feb", value: 3000, growth: -8, color: "bg-red-500" },
  { month: "Mar", value: 5000, growth: 25, color: "bg-green-500" },
  { month: "Apr", value: 4500, growth: 15, color: "bg-yellow-500" },
  { month: "May", value: 6000, growth: 33, color: "bg-purple-500" },
  { month: "Jun", value: 5500, growth: 22, color: "bg-cyan-500" },
];

export const RevenueChart = memo(() => {
  return (
    <div className="bg-card/40 border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-500" />
            Revenue Analytics
          </h3>
          <p className="text-sm text-muted-foreground">Monthly revenue performance</p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          Last 6 months
        </Button>
      </div>

      {/* Fixed Chart Area */}
      <div className="h-64 relative mb-4 rounded-lg p-4">
        <div className="h-full flex items-end justify-between gap-3">
          {chartData.map((item, index) => (
            <div key={item.month} className="flex-1 flex flex-col items-center group">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(item.value / 6000) * 180}px` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`w-full ${item.color} rounded-t-lg hover:opacity-80 transition-opacity relative cursor-pointer min-h-[20px]`}
              >
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-popover border border-border rounded-lg px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                  <div className="font-medium">${item.value.toLocaleString()}</div>
                  <div className={`text-xs ${item.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.growth > 0 ? '+' : ''}{item.growth}%
                  </div>
                </div>
              </motion.div>
              <div className="text-xs text-center mt-2 text-muted-foreground font-medium">
                {item.month}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500">$27K</div>
          <div className="text-xs text-muted-foreground">Total Revenue</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-500">+18%</div>
          <div className="text-xs text-muted-foreground">Growth Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-500">$4.5K</div>
          <div className="text-xs text-muted-foreground">Average</div>
        </div>
      </div>
    </div>
  );
});

RevenueChart.displayName = "RevenueChart";
