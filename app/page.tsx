"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/text-flipping-board";
import { IntroChrome } from "@/components/intro-chrome";
import { IntroOverlay } from "@/components/intro-overlay";
import { GradientBackground } from "@/components/paper-design-shader-background"
import { FileUp, Sparkles, Handshake } from "lucide-react";
import { Check } from "lucide-react";

const FEATURES = [
  "AI-powered resume matching",
  "Skill and coursework analysis",
  "Real-time lab openings",
  "Match score for every lab",
  "Direct PI contact info",
  "Built exclusively for GT students",
];

const FRAMEWORKS = [
  { name: "Next.js", src: "/logos/next.svg" },
  { name: "Vercel", src: "/logos/vercel.svg" },
  { name: "OpenAI", src: "/logos/openAI.svg" }, //FIND THE BIGGER VERSION
  { name: "Tailwind CSS", src: "/logos/tailwindCSS.svg" }, //FIND THE WHITE VERSION
  { name: "Typscript", src: "/logos/typescript.svg" }, //FIND THE WHITE VERSION
];

const MESSAGES: string[] = [
  "UPLOAD YOUR RESUME \n GET MATCHED WITH GT LABS \nIN SECONDS",
];

const STEPS = [
  {
    icon: FileUp,
    title: "Upload Your Resume",
    description: "Drop in your resume, no extra forms needed.",
  },
  {
    icon: Sparkles,
    title: "Get Matched",
    description: "Our AI matches you with labs that fit your skills.",
  },
  {
    icon: Handshake,
    title: "Connect with the Lab",
    description: "Reach out to the PI and take the next step.",
  },
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
      <section className="relative w-full flex items-center justify-center pt-28 py-4">
        <div className="relative w-[90%] max-w-5xl min-h-[500px] md:aspect-video md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-[#B39051] overflow-hidden z-0">
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
              className="rounded-full bg-[#B39051] text-[#051E39] text-sm px-4 py-2 md:px-2 md:py-0.5 font-mono hover:bg-white/90 transition-colors"
            >
              UPLOAD RESUME →
            </button>
          </div>
        </div>
      </section>

      {/*HOW IT WORKS*/}
      <section className="relative w-full flex items-center justify-center py-4">
      <div className="relative w-[90%] max-w-5xl border-2 border-dashed border-[#B39051]">
        <div className="border-b-2 border-dashed border-[#B39051] py-6 px-6 text-center">
          <h1
            className="text-white text-lg md:text-3xl italic font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How it works, in 3 simple steps.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap- px-8 py-2 text-center ${
                i > 0 ? "md:border-l-2 md:border-dashed md:border-[#B39051]" : ""
              }`}
            >
              <div className="flex flex-col items-center gap-4 px-8 py-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10">
                  <step.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-sm">{step.title}</h3>
                <p className="text-white/50 text-xs">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/*FEATURES*/}
      <section className="relative w-full flex items-center justify-center py-4">
      <div className="relative w-[90%] max-w-5xl border-2 border-dashed border-[#B39051] grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col justify-center gap-8 px-10 py-16 md:border-r-2 md:border-dashed md:border-[#B39051]">
          <div>
            <p className="text-[#B39051] text-sm font-mono tracking-widest uppercase mb-4">
              RESEARCH MATCHING
            </p>
            <h2 className="text-white text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Applications that don't feel like guesswork.
            </h2>
            <p className="text-white/50 text-lg max-w-md">
              Create authentic-looking content using hook + demo and AI avatar formats that actually convert.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {FEATURES.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-[#B39051] shrink-0" />
                <span className="text-white text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — reserved for your component */}
        <div
          className="relative min-h-[500px] md:min-h-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Drop your component here */}
        </div>
      </div>
      </section>

      {/*MADE WITH*/}
      <section className="relative w-full flex items-center justify-center py-4">
        <div className="relative w-[90%] max-w-5xl overflow-hidden border-2 border-dashed border-[#B39051] bg-black py-6">
          <p className="text-white/60 text-center text-sm tracking-widest uppercase mb-10">
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