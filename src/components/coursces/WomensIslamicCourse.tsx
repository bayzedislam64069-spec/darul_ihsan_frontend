"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  ScrollTextIcon,
  ShieldCheckIcon,
  EyeIcon,
  UsersIcon,
  SparklesIcon,
} from "lucide-react";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

const phone = "8801602867954";

const topFeatures = [
  {
    icon: <BookOpenIcon className="h-6 w-6 text-emerald-500" />,
    title: "Qur’an Recitation",
    description:
      "Learn to recite the Qur’an accurately with Tajweed, guided by expert instruction and spiritual focus.",
  },
  {
    icon: <ScrollTextIcon className="h-6 w-6 text-yellow-500" />,
    title: "Surah & Dua Memorization",
    description:
      "Memorize essential Surahs and authentic Masnoon Duas with correct pronunciation and understanding.",
  },
  {
    icon: <BookOpenIcon className="h-6 w-6 text-indigo-500" />,
    title: "Tafsir with Translation",
    description:
      "Explore the meanings of Qur’anic verses through simplified Tafsir and translation.",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-pink-500" />,
    title: "Hadith for Daily Life",
    description:
      "Discover practical Hadiths that guide daily life, character, and spiritual growth.",
  },
];

const bottomFeatures = [
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-blue-500" />,
    title: "Aqeedah & Fiqh",
    description:
      "Understand core beliefs and practical rulings for a confident Islamic lifestyle.",
  },
  {
    icon: <EyeIcon className="h-6 w-6 text-teal-500" />,
    title: "Hijab & Halal-Haram",
    description:
      "Learn modesty, halal earnings, and ethical choices in everyday life.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6 text-purple-500" />,
    title: "Protection-Based Learning",
    description:
      "Strengthen spiritual protection through beneficial knowledge and practice.",
  },
];

export default function WomensCourse() {
  return (
    <SectionShell>
      <SectionHeader
        badge="For Sisters"
        title="Six-Month Islamic Education Course for Women"
        description="A comprehensive online program designed to help women grow in authentic Islamic knowledge, daily practice, and spiritual confidence."
      />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[32px] border border-border/60 bg-background/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/w-5.jpg"
              alt="Muslim woman attending online Islamic class"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {topFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {bottomFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="rounded-3xl border border-border/60 bg-background/80 p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Link
          href={`https://wa.me/${phone}?text=I%20want%20to%20join%20the%20Women’s%20Islamic%20Education%20Course`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full bg-emerald-600 px-8 text-white hover:bg-emerald-700">
            Register via WhatsApp
          </Button>
        </Link>
      </div>
    </SectionShell>
  );
}
