"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { User, Download, Settings, Users } from "lucide-react";

const activities = [
  { action: "User login", user: "john@example.com", time: "2 min ago", icon: User, color: "text-blue-500" },
  { action: "Data export", user: "admin", time: "5 min ago", icon: Download, color: "text-green-500" },
  { action: "Settings updated", user: "admin", time: "10 min ago", icon: Settings, color: "text-orange-500" },
  { action: "New user registered", user: "sarah@example.com", time: "15 min ago", icon: Users, color: "text-purple-500" },
];

export const RecentActivity = memo(() => {
  return (
    <div className="bg-card/40 border border-border rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className={`p-2 rounded-lg bg-accent/50`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{activity.action}</div>
                <div className="text-xs text-muted-foreground truncate">{activity.user}</div>
              </div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

RecentActivity.displayName = "RecentActivity";
