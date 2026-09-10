"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Home, Compass, Mail, FlaskConical, Menu, X } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Search", href: "/explore" },
  { icon: Mail, label: "Email", href: "/matches" },
  { icon: FlaskConical, label: "Lab", href: "/lab" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export function IntroChrome() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0 }}
    >
      {time && (
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-6 z-50 hidden sm:flex items-center gap-2 rounded-full border px-4 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150 border-[#B39051] bg-black/20"
        >
          <span className="text-sm font-medium tracking-tight text-white tabular-nums">
            {time}
          </span>
          <span className="text-xs text-white/50">ATL</span>
        </motion.div>
      )}

      <motion.nav
        variants={itemVariants}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center rounded-3xl border px-4 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150 border-[#B39051] bg-black/20 transition-all"
      >
        <div className="flex w-full items-center justify-between gap-4">
          <span
            className="pl-2 pr-1 text-lg font-semibold italic tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            LabLink
          </span>

          <div className="hidden sm:flex items-center gap-2">
            {navItems.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors bg-[#B39051] text-[#051E39]"
              >
                <Icon size={18} strokeWidth={1.75} />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full bg-[#B39051] text-[#051E39] transition-colors"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>

        {open && (
          <div className="flex sm:hidden items-center justify-center gap-2 w-full mt-2 pt-2 border-t border-[#B39051]">
            {navItems.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B39051] text-[#051E39] transition-colors "
              >
                <Icon size={18} strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        )}
      </motion.nav>
      <Link href="/profile" aria-label="Profile">
        <motion.button
          variants={itemVariants}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Profile"
          className="fixed top-6 right-6 z-50 h-11 w-11 overflow-hidden rounded-full border shadow-lg backdrop-blur-xl backdrop-saturate-150 border-[#B39051] bg-black/20 transition-colors hover:bg-white/20"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={44}
            height={44}
            className="h-full w-full object-cover"
          />
        </motion.button>
      </Link>
    </motion.div>
  );
}