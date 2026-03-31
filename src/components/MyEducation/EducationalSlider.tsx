"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

const educationalSteps = [
  // {
  //   title: "Hifz",
  //   institution: "Ashraful Madaris Sutighata, Jessore",
  //   image: "/images/h-5.jpg",
  // },
  {
    title: "Mawlana Degree",
    institution: "Ummul Madaris Muinul Islam Hathazari Arabic University",
    image: "/images/Ummul Madaris Muinul Islam.jpg",
  },

  // {
  //   title: "Tafsir Studies",
  //   institution: "Khulna Darul Uloom",
  //   image: "/images/h-5.jpg",
  // },
];

export default function EducationalSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % educationalSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % educationalSteps.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? educationalSteps.length - 1 : prev - 1,
    );
  };

  return (
    <SectionShell>
      <SectionHeader
        badge="Educational Journey"
        title="Where I Studied"
        description="A brief overview of the institutions and stages that shaped my path in Islamic learning."
      />

      <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-background/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="relative h-[420px] w-full md:h-[560px]">
          {educationalSteps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex
                  ? "z-10 opacity-100 pointer-events-auto"
                  : "z-0 opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/75" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                <div className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] backdrop-blur-md">
                  Educational Stage
                </div>
                <h3 className="text-3xl font-bold md:text-5xl">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-lg">
                  {step.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
        >
          ◀
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
        >
          ▶
        </button>
      </div>
    </SectionShell>
  );
}
