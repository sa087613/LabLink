"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { AtlClock } from "@/components/atl-clock";
import { ProfileBadge } from "@/components/profile-badge";
import { IntroOverlay } from "@/components/intro-overlay";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-linear-to-r from-[#051E39] to-[#000000]">
      <span>
        <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet"></link>
      </span>
      <IntroOverlay text="LABLINK" onComplete={() => setIntroDone(true)} />
      {introDone && <AtlClock />}
      {introDone && <ProfileBadge />}
      {introDone && <Navbar />}
    </div>
  );
}