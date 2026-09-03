"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { AtlClock } from "@/components/atl-clock";
import { ProfileBadge } from "@/components/profile-badge";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-gradient-to-r from-[#051E39] to-[#000000]">
      <span>
      <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet"></link>
      </span>
      <AtlClock />
      <ProfileBadge />
      <Navbar />
    </div>
  );
}