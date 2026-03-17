import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Languages,
  MoonStar,
  ShieldCheck,
  Star,
} from "lucide-react";

import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

const educationItems = [
  {
    title: "Hifz",
    value: "Ashraful Madaris Sutighata, Jessore",
  },
  {
    title: "Mawlana Degree",
    value: "Ummul Madaris Muinul Islam Hathazari Arabic University",
  },
  {
    title: "Ifta",
    value: "Darul Uloom Jatrabari, Dhaka",
  },
  {
    title: "Current Studies",
    value: "Khulna Darul Uloom",
  },
];

const teachingItems = [
  "Accurate Qur’an recitation",
  "Memorization of Surahs and Masnoon Duas",
  "Tafsir explained in simple language",
  "Hadith and daily Islamic practices",
  "Aqeedah, Fiqh, and practical rulings",
  "Halal-Haram guidance and Hijab principles",
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Islamic Scholarship",
    description:
      "A structured educational journey through Hifz, Dawrah, and Ifta.",
  },
  {
    icon: Languages,
    title: "Multilingual Teaching",
    description:
      "Bengali fluency, strong Arabic study background, and basic English communication.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Learning",
    description:
      "Focused on sincerity, clarity, and reliable Islamic understanding.",
  },
];

export default function AboutAs() {
  return (
    <SectionShell>
      <SectionHeader
        badge="About the Teacher"
        title="Meet Bayzed Islam"
        description="A student and teacher of sacred Islamic knowledge, committed to sharing authentic learning with sincerity, clarity, and lasting benefit."
      />

      <div className="space-y-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-background/80 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent" />
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/admin.jpg"
                alt="Bayzed Islam"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-md">
                <MoonStar className="h-4 w-4" />
                Teacher • Student of Sacred Knowledge
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Bayzed Islam
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                Committed to teaching Islam with sincerity, clarity, and
                beneficial understanding for students of all levels.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[32px] border border-border/60 bg-background/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <Star className="h-4 w-4" />
                Introduction
              </div>

              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Assalamu Alaikum wa Rahmatullah
              </h3>

              <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
                My name is <strong>Bayzed Islam</strong>. I am a student and
                teacher of sacred Islamic knowledge, striving to share what I
                have learned with sincerity and clarity. I speak Bengali
                fluently, have studied Arabic extensively, and communicate in
                basic English to reach a wider audience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-border/60 bg-background/80 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="mt-4 text-base font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-border/60 bg-background/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Educational Journey
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                A path of learning shaped through respected Islamic
                institutions.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium">
              <GraduationCap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              Academic Background
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {educationItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-border/60 bg-background p-5 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          <div className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-background/80 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <div className="relative h-[320px] w-full md:h-full md:min-h-[480px]">
              <Image
                src="/images/admin-2.jpg"
                alt="Islamic teaching session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>

          <div className="rounded-[32px] border border-border/60 bg-background/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <BookOpen className="h-4 w-4" />
              Teaching Focus
            </div>

            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What I Teach
            </h3>

            <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
              My classes are designed to be clear, respectful, and spiritually
              beneficial. The goal is not only to teach information, but to help
              students develop love for the Deen and confidence in practice.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {teachingItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background px-4 py-3"
                >
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-border/60 bg-background/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <MoonStar className="h-4 w-4" />
              Teaching Philosophy
            </div>

            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              A Mission Rooted in Sincerity
            </h3>

            <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
              I believe Islamic education should be accessible, authentic, and
              spiritually uplifting. Whether online or offline, I strive to
              create a respectful environment where students feel connected to
              the Deen, motivated to improve, and confident in their learning
              journey.
            </p>

            <div className="mt-6 rounded-[24px] border border-emerald-500/20 bg-emerald-500/5 p-5">
              <p className="border-l-4 border-emerald-500 pl-4 text-sm italic leading-8 text-muted-foreground md:text-base">
                “Preserving the Deen through sincerity and sound knowledge is
                not just a duty — it is a lifelong mission.”
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-border/60 bg-background/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              Contact & Reference
            </div>

            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Reference Information
            </h3>

            <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
              If you wish to verify my background or speak to my teacher, you
              may contact the following references.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-sm font-medium text-foreground">Ustad</p>
                <p className="mt-1 text-sm text-muted-foreground">[Name]</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-sm font-medium text-foreground">
                  Institution
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Choose one from your list]
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  [Phone number]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
