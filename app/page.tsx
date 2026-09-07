"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/text-flipping-board";
import { IntroChrome } from "@/components/intro-chrome";
import { IntroOverlay } from "@/components/intro-overlay";

const MESSAGES: string[] = [
  "UPLOAD YOUR RESUME \n GET MATCHED WITH GT LABS \nIN SECONDS",
  "THE FIRST AI \n MATCHING \n STUDENTS TO LABS",
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
    <div className="relative flex min-h-screen flex-col items-center justify-center font-sans bg-linear-to-r from-[#8F713D] to-[#B39051]">
      <span>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
      </span>
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      {introDone && <IntroChrome />} {/*Might delay but once you put everything else in, it wont*/}

      <section className="relative w-full flex items-center justify-center py-12">
        <div className="relative w-[80%] max-w-4xl aspect-video overflow-hidden ">
          <video
            className="absolute inset-0 w-full h-full object-cover border-2 border-dashed border-white/50"
            src="/atlanta-1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold text-center px-6">
              {/*{MESSAGES[msgIdx]}*/}
            </h1>
          </div>
        </div>
      </section>

      {/*IF WANTING TO PUT WORDS IN BACKGROUND PUT IN WATERMARK
      {introDone && (
        <TextFlippingBoard text={MESSAGES[msgIdx]} watermark="" stagger={false} />
      )}
      */}
    </div>
  );
}