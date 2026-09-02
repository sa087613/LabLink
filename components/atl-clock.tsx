"use client";
import React, { useEffect, useState } from "react";

export function AtlClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // to help avoid rendering a wrong time on first server render
  if (!time) return null;

  return (
    <div className="fixed top-6 left-6 z-50 hidden sm:flex items-center gap-2 rounded-full border px-4 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150 border-white/10 bg-black/20">
      <span className="text-sm font-medium tracking-tight text-white tabular-nums">
        {time}
      </span>
      <span className="text-xs text-white/50">ATL</span>
    </div>
  );
}