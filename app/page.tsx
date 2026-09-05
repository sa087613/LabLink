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
      {/* hero */}
      <p className="font-mono-ui text-xs tracking-[0.25em] text-foreground/70">
        ATLANTA, GA — 33.7756°N 84.3963°W
      </p>

      {/* hero
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pt-24 text-center md:pt-52">
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl lg:text-7xl">
          Find your lab <br className="hidden md:block" /> in seconds
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/90 drop-shadow-sm md:text-lg">
          LabLink matches your resume to Georgia Tech research labs looking for someone exactly like you. No cold emails, no guesswork.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#051E39] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Upload your resume
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            See how it works
          </a>
        </div>
        <p className="mt-4 text-xs text-white/70">
          Built for GT students &middot; Free to use
        </p>
      </div>
      */}

      {/* dashboard image (CHANGE ONCE DASHBOARD IS DONE) 
      <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 pb-4 md:mt-16 md:px-8">
        <div className="rounded-2xl border border-white/30 bg-white/20 p-2 shadow-2xl backdrop-blur-md md:rounded-[2rem] md:p-3">
          <img
            src="/Lablink1.png"
            alt="LabLink dashboard"
            className="w-full rounded-xl border border-black/5 shadow-lg md:rounded-3xl"
          />
        </div>
      </div>
      */}

      {/* CTA Section 
      <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 pb-4 md:mt-16 md:px-44">
        <div className="rounded-2xl border border-blue-950/30 bg-blue-950/20 p-2 shadow-2xl backdrop-blur-md md:rounded-[2rem] md:p-3">
          {introDone && (
            <TextFlippingBoard text={MESSAGES[msgIdx]} watermark="" stagger={false} />
          )}
        </div>
      </div>
      */}
    </div>
  );
}