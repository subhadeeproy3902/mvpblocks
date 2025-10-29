import BudgetProgress from './ui/BudgetProgress';
import DashboardLayout from './ui/DashboardLayout';
import IncomeExpenseChart from './ui/IncomeExpenseChart';
import MonthlySpendingChart from './ui/MonthlySpendingChart';
import RecentTransactions from './ui/RecentTransactions';
import SavingsGoals from './ui/SavingsGoals';
import StatsCards from './ui/StatsCards';

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
