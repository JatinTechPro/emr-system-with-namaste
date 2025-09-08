import type React from "react";
import { DashboardNav } from "@/components/dashboard-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <DashboardNav />
      <main>{children}</main>
    </div>
  );
}
