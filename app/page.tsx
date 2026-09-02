"use client";
import React from "react";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { Navbar } from "@/components/navbar";
import { AtlClock } from "@/components/atl-clock";
import { ProfileBadge } from "@/components/profile-badge";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-gradient-to-r from-[#051E39] to-[#000000]">
      <span>
      <link href="https://fonts.googleapis.com/css2?family=Matemasie&display=swap" rel="stylesheet"></link>
      </span>
      <AtlClock />
      <ProfileBadge />
      <Navbar />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                From resume to Real-world Experience,<br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  One Match Away
                </span>
              </h1>
            </>
          }
        >
          <img
            src={`/LabLink1.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-contain h-full w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
}