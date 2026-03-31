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

const phone = "8801924064069";

const topFeatures = [
  {
    icon: BookOpenIcon,
    title: "Qur’an Recitation",
    description:
      "Learn to recite the Qur’an accurately with Tajweed under guided instruction.",
  },
  {
    icon: ScrollTextIcon,
    title: "Surah & Dua Memorization",
    description:
      "Memorize essential Surahs and authentic Duas with proper pronunciation.",
  },
  {
    icon: BookOpenIcon,
    title: "Tafsir with Translation",
    description:
      "Understand Qur’anic meanings through simple Tafsir and translation.",
  },
  {
    icon: UsersIcon,
    title: "Hadith for Daily Life",
    description: "Learn practical Hadith to improve daily life and character.",
  },
];

const bottomFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "Aqeedah & Fiqh",
    description:
      "Understand core Islamic beliefs and essential rulings for daily life.",
  },
  {
    icon: EyeIcon,
    title: "Hijab & Halal-Haram",
    description:
      "Learn modesty, halal lifestyle, and correct Islamic practices.",
  },
  {
    icon: SparklesIcon,
    title: "Spiritual Development",
    description:
      "Strengthen your Iman through knowledge, practice, and consistency.",
  },
];

export default function WomensCourse() {
  return (
    <SectionShell>
      <SectionHeader
        badge="For Sisters"
        title="Six-Month Islamic Course for Women"
        description="A complete online program designed to build strong Islamic knowledge, daily practice, and spiritual confidence."
      />

      {/* Top Section */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-[28px] border border-[#e5e9ef] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/w-5.jpg"
              alt="Women's Islamic Course"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {topFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-[22px] border border-[#e5e9ef] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f6f2] text-[#005640]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#073f39]">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-[#66748b]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {bottomFeatures.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-[22px] border border-[#e5e9ef] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff4d0] text-[#d4a514]">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-lg font-bold text-[#073f39]">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-[#66748b]">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href={`https://wa.me/${phone}?text=I want to join the Women's Islamic Course`}
          target="_blank"
        >
          <Button className="h-14 rounded-full bg-[#005640] px-10 text-lg font-bold text-[#f7d04f] shadow-[0_12px_30px_rgba(0,86,64,0.25)] transition-all hover:bg-[#004734]">
            Register Now via WhatsApp
          </Button>
        </Link>

        <p className="mt-4 text-sm text-[#66748b]">
          Limited seats available • Enroll now to secure your place
        </p>
      </div>
    </SectionShell>
  );
}
