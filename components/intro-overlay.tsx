"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export function IntroOverlay({
  text = "LabLink",
  onComplete, // called so the page can reveal itself
}: {
  text?: string;
  onComplete?: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null); // to measure and animate its stroke

  const [fontReady, setFontReady] = useState(false);
  const [visible, setVisible] = useState(true);

  // load the custom font before we try to measure/animate text
  useEffect(() => {
    document.fonts.load('160px "Matemasie"').then(() => {
      document.fonts.ready.then(() => setFontReady(true));
    });
  }, []);

  // draw the text in, then fade the whole overlay away
  useEffect(() => {
    const textEl = textRef.current;
    const overlayEl = overlayRef.current;

    if (!fontReady || !textEl || !overlayEl) return;

    const length = textEl.getComputedTextLength();

    // set up the "invisible dash the exact length of the text" trick:
    // one dash equal to the full text length, offset so none of it shows yet
    textEl.style.strokeDasharray = `${length}`;
    textEl.style.strokeDashoffset = `${length}`;

    // animate the dash offset back to 0, which reveals the stroke (left to right, like it's being handwritten)
    animate(textEl, {
      strokeDashoffset: [length, 0],
      duration: 3000,
      ease: "inOutQuad",
      onComplete: () => {
        animate(overlayEl, {
          opacity: [1, 0],
          duration: 600,
          delay: 300,
          ease: "outExpo",
          onComplete: () => {
            setVisible(false);  
            onComplete?.();     
          },
        });
      },
    });
  }, [fontReady, onComplete]);

  // once faded out, render nothing — the overlay is gone for good
  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-r from-[#051E39] to-[#000000]"
    >
      {/* loads the custom display font used for the intro text */}
      <span>
        <link
          href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap"
          rel="stylesheet"
        />
      </span>

      <svg viewBox="0 0 800 200" className="w-full max-w-xl">
        <text
          ref={textRef}
          x="20"
          y="140"
          fontFamily="Matemasie"
          fontSize="160"
          fill="none"       
          stroke="white"
          strokeWidth="2"
          style={{ visibility: fontReady ? "visible" : "hidden" }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}