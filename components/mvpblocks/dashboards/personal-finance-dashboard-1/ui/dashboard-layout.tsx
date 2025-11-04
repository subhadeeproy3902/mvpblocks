'use client';
import { ReactNode, useState } from 'react';
import PersonalSidebar from './personal-sidebar';
import PersonalHeader from './personal-header';
import PersonalFooter from './personal-footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div
        className={`mt-16 grid min-h-screen grid-cols-1 transition-all duration-500 ${
          collapsed ? 'ml-20 lg:grid-cols-[1fr]' : 'lg:grid-cols-[16rem_1fr]'
        }`}
      >
        <div>
          <PersonalSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div className="flex w-full flex-col transition-all duration-500">
          <PersonalHeader />
          <main className="flex-1 overflow-y-auto p-3 md:p-6">{children}</main>
          <PersonalFooter />
        </div>
      </div>
    </div>
  );
}
