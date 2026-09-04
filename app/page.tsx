"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/text-flipping-board";
import { IntroChrome } from "@/components/intro-chrome";
import { IntroOverlay } from "@/components/intro-overlay";

const MESSAGES: string[] = [
  "UPLOAD YOUR RESUME \n GET MATCHED WITH GT LABS \nIN SECONDS",
];

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(
    () => setMsgIdx((i) => (i + 1) % MESSAGES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-linear-to-r from-[#8F713D] to-[#B39051]">
      <span>
        <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet"></link>
      </span>
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      {introDone && <IntroChrome />}
      {introDone && (
        <TextFlippingBoard text={MESSAGES[msgIdx]} watermark="" stagger={false} />
      )}
    </div>
  );
}