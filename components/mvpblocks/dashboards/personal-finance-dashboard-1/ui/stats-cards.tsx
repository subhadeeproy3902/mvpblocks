'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  Wallet,
  Target,
  TrendingUp,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const stats = [
  {
    title: 'Total Balance',
    value: '$12,456',
    change: '+12.4%',
    trend: 'up',
    icon: Wallet,
    description: 'From last month',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Monthly Income',
    value: '$4,200',
    change: '+8.2%',
    trend: 'up',
    icon: ArrowUpIcon,
    description: 'This month',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Monthly Expenses',
    value: '$2,843',
    change: '-3.1%',
    trend: 'down',
    icon: ArrowDownIcon,
    description: 'This month',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Savings Rate',
    value: '32.4%',
    change: '+5.7%',
    trend: 'up',
    icon: Target,
    description: 'Of total income',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="from-secondary/30 gap-2 overflow-hidden rounded-lg bg-gradient-to-br shadow-none transition-all duration-500 hover:scale-105"
        >
          <CardHeader className="flex w-full flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
            <div
              className={`rounded-sm bg-gradient-to-br p-2 ${stat.gradient}`}
            >
              <stat.icon className="size-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3 text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="rounded px-3 py-1.5 text-xs"
              >
                <TrendingUp className="mr-1 size-3" />
                {stat.change}
              </Badge>
              <span className="text-muted-foreground text-xs">
                {stat.description}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
