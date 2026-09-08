"use client";
import { IntroChrome } from "@/components/intro-chrome";
import { GradientBackground } from "@/components/paper-design-shader-background";
import React, { useState, useEffect, useCallback } from "react";

export default function Home() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center font-sans bg-black">
            <IntroChrome />
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
                            Explore Labs
                        </h1>
                    </div>
                </div>
            </section>

            <section className="relative w-full flex items-center justify-center pt-28 py-4">
                
            </section>
        </div>
    )
}