"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/text-flipping-board";
import { IntroChrome } from "@/components/intro-chrome";
import { IntroOverlay } from "@/components/intro-overlay";
import { GradientBackground } from "@/components/paper-design-shader-background"


const MESSAGES: string[] = [
  "UPLOAD YOUR RESUME \n GET MATCHED WITH GT LABS \nIN SECONDS",
];

const FRAMEWORKS = [
  { name: "Next.js", src: "/logos/next.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "OpenAI", src: "/logos/openAI.svg" }, //FIND THE BIGGER VERSION
  { name: "Tailwind CSS", src: "/logos/tailwindCSS.svg" }, //FIND THE WHITE VERSION
  { name: "Typscript", src: "/logos/typescript.svg" }, //FIND THE WHITE VERSION
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
    <div className="relative flex min-h-screen flex-col items-center justify-center font-sans bg-black"> {/*IF YOU WANT TO CHANGE BACKGROUND MAKE IT bg-linear-to-r from-[#8F713D] to-[#B39051]*/}
      <span>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
      </span>
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      {introDone && <IntroChrome />} {/*Might delay but once you put everything else in, it wont*/}

      {/*HERO*/}
      <section className="relative w-full flex items-center justify-center pt-24 py-4">
        <div className="relative w-[90%] max-w-5xl min-h-[500px] md:aspect-video md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-white/50 overflow-hidden z-0">
            <GradientBackground />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 z-10 px-4 md:px-6 py-8 text-center">
            <h1
              className="text-white text-3xl md:text-5xl italic font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The First AI <br /> Pairing Students with Labs
            </h1>
            <p className="text-white/50 text-sm md:text-lg max-w-2xl">
              Your resume already shows what you can do. <br /> LabLink matches it against GT labs so you find the right one faster.
            </p>
            <button
              type="button"
              className="rounded-full bg-white text-black text-sm px-4 py-2 md:px-2 md:py-0.5 font-mono hover:bg-white/90 transition-colors"
            >
              UPLOAD RESUME →
            </button>
          </div>
        </div>
      </section>

      {/*MADE WITH SECTION*/}
      <section className="relative w-full flex items-center justify-center py-4">
        <div className="relative w-[90%] max-w-5xl overflow-hidden border-2 border-dashed border-white/50 bg-black py-6">
          <p className="text-white/60 text-center text-sm font-mono tracking-widest uppercase mb-10">
            Constructed with these frameworks
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee gap-16 pr-16">
              {[...FRAMEWORKS, ...FRAMEWORKS].map((fw, i) => (
                <img
                  key={i}
                  src={fw.src}
                  alt={fw.name}
                  className="h-8 w-auto object-contain opacity-90"
                />
              ))}
            </div>
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