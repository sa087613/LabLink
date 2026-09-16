"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Home, Search, Mail, LogOut } from "lucide-react";

const supabase = createClient();

const NAV_LINKS = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Explore Labs", href: "/explore", icon: Search },
  { label: "My Matches", href: "/matches", icon: Mail },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setName(data.user?.user_metadata?.full_name ?? data.user?.email ?? null);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r-2 border-dashed border-[#B39051] flex flex-col justify-between p-6">
        <div>
          <span
            className="text-xl font-semibold italic tracking-tight text-white block mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            LabLink
          </span>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? "bg-[#B39051] text-[#051E39] font-medium"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          {name && <p className="text-white/40 text-xs truncate mb-3">{name}</p>}
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 hover:text-white transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}