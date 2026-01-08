'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Food & Dining', value: 320, color: '#3b82f6' },
  { name: 'Transportation', value: 180, color: '#10b981' },
  { name: 'Entertainment', value: 120, color: '#8b5cf6' },
  { name: 'Shopping', value: 450, color: '#ef4444' },
  { name: 'Utilities', value: 220, color: '#f59e0b' },
  { name: 'Healthcare', value: 150, color: '#ec4899' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color?: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0]; // directly access payload[0] instead of payload[0].payload
    return (
      <div className="bg-background rounded-md border border-green-500/70 p-3 shadow-xl">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm" style={{ color: data.color }}>
          Amount : <span className="font-bold">${data.value}</span>
        </p>
        <p className="text-sm">
          Percentage : {((data.value / 1440) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

export default function MonthlySpendingChart() {
  return (
    <Card className="from-secondary/30 rounded-lg bg-gradient-to-t shadow-none">
      <CardHeader>
        <CardTitle>Monthly Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-40 md:h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="50%" // relative to chart size
                outerRadius="100%"
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="ml-10"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 border-t pt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">$1,440</p>
            <p className="text-muted-foreground text-sm">Total Spent</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-500">$760</p>
            <p className="text-muted-foreground text-sm">Remaining Budget</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
