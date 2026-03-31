"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const phone = "8801924064069";

const courses = [
  {
    title: "Free Quran Recitation Class",
    description:
      "Learn Tajweed and fluent recitation from home. Open to all ages and levels.",
    icon: "📖",
    link: `https://wa.me/${phone}?text=I%20am%20interested%20in%20the%20Quran%20Recitation%20Class`,
  },
  {
    title: "Women’s Islamic Education",
    description:
      "A six-month program covering Qur’an, Hadith, Fiqh, and Islamic lifestyle guidance.",
    icon: "🧕",
    link: `https://wa.me/${phone}?text=I%20would%20like%20to%20join%20the%20Women’s%20Islamic%20Education%20course`,
  },
  {
    title: "Children’s Quran Program",
    description:
      "Fun and engaging classes for kids with Duas, Surahs, and Salah training.",
    icon: "👶",
    link: `https://wa.me/${phone}?text=I%20am%20interested%20in%20the%20Children’s%20Quran%20Program`,
  },
  {
    title: "Tajweed & Fluency Masterclass",
    description:
      "Advanced training in pronunciation, rhythm, and recitation beauty.",
    icon: "🕋",
    link: `https://wa.me/${phone}?text=I%20want%20to%20enroll%20in%20the%20Tajweed%20and%20Fluency%20Masterclass`,
  },
];

export default function CourseHighlights() {
  return (
    <SectionShell>
      <SectionHeader
        badge="Featured Programs"
        title="Explore Our Featured Courses"
        description="In the light of the Qur’an and Sunnah, we offer structured courses to help you grow in knowledge, practice, and spiritual connection."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="group rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl ring-1 ring-emerald-500/20">
              {course.icon}
            </div>

            <h3 className="mb-3 text-xl font-semibold tracking-tight">
              {course.title}
            </h3>

            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              {course.description}
            </p>

            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="mx-auto mb-6 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
          Whether you are just beginning or seeking advanced guidance, our
          courses are designed to support your journey in Deen with sincerity,
          structure, and care.
        </p>

        <Button className="rounded-full bg-slate-900 px-7 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionShell>
  );
}
