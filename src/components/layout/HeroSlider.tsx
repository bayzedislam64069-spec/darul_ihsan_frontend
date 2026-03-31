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
  badge: string;
};
const slides: SlideItem[] = [
  {
    id: 1,
    image: "/images/hero-1.png",
    title: "Darul Ihsan Online Academy",
    subtitle:
      "Authentic Knowledge, Refined Adab, Reliable Deeni Education from Home",
    description:
      "Admissions are open for various courses including Quran, Hifz, Fard-e-Ilm, Arabic, and English languages. Build a strong spiritual foundation for yourself and your children under the guidance of experienced teachers.",
    badge: "New Session Ongoing",
  },
  {
    id: 2,
    image: "/images/hero-2.png",
    title: "Darul Ihsan Online Academy",
    subtitle:
      "Effective Online Courses Designed for Everyone—Children to Adults",
    description:
      "After-school Maktab, Hifzul Quran, Quranic Arabic, Fard-e-Ilm, and Language Learning—all on one platform. Experience easy teaching methods, regular guidance, and high-quality classes.",
    badge: "30% Discount Offer",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "Darul Ihsan Online Academy",
    subtitle: "Learn Ilm with Purpose, Precision, and Confidence",
    description:
      "Our courses go beyond theory—they are a complete online system for learning Amals, Akhlaq, language skills, and practical life-related Mas’ala. Join your preferred course today.",
    badge: "Admissions Open",
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

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#03261d]/80 via-[#05372c]/65 to-[#021a14]/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,165,20,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(5,150,105,0.18),transparent_28%)]" />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="mx-auto max-w-4xl text-center text-white">
                <div className="mb-5 inline-flex rounded-full border border-[#d4a514]/40 bg-[#d4a514]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#f6d56a] backdrop-blur-md">
                  {slide.badge}
                </div>

                <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#ebc144] md:text-base">
                  {slide.title}
                </h2>

                <h1 className="mx-auto mb-5 max-w-5xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {slide.subtitle}
                </h1>

                <p className="mx-auto mb-8 max-w-3xl text-sm leading-7 text-white/85 md:text-base md:leading-8">
                  {slide.description}
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/courses">
                    <Button className="h-11 rounded-full bg-[#e2b940] px-7 font-semibold text-[#063d36] hover:bg-[#be9312]">
                      View Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link
                    href="https://wa.me/8801924064069"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="h-11 rounded-full border-white/25 bg-white/10 px-7 text-white backdrop-blur-md hover:bg-white/20"
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
                ? "w-8 bg-[#d4a514]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
