"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Shield, Database, Zap, Activity } from "lucide-react";

const statusItems = [
  { label: "Server Status", status: "Online", color: "text-green-500", icon: Shield, percentage: 100 },
  { label: "Database", status: "Healthy", color: "text-green-500", icon: Database, percentage: 95 },
  { label: "API Response", status: "Fast", color: "text-green-500", icon: Zap, percentage: 98 },
  { label: "Storage", status: "85% Used", color: "text-yellow-500", icon: Activity, percentage: 85 },
];

export const SystemStatus = memo(() => {
  return (
    <div className="bg-card/40 border border-border rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">System Status</h3>
      <div className="space-y-4">
        {statusItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={item.label} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${item.color.replace('text-', 'bg-')}`}
                  />
                </div>
                <span className={`text-sm font-medium ${item.color} min-w-[60px] text-right`}>
                  {item.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

SystemStatus.displayName = "SystemStatus";
