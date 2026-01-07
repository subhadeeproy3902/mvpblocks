'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Target, Calendar, Plus } from 'lucide-react';

const goals = [
  {
    name: 'Emergency Fund',
    target: 10000,
    current: 7500,
    deadline: '2026-10-31',
    color: 'from-blue-500 to-cyan-500',
    icon: '🛡️',
  },
  {
    name: 'New Car',
    target: 25000,
    current: 12000,
    deadline: '2025-01-30',
    color: 'from-green-500 to-emerald-500',
    icon: '🚗',
  },
  {
    name: 'Vacation',
    target: 5000,
    current: 3200,
    deadline: '2025-12-15',
    color: 'from-purple-500 to-pink-500',
    icon: '🏝️',
  },
];

export default function SavingsGoals() {
  const [formattedDates, setFormattedDates] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const newFormattedDates: { [key: string]: string } = {};
    goals.forEach((goal) => {
      newFormattedDates[goal.name] = new Date(goal.deadline).toLocaleDateString(
        'en-GB',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        },
      );
    });
    setFormattedDates(newFormattedDates);
  }, []);

  return (
    <Card className="bg-background max-h-[30rem] gap-0 overflow-hidden rounded-lg p-0 shadow-none">
      <CardHeader className="bg-background m-auto flex h-16 w-full flex-row items-center justify-between border-b p-3 !pb-3">
        <CardTitle className="m-auto flex h-full w-full items-center gap-2 text-center">
          <Target className="text-primary size-6" />
          <span>Savings Goals</span>
        </CardTitle>
        <Button className="flex items-center gap-2 rounded-sm">
          <Plus className="size-4" />
          <span>Add Goal</span>
        </Button>
      </CardHeader>
      <CardContent className="bg-background h-full space-y-3 overflow-auto p-3">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const monthsLeft = Math.ceil(
            (new Date(goal.deadline).getTime() - new Date().getTime()) /
              (30 * 24 * 60 * 60 * 1000),
          );

          return (
            <div
              key={goal.name}
              className="from-secondary/30 space-y-3 rounded-md border bg-gradient-to-tl p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{goal.icon}</span>
                  <div>
                    <h4 className="font-semibold">{goal.name}</h4>
                    <p className="text-sm">
                      Target : ${goal.target.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${goal.current.toLocaleString()}
                  </p>
                  <p className="text-sm">{percentage.toFixed(1)}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <Progress
                  value={percentage}
                  className="h-2 bg-green-500/20 [&>div]:bg-green-500"
                />
                <div className="flex justify-between text-xs">
                  <span>Saved : ${goal.current.toLocaleString()}</span>
                  <span>
                    Left : ${(goal.target - goal.current).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="size-4" />
                  <span>Due : {formattedDates[goal.name] || ''}</span>
                </div>
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                    monthsLeft < 3
                      ? 'border-red-500/70 bg-red-500/5 text-red-500'
                      : monthsLeft < 6
                        ? 'border-yellow-400/70 bg-yellow-400/5 text-yellow-400'
                        : 'border-green-500/70 bg-green-500/5 text-green-500'
                  }`}
                >
                  {monthsLeft} months left
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
