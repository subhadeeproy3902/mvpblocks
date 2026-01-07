'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle2, FileText } from 'lucide-react';

const categories = [
  {
    name: 'Food & Dining',
    spent: 320,
    budget: 500,
    color: 'bg-blue-500',
    icon: '🍔',
  },
  {
    name: 'Transportation',
    spent: 180,
    budget: 300,
    color: 'bg-green-500',
    icon: '🚗',
  },
  {
    name: 'Entertainment',
    spent: 120,
    budget: 200,
    color: 'bg-purple-500',
    icon: '🎬',
  },
  {
    name: 'Shopping',
    spent: 450,
    budget: 400,
    color: 'bg-red-500',
    icon: '🛍️',
  },
  {
    name: 'Utilities',
    spent: 220,
    budget: 250,
    color: 'bg-yellow-500',
    icon: '💡',
  },
  {
    name: 'Healthcare',
    spent: 150,
    budget: 200,
    color: 'bg-pink-500',
    icon: '🏥',
  },
];

export default function BudgetProgress() {
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0);

  return (
    <Card className="bg-background max-h-[30rem] gap-0 overflow-hidden rounded-lg p-0 shadow-none">
      <CardHeader className="bg-background m-auto flex h-16 w-full items-center justify-center border-b p-3 !pb-2 text-center">
        <CardTitle className="m-auto flex h-full w-full items-center justify-between text-center">
          <div className="flex items-center gap-2">
            <FileText className="text-primary size-6" />
            <span>Budget Tracking</span>
          </div>
          <span className="text-base font-medium md:text-lg">
            ${totalSpent} / ${totalBudget}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-background h-full space-y-3 overflow-auto p-3">
        {categories.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          const isOverBudget = category.spent > category.budget;
          const isCloseToBudget = percentage > 80 && !isOverBudget;

          return (
            <div
              key={category.name}
              className="from-secondary/30 space-y-3 rounded-md border bg-gradient-to-tl p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isOverBudget && (
                    <AlertTriangle className="size-5 text-red-500" />
                  )}
                  {!isOverBudget && percentage >= 100 && (
                    <CheckCircle2 className="size-5 text-green-500" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      isOverBudget ? 'text-red-500' : ''
                    }`}
                  >
                    ${category.spent} / ${category.budget}
                  </span>
                </div>
              </div>

              <Progress
                value={percentage > 100 ? 100 : percentage}
                className={`h-2 ${
                  isOverBudget
                    ? 'bg-red-500/30 [&>div]:bg-red-500'
                    : isCloseToBudget
                      ? 'bg-yellow-400/30 [&>div]:bg-yellow-400'
                      : 'bg-green-500/30 [&>div]:bg-green-500'
                }`}
              />

              <div className="flex justify-between text-xs">
                <span>{percentage.toFixed(1)}% of budget</span>
                {isOverBudget && (
                  <span className="font-semibold text-red-500">
                    Over by ${category.spent - category.budget}
                  </span>
                )}
                {isCloseToBudget && !isOverBudget && (
                  <span className="font-semibold text-yellow-400">
                    Close to limit
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
