"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type SlideItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

const slides: SlideItem[] = [
  {
    id: 1,
    image: "/images/H_1.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "Spread light through knowledge",
    description:
      "Learn the Qur’an, Hadith, Fiqh, and Tafsir from home through guided, authentic, and spiritually uplifting Islamic education.",
  },
  {
    id: 2,
    image: "/images/h-4.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "A trusted place for Islamic learning",
    description:
      "Build a strong foundation through structured lessons, qualified guidance, and a respectful online learning environment.",
  },
  {
    id: 3,
    image: "/images/H_2.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "Learn from home with clarity and purpose",
    description:
      "Join from anywhere and continue your journey with meaningful, accessible, and professionally guided learning.",
  },
  {
    id: 4,
    image: "/images/H_3.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "Nurture faith through beneficial knowledge",
    description:
      "Courses designed to help students and families grow in understanding, character, and connection with Islam.",
  },
  {
    id: 5,
    image: "/images/Hero.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "Begin your journey of sacred knowledge",
    description:
      "A modern online academy dedicated to Qur’an, Hadith, Fiqh, and Tafsir learning with sincerity and excellence.",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.16),transparent_25%)]" />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="mx-auto max-w-4xl text-center text-white">
                <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] backdrop-blur-md">
                  Online Islamic Academy
                </div>

                <h2 className="mb-4 text-base font-medium tracking-[0.25em] text-emerald-300 md:text-lg uppercase">
                  {slide.title}
                </h2>

                <h1 className="mx-auto mb-5 max-w-4xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {slide.subtitle}
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
                  {slide.description}
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/courses">
                    <Button className="h-11 rounded-full bg-emerald-600 px-7 text-white hover:bg-emerald-700">
                      View Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link
                    href="https://wa.me/8801924-064069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="h-11 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-emerald-400"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
