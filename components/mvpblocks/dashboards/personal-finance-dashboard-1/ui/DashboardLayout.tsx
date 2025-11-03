'use client';
import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

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
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div className="flex w-full flex-col transition-all duration-500">
          <Header />
          <main className="flex-1 overflow-y-auto p-3 md:p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
