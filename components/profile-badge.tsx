"use client";
import React from "react";
import Image from "next/image";

export function ProfileBadge() {
  return (
    <button
      aria-label="Profile"
      className="fixed top-6 right-6 z-50 h-11 w-11 overflow-hidden rounded-full border shadow-lg backdrop-blur-xl backdrop-saturate-150 border-white/10 bg-black/20 transition-colors hover:bg-white/20"
    >
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={44}
        height={44}
        className="h-full w-full object-cover"
      />
    </button>
  );
}