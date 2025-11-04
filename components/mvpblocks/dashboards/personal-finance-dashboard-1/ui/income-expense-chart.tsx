'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  { month: 'Jan', income: 4200, expenses: 2843, net: 1357 },
  { month: 'Feb', income: 3800, expenses: 2950, net: 850 },
  { month: 'Mar', income: 5200, expenses: 3100, net: 2100 },
  { month: 'Apr', income: 4800, expenses: 2650, net: 2150 },
  { month: 'May', income: 5100, expenses: 2900, net: 2200 },
  { month: 'Jun', income: 4700, expenses: 2750, net: 1950 },
  { month: 'Jul', income: 5300, expenses: 3000, net: 2300 },
];

export default function IncomeExpenseChart() {
  return (
    <Card className="bg-gradient-to-t from-secondary/30 rounded-lg shadow-none">
      <CardHeader className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <CardTitle>Income vs Expenses</CardTitle>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-green-500"></div>
            <span>Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500"></div>
            <span>Expenses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-blue-500"></div>
            <span>Net</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer
          config={{
            income: { label: 'Income', color: '#10b981' },
            expenses: { label: 'Expenses', color: '#ef4444' },
            net: { label: 'Net', color: '#3b82f6' },
          }}
          className="h-[15rem] md:h-[20rem] w-full"
        >
          <BarChart data={data}>
            <CartesianGrid vertical={true} />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
            <Bar dataKey="net" fill="var(--color-net)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
