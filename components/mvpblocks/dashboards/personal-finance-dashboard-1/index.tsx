import BudgetProgress from './ui/budget-progress';
import DashboardLayout from './ui/dashboard-layout';
import IncomeExpenseChart from './ui/income-expense-chart';
import MonthlySpendingChart from './ui/monthly-spending-chart';
import RecentTransactions from './ui/recent-transactions';
import SavingsGoals from './ui/savings-goals';
import StatsCards from './ui/stats-cards';

export default function PersonalFinanceDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-3 md:space-y-6">
        {/* Stats Overview */}
        <StatsCards />

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 xl:grid-cols-2">
          <IncomeExpenseChart />
          <MonthlySpendingChart />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-2">
          <BudgetProgress />
          <SavingsGoals />
        </div>
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}
