"use client";
import { IntroChrome } from "@/components/intro-chrome";
import { GradientBackground } from "@/components/paper-design-shader-background";
import React, { useState } from 'react';
import { Search, Tag, ArrowRight, Users } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { useLabList } from "@/app/context/lab-list-context";
import { Mail, X, Copy, Check } from "lucide-react";

export default function MatchesPage() {
  const { list, removeLab, toggleSent, toggleResponded, updateDraft } = useLabList();
  const [draftLabSlug, setDraftLabSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentLab = list.find((l) => l.slug === draftLabSlug);
  const handleWriteEmail = async (lab: (typeof list)[number]) => {
    setDraftLabSlug(lab.slug);
    if (lab.draft) return;

  setLoading(true);
  try {
    const res = await fetch("/api/generate-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ labName: lab.name, pi: lab.pi, department: lab.department }),
    });
    const data = await res.json();
    updateDraft(lab.slug, data.email);
  } catch {
    updateDraft(lab.slug, "Couldn't generate a draft right now. Try again in a moment.");
  } finally {
    setLoading(false);
  }
  };
  const handleCopy = () => {
  if (!currentLab) return;
  navigator.clipboard.writeText(currentLab.draft);
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative w-full min-h-screen bg-black px-6 py-16">
      <IntroChrome/>
      <section className="relative w-full flex items-center justify-center pt-28 py-4">
        <div className="relative w-[90%] max-w-6xl min-h-[100px] max-h-[200px] md:aspect-video md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-[#B39051] overflow-hidden z-0">
            <GradientBackground scale={2.5} />
          </div>
          <div className="absolute flex items-center text-center justify-center inset-0">
            <h1
              className="text-white text-3xl md:text-5xl italic font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Write the Perfect Email
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: list + compose */}
        <div className="flex flex-col gap-6">
          <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Your list ({list.length})</h2>

            {list.length === 0 ? (
              <p className="text-white/40 text-sm">
                Add labs from the Explore page and they'll show up here.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {list.map((lab) => (
                  <div
                    key={lab.slug}
                    className={`flex items-center justify-between gap-3 p-3 rounded-xl border transition-colors ${
                      draftLabSlug === lab.slug
                        ? "border-[#B39051] bg-white/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">{lab.name}</p>
                      <p className="text-white/40 text-xs truncate">{lab.pi}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleWriteEmail(lab)}
                        className="flex items-center gap-1 text-xs text-[#B39051] hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        Write
                      </button>
                      <button
                        type="button"
                        onClick={() => removeLab(lab.slug)}
                        className="text-white/30 hover:text-white/70 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {draftLabSlug && currentLab && (
            <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-sm">Draft</h3>
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!currentLab.draft || loading}
                  className="flex items-center gap-1 text-xs text-[#B39051] hover:text-white transition-colors disabled:opacity-40"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <textarea
                value={loading ? "Writing your draft..." : currentLab.draft}
                onChange={(e) => updateDraft(currentLab.slug, e.target.value)}
                readOnly={loading}
                rows={12}
                className="w-full bg-white/10 border-2 border-white/20 text-white text-sm rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#B39051] focus:border-[#B39051] transition-colors resize-none"
              />
            </div>
          )}
        </div>

        {/* Right: tracker */}
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6 h-fit">
          <h2 className="text-white font-semibold mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Email tracker</h2>

          {list.length === 0 ? (
            <p className="text-white/40 text-sm">Nothing to track yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {list.map((lab) => (
                <div key={lab.slug} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <p className="text-white text-sm font-medium mb-2">{lab.name}</p>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={lab.sent}
                        onChange={() => toggleSent(lab.slug)}
                        className="accent-[#B39051] h-4 w-4"
                      />
                      Sent
                    </label>
                    <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={lab.responded}
                        onChange={() => toggleResponded(lab.slug)}
                        className="accent-[#B39051] h-4 w-4"
                      />
                      Response received
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}