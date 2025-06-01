'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { fetchCodeFrequency } from '@/actions/githubgraphql';

const chartConfig = {
  activity: {
    label: 'Code Frequency',
  },
  additions: {
    label: 'Additions',
    color: 'hsl(var(--chart-3))',
  },
  deletions: {
    label: 'Deletions',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export default function Codefreq() {
  const [codefreq, setCodefreq] = React.useState<CodeFrequencyStats>({});

  React.useEffect(() => {
    const loadData = async () => {
      const { codeFrequency } = await fetchCodeFrequency();
      setCodefreq(codeFrequency);
    };
    loadData();
  }, []);

  const [timeRange, setTimeRange] = React.useState('90d');

  // Convert codefreq to array and filter
  const codefreqArray = Object.entries(codefreq)
    .map(([date, values]) => ({
      date,
      additions: values.additions,
      deletions: values.deletions,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const filteredData = codefreqArray.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date();
    let daysToSubtract = 90;
    if (timeRange === '30d') daysToSubtract = 30;
    else if (timeRange === '7d') daysToSubtract = 7;
    const startDate = new Date(referenceDate);
    startDate.setDate(referenceDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="bg-gradient-to-b from-secondary/40 to-secondary/0 shadow-[0px_-2px_50px_0px_#e91e631c_inset]">
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>GitHub Code Frequency</CardTitle>
          <CardDescription>
            Showing additions and deletions over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillAdditions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-additions)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-additions)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDeletions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-deletions)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-deletions)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4"
              horizontal={true}
              vertical={false}
              strokeOpacity={0.9}
              stroke="#ffffff10"
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              }
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              isAnimationActive={true}
              dataKey="additions"
              type="natural"
              fill="url(#fillAdditions)"
              stroke="var(--color-additions)"
              stackId="a"
            />
            <Area
              dataKey="deletions"
              isAnimationActive={true}
              type="natural"
              fill="url(#fillDeletions)"
              stroke="var(--color-deletions)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
