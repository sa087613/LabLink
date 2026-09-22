// app/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="px-10 py-16">
      <section className="pt-28">
        <div className="flex items-center justify-between mb-2">
          <h1
            className="text-white text-3xl md:text-4xl italic font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}
          </h1>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
        <p className="text-white/50 text-sm mb-10">
          Here's a quick look at where things stand.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Saved labs</p>
          <p className="text-white text-3xl font-bold">0</p>
        </div>
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Emails sent</p>
          <p className="text-white text-3xl font-bold">0</p>
        </div>
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Responses</p>
          <p className="text-white text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}