'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  Plus,
  MoreVertical,
  History,
} from 'lucide-react';

const transactions = [
  {
    id: 1,
    description: 'Grocery Store',
    amount: -85.2,
    category: 'Food & Dining',
    date: '2024-01-15',
    type: 'expense',
    merchant: 'Whole Foods',
  },
  {
    id: 2,
    description: 'Salary Deposit',
    amount: 3200.0,
    category: 'Income',
    date: '2024-01-14',
    type: 'income',
    merchant: 'Company Inc',
  },
  {
    id: 3,
    description: 'Netflix Subscription',
    amount: -15.99,
    category: 'Entertainment',
    date: '2024-01-13',
    type: 'expense',
    merchant: 'Netflix',
  },
  {
    id: 4,
    description: 'Gas Station',
    amount: -45.0,
    category: 'Transportation',
    date: '2024-01-12',
    type: 'expense',
    merchant: 'Shell',
  },
  {
    id: 5,
    description: 'Freelance Work',
    amount: 850.0,
    category: 'Income',
    date: '2024-01-11',
    type: 'income',
    merchant: 'Client Co',
  },
  {
    id: 6,
    description: 'Coffee Shop',
    amount: -12.5,
    category: 'Food & Dining',
    date: '2024-01-10',
    type: 'expense',
    merchant: 'Starbucks',
  },
  {
    id: 7,
    description: 'Stock Dividend',
    amount: 120.0,
    category: 'Income',
    date: '2024-01-09',
    type: 'income',
    merchant: 'Investments LLC',
  },
  {
    id: 8,
    description: 'Gym Membership',
    amount: -35.0,
    category: 'Health & Fitness',
    date: '2024-01-08',
    type: 'expense',
    merchant: 'Gym Co',
  },
  {
    id: 9,
    description: 'Dining Out',
    amount: -60.0,
    category: 'Food & Dining',
    date: '2024-01-07',
    type: 'expense',
    merchant: 'Olive Garden',
  },
  {
    id: 10,
    description: 'Project Bonus',
    amount: 500.0,
    category: 'Income',
    date: '2024-01-06',
    type: 'income',
    merchant: 'Client Inc',
  },
];

export default function RecentTransactions() {
  return (
    <>
      <Card className="bg-background gap-0 overflow-hidden rounded-lg p-0 shadow-none">
        <CardHeader className="bg-background flex flex-col items-center justify-between gap-2 border-b !p-3 md:flex-row">
          <div className="flex items-center gap-2">
            <History className="size-10" />
            <div className="flex flex-col items-start gap-1">
              <CardTitle>
                <span>Recent 10 Transactions</span>
              </CardTitle>
              <span className="text-muted-foreground text-xs italic">
                <span className="text-green-500">Green</span> means gain,{' '}
                <span className="text-red-500">Red</span> means spend - track
                your flow easily
              </span>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary flex w-full items-center gap-2 rounded-sm text-white md:w-auto">
            <Plus className="size-4" />
            <span>Add New</span>
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="max-h-[25rem] space-y-3 overflow-auto p-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="group from-secondary/30 hover:border-primary/50 flex items-center justify-between rounded-md border bg-gradient-to-r p-2"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-sm p-3 text-white ${
                      transaction.type === 'income'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {transaction.type === 'income' ? (
                      <ArrowUpIcon className="size-5" />
                    ) : (
                      <ArrowDownIcon className="size-5" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium md:text-base">
                      {transaction.description}
                    </p>
                    <div className="flex flex-col gap-0.5 opacity-60 md:flex-row md:items-center md:gap-2">
                      <p className="text-[0.65rem] md:text-xs">
                        {transaction.merchant}
                      </p>
                      <span className="hidden md:block">•</span>
                      <p className="text-[0.65rem] md:text-xs">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center justify-end gap-1 text-end">
                  <div className="flex flex-col items-center md:flex-row md:gap-4">
                    <span
                      className={`w-full text-sm font-bold md:text-lg ${
                        transaction.type === 'income'
                          ? 'text-green-500'
                          : 'text-primary'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : '-'}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </span>
                    <Badge
                      variant="outline"
                      className="mt-1 ml-auto rounded px-1.5 py-0 text-[0.6rem] md:mt-0 md:px-3 md:py-1.5 md:text-xs"
                    >
                      {transaction.category}
                    </Badge>
                  </div>
                  <button>
                    <MoreVertical className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
