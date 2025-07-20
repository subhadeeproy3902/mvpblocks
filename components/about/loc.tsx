'use client';

import * as React from 'react';
import { Pie, PieChart, Sector } from 'recharts';
import type { PieSectorDataItem } from 'recharts/types/polar/Pie';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartStyle,
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
import locData from '@/custom-loc.json'; // assuming this file is placed in your project root or adjust the path accordingly

const colors = [
  '--chart-3',
  '--chart-2',
  '--chart-1',
  '--chart-4',
  '--chart-5',
  '--chart-6',
  '--chart-7',
  '--chart-8',
];

const langData = Object.entries(locData).map(([ext, { lines }], i) => ({
  language: ext,
  lines,
  fill: `hsl(var(${colors[i % colors.length]}))`,
}));

const chartConfig = Object.fromEntries(
  langData.map((item) => [
    item.language,
    {
      label: item.language.toUpperCase().replace('.', ''),
      color: `hsl(var(${colors[langData.indexOf(item) % colors.length]}))`,
    },
  ]),
);

export default function LocData() {
  const id = 'pie-loc';
  const [activeLang, setActiveLang] = React.useState(langData[0].language);

  const activeIndex = React.useMemo(
    () => langData.findIndex((item) => item.language === activeLang),
    [activeLang],
  );
  const langList = React.useMemo(
    () => langData.map((item) => item.language),
    [],
  );

  return (
    <Card
      data-chart={id}
      className="from-secondary/40 to-secondary/0 flex h-full flex-col bg-gradient-to-b shadow-[0px_-2px_50px_0px_#e91e631c_inset]"
    >
      <ChartStyle id={id} config={chartConfig as ChartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Lines of Code</CardTitle>
          <CardDescription>Languages Used</CardDescription>
        </div>
        <Select value={activeLang} onValueChange={setActiveLang}>
          <SelectTrigger
            className="ml-auto h-10 w-[160px] rounded-lg pl-2.5"
            aria-label="Select language"
          >
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {langList.map((key) => (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{
                      backgroundColor: `hsl(var(${colors[langList.indexOf(key) % colors.length]}))`,
                    }}
                  />
                  {key.toUpperCase()}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig as ChartConfig}
          className="mx-auto aspect-square w-full max-w-sm"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={langData}
              dataKey="lines"
              nameKey="language"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              {/* Optional: any extra config */}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-3xl font-bold"
            >
              {langData[activeIndex].lines.toLocaleString()}
            </text>
            <text
              x="50%"
              y="50%"
              dy={24}
              textAnchor="middle"
              className="fill-muted-foreground"
            >
              LOC
            </text>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
