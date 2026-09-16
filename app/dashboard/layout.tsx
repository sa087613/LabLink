// app/dashboard/layout.tsx
"use client";
import { IntroChrome } from "@/components/intro-chrome";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <IntroChrome />
      <main className="w-full">{children}</main>
    </div>
  );
}