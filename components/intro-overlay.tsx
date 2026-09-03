"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export function IntroOverlay({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [logoVersion, setLogoVersion] = useState(0); // bumps each time fresh paths are injected

  useEffect(() => {
    let ignore = false; // guards against a stale/duplicate fetch resolving late

    fetch("/gt-logo.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (ignore || !logoWrapperRef.current) return;
        logoWrapperRef.current.innerHTML = svgText;
        setLogoVersion((v) => v + 1); // always triggers the draw effect, even if it ran before
      });

    return () => {
      ignore = true; // if this effect re-runs (Strict Mode), the old fetch's result is discarded
    };
  }, []);

  useEffect(() => {
    const overlayEl = overlayRef.current;
    const wrapperEl = logoWrapperRef.current;
    if (logoVersion === 0 || !overlayEl || !wrapperEl) return;

    const paths = Array.from(wrapperEl.querySelectorAll("path"));
    if (paths.length === 0) return;

    paths.forEach((p) => {
      p.style.fill = "none";
      p.style.stroke = "white";
      p.style.strokeWidth = "1.5";
    });

    const lengths = paths.map((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      return len;
    });

    let completedCount = 0;
    paths.forEach((p, i) => {
      animate(p, {
        strokeDashoffset: [lengths[i], 0],
        duration: 2000,
        delay: i * 20,
        ease: "inOutQuad",
        onComplete: () => {
          completedCount++;
          if (completedCount === paths.length) {
            animate(paths, {
              fill: ["transparent", "#0a1f38"],
              duration: 400,
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
          }
        },
      });
    });
  }, [logoVersion, onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-r from-[#8F713D] to-[#B39051]"
    >
      <div ref={logoWrapperRef} className="w-full max-w-2xl px-8" />
    </div>
  );
}