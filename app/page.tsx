"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/text-flipping-board";
import { IntroChrome } from "@/components/intro-chrome";
import { IntroOverlay } from "@/components/intro-overlay";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { GradientBackground } from "@/components/paper-design-shader-background"
import { FileUp, Sparkles, Handshake, Check, Plus } from "lucide-react";
import { PaperDesignBackground } from "@/components/neon-dither"
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const FOOTER_LINKS = {
  Product: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [{ label: "Contact", href: "/contact" }],
  Legal: [
    { label: "Terms of service", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
  ],
};

const FAQS = [
  {
    question: "What do I actually have to do to get started?",
    answer: "Upload your resume, and LabLink matches you with GT labs looking for your skill set.",
  },
  {
    question: "What kind of matches does LabLink create?",
    answer: "Matches based on your coursework, skills, and project experience against open lab positions.",
  },
  {
    question: "Will the matches be generic or irrelevant?",
    answer: "No. Matching is based on your actual resume content, not keyword stuffing or broad categories.",
  },
  {
    question: "How is this different from just browsing lab websites?",
    answer: "LabLink surfaces labs actively looking for undergrads, with direct PI contact info, instead of guesswork.",
  },
  {
    question: "Can I review matches before reaching out?",
    answer: "Yes, you see every match and decide who to contact.",
  },
  {
    question: "Who is this for?",
    answer: "Georgia Tech undergrads looking for research opportunities.",
  },
];

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        <div className="relative w-[90%] max-w-6xl min-h-[500px] max-h-[550px] md:aspect-video md:min-h-0 overflow-hidden">
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
      <div className="relative w-[90%] max-w-6xl border-2 border-dashed border-[#B39051]">
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
      <div className="relative w-[90%] max-w-6xl border-2 border-dashed border-[#B39051] grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col justify-center gap-8 px-10 py-16 md:border-r-2 md:border-dashed md:border-[#B39051]">
          <div>
            <p className="text-[#B39051] text-xs font-mono tracking-widest uppercase mb-4">
              RESEARCH MATCHING
            </p>
            <h2 className="text-white text-3xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Applications that don't feel like guesswork.
            </h2>
            <p className="text-white/50 text-xs max-w-md">
              Create authentic-looking content using hook + demo and AI avatar formats that actually convert.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {FEATURES.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-[#B39051] shrink-0" />
                <span className="text-white text-sm font-semibold">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative min-h-[500px] md:min-h-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          >
          {/* Right column */}
          <div
          className="relative flex items-center justify-center min-h-[500px] md:min-h-0 py-12"
          style={{
          backgroundImage: "radial-gradient(circle, rgba(179,144,81,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          }}
          >
          <CardContainer className="inter-var" containerClassName="relative z-10">
            <CardBody className="bg-[#0a0a0a] relative group/card shadow-2xl w-auto sm:w-[26rem] h-auto rounded-xl p-6 border border-[#B39051]/30">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Professor Chen AI Lab
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs max-w-sm mt-2 text-white/50"
              >
                Dr. Sarah Chen's lab is looking for undergrads with machine learning experience.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="mb-12 rounded-2xl overflow-hidden bg-white/5 max-w-xl mx-auto p-4">
                  <img src="/harvard.svg" className="w-full h-64 object-contain" />
                </div>
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="/blogs"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-[#B39051] hover:text-white transition-colors"
                >
                  Read More →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          </div>
        </div>
      </div>
      </section>

      {/*FAQ*/}
      <section className="relative w-full flex items-center justify-center py-4">
      <div className="relative w-[90%] max-w-6xl border-2 border-dashed border-[#B39051] grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className="flex items-start px-10 py-16 md:border-r-2 md:border-dashed md:border-[#B39051]">
          <h2
            className="text-white text-3xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently asked questions.
          </h2>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`px-8 py-8 ${
                i > 0 ? "border-t-2 border-dashed border-[#B39051]" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-white text-sm font-semibold">{faq.question}</span>
                <Plus
                  className={`h-5 w-5 text-white/50 shrink-0 ml-4 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="text-white/50 mt-4 max-w-xl text-xs">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>

      {/*CTA*/}
      <section className="relative w-full flex items-center justify-center pt-4 py-4">
        <div className="relative w-[90%] max-w-6xl h-[300px] overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-[#B39051] overflow-hidden z-0">
            <PaperDesignBackground themeMode="dark" intensity={0.85} parallax={false} />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 z-10 px-4 md:px-6 py-8 text-center">
            <h1
              className="text-white text-3xl md:text-5xl italic font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stop Searching. Start Matching
            </h1>
            <p className="text-white/50 text-sm md:text-lg max-w-2xl">
              Join Georgia Tech students who found their research match in minutes, not months.
            </p>
            <button
              type="button"
              className="rounded-full bg-[#B39051] text-[#051E39] text-sm px-4 py-2 md:px-2 md:py-0.5 font-mono hover:bg-white/90 transition-colors"
            >
              GET STARTED →
            </button>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
      <footer className="relative w-full bg-black px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Logo */}
          <span
            className="pl-2 pr-1 text-lg font-semibold italic tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            LabLink
          </span>

          {/* Link columns */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="text-white font-semibold text-sm">{category}</h4>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/40 hover:text-white/70 transition-colors text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-dashed border-[#B39051] pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="text-white/40 text-xs flex flex-col gap-1">
              <p>Copyright © 2026 LabLink.</p>
              <p>All rights reserved.</p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>

      {/*MADE WITH
      <section className="relative w-full flex items-center justify-center py-4">
        <div className="relative w-[90%] max-w-6xl overflow-hidden border-2 border-dashed border-[#B39051] bg-black py-6">
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
      */}

      {/*IF WANTING TO PUT WORDS IN BACKGROUND PUT IN WATERMARK
      {introDone && (
        <TextFlippingBoard text={MESSAGES[msgIdx]} watermark="" stagger={false} />
      )}
      */}

    </div>
  );
}