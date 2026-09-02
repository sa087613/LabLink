"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Search, Mail, FlaskConical, Menu, X } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "#search" },
  { icon: Mail, label: "Email", href: "#messages" },
  { icon: FlaskConical, label: "Lab", href: "#lab" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center rounded-3xl border px-4 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150 border-white/10 bg-black/20 transition-all">
      <div className="flex w-full items-center justify-between gap-4">
        <span
          className="pl-2 pr-1 text-lg font-semibold tracking-tight text-white"
          style={{ fontFamily: "'Matemasie', serif" }}
        >
          LabLink
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-2">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors bg-white/10 text-white hover:bg-white/20"
            >
              <Icon size={18} strokeWidth={1.75} />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex sm:hidden items-center justify-center gap-2 w-full mt-2 pt-2 border-t border-white/10">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <Icon size={18} strokeWidth={1.75} />
            </Link>
          ))}
        </div>
      )}    
    </nav>
  );
}