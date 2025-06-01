'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format, isAfter, parseISO, subDays, subMonths } from 'date-fns';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { fetchUserData } from '@/actions/githubgraphql';

type UserStats = Record<string, number>;

function prepareChartData(stats: UserStats, filter: 'all' | 'month' | 'week') {
  const now = new Date();
  const entries = Object.entries(stats || {})
    .map(([date, count]) => ({ date: parseISO(date), count }))
    .filter(({ date }) => {
      if (filter === 'month') return isAfter(date, subMonths(now, 1));
      if (filter === 'week') return isAfter(date, subDays(now, 7));
      return true;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return entries.map(({ date, count }) => ({
    date: format(date, 'MMM-dd'),
    commits: count,
  }));
}

const chartConfig = {
  commits: {
    label: 'Commits',
    color: 'hsl(var(--chart-1))',
  },
};

export default function CommitActivity() {
  const [userStats, setUserStats] = useState<UserStats>({});
  const [filter, setFilter] = useState<'all' | 'month' | 'week'>('all');

  useEffect(() => {
    const loadData = async () => {
      const { userStats } = await fetchUserData();
      setUserStats(userStats);
    };
    loadData();
  }, []);

  const chartData = useMemo(
    () => prepareChartData(userStats, filter),
    [userStats, filter],
  );

  return (
    <Card className="bg-gradient-to-b from-secondary/40 to-secondary/0 shadow-[0px_-2px_50px_0px_#e91e631c_inset]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>GitHub Commits</CardTitle>
            <CardDescription>Commits over time</CardDescription>
          </div>
          <Select value={filter} onValueChange={(val) => setFilter(val as any)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All time</SelectItem>
              <SelectItem value="month">Last month</SelectItem>
              <SelectItem value="week">Last week</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 16, right: 16, bottom: 24, left: 16 }} // Increased bottom margin
            >
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
                interval="preserveStartEnd"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
                tickMargin={8}
              />
              <Tooltip
                cursor={false}
                content={({ payload }) => {
                  if (payload && payload.length) {
                    const { date, commits } = payload[0].payload;
                    return (
                      <div className="rounded-md border bg-background px-3 py-2 text-sm shadow-md">
                        <div className="font-medium">{date}</div>
                        <div className="text-muted-foreground">
                          {commits} commits
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                dataKey="commits"
                type="monotone"
                stroke="var(--color-commits)"
                strokeWidth={2}
                dot={{ fill: 'var(--color-commits)' }}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
