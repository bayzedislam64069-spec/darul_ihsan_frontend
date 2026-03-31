"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  MonitorPlay,
  BookOpen,
  Users,
  Globe,
  Loader2,
  CalendarClock,
  Link as LinkIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";
import { liveClassService } from "@/services/liveClass.service";

const phone = "8801924064069";

type TLivePlatform = "ZOOM" | "GOOGLE_MEET" | "YOUTUBE";

type TLiveClass = {
  id: string;
  title: string;
  platform: TLivePlatform;
  meetingLink: string;
  isActive: boolean;
  startsAt: string | null;
  endsAt: string | null;
  note?: string | null;
  createdAt: string;
  updatedAt: string;
  isCurrentlyLive?: boolean;
};

const benefits = [
  {
    icon: BookOpen,
    title: "Authentic Curriculum",
    desc: "Courses based on trusted Islamic sources and classical texts.",
  },
  {
    icon: Users,
    title: "Structured Learning",
    desc: "Separate sessions for men, women and children.",
  },
  {
    icon: Globe,
    title: "Accessible Worldwide",
    desc: "Join from anywhere through Zoom or Google Meet.",
  },
];

const surfaceClass =
  "rounded-3xl border border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.30)]";

const infoCardIconClass =
  "mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400";

const getPlatformLabel = (platform?: TLivePlatform) => {
  switch (platform) {
    case "ZOOM":
      return "Zoom";
    case "GOOGLE_MEET":
      return "Google Meet";
    case "YOUTUBE":
      return "YouTube Live";
    default:
      return "Live Platform";
  }
};

const formatDateTime = (dateString?: string | null) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-BD", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

function PlatformIcon({
  platform,
  className = "h-5 w-5",
}: {
  platform?: TLivePlatform;
  className?: string;
}) {
  switch (platform) {
    case "ZOOM":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
          fill="none"
        >
          <rect width="24" height="24" rx="6" fill="#2D8CFF" />
          <path
            d="M7 9.25C7 8.56 7.56 8 8.25 8H12.4C13.09 8 13.65 8.56 13.65 9.25V14.75C13.65 15.44 13.09 16 12.4 16H8.25C7.56 16 7 15.44 7 14.75V9.25Z"
            fill="white"
          />
          <path
            d="M14.6 10.32L17.05 8.88C17.88 8.39 18.9 8.99 18.9 9.95V14.05C18.9 15.01 17.88 15.61 17.05 15.12L14.6 13.68V10.32Z"
            fill="white"
          />
        </svg>
      );

    case "GOOGLE_MEET":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
          fill="none"
        >
          <rect width="24" height="24" rx="6" fill="#FFFFFF" />
          <path
            d="M6.25 8.75C6.25 7.78 7.03 7 8 7H11.1L13.1 9V16H8C7.03 16 6.25 15.22 6.25 14.25V8.75Z"
            fill="#34A853"
          />
          <path d="M13.1 9L16.15 7.25V12.1L13.1 10.35V9Z" fill="#FBBC04" />
          <path
            d="M13.1 10.35L16.15 12.1V16.75L13.1 15V10.35Z"
            fill="#4285F4"
          />
          <path d="M11.1 7H16.15L13.1 9H11.1V7Z" fill="#188038" />
          <path d="M13.1 15L16.15 16.75H8.85L11.1 15H13.1Z" fill="#0F9D58" />
        </svg>
      );

    case "YOUTUBE":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          aria-hidden="true"
          fill="none"
        >
          <rect width="24" height="24" rx="6" fill="#FF0000" />
          <path
            d="M18.45 8.82C18.27 8.15 17.74 7.62 17.07 7.44C15.86 7.11 12 7.11 12 7.11C12 7.11 8.14 7.11 6.93 7.44C6.26 7.62 5.73 8.15 5.55 8.82C5.22 10.03 5.22 12 5.22 12C5.22 12 5.22 13.97 5.55 15.18C5.73 15.85 6.26 16.38 6.93 16.56C8.14 16.89 12 16.89 12 16.89C12 16.89 15.86 16.89 17.07 16.56C17.74 16.38 18.27 15.85 18.45 15.18C18.78 13.97 18.78 12 18.78 12C18.78 12 18.78 10.03 18.45 8.82Z"
            fill="white"
          />
          <path d="M10.5 14.5V9.5L14.75 12L10.5 14.5Z" fill="#FF0000" />
        </svg>
      );

    default:
      return null;
  }
}

export default function LiveClass() {
  const [liveClass, setLiveClass] = useState<TLiveClass | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadActiveLiveClass = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await liveClassService.getActiveLiveClass();
        setLiveClass(response?.data ?? null);
      } catch (error) {
        console.error("Failed to load active live class:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadActiveLiveClass();
  }, []);

  const platformLabel = useMemo(
    () => getPlatformLabel(liveClass?.platform),
    [liveClass?.platform],
  );

  const startsAtText = useMemo(
    () => formatDateTime(liveClass?.startsAt),
    [liveClass?.startsAt],
  );

  const endsAtText = useMemo(
    () => formatDateTime(liveClass?.endsAt),
    [liveClass?.endsAt],
  );

  const whatsappLink = useMemo(
    () =>
      `https://wa.me/${phone}?text=${encodeURIComponent(
        "I want to join the Live Islamic Class",
      )}`,
    [],
  );

  return (
    <SectionShell>
      <SectionHeader
        badge="Live Learning"
        title="Join Our Live Islamic Classes"
        description="Attend live sessions through Zoom or Google Meet."
      />

      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-background/70 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="flex min-h-[320px] items-center justify-center bg-[linear-gradient(135deg,#064e3b,#0f766e,#166534,#1d4ed8)] px-6 py-12 md:min-h-[430px]">
            <div className="text-center text-white">
              {isLoading ? (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-12 w-12 animate-spin" />
                  <p>Loading live class...</p>
                </div>
              ) : isError ? (
                <div className="flex flex-col items-center gap-4">
                  <MonitorPlay className="h-20 w-20" />
                  <h3 className="text-2xl font-bold">Unable to load class</h3>
                  <p className="max-w-2xl text-sm text-white/85">
                    Something went wrong while loading the live class
                    information. Please try again later.
                  </p>
                </div>
              ) : liveClass ? (
                <div className="flex flex-col items-center gap-4">
                  <MonitorPlay className="h-20 w-20" />

                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest">
                    {platformLabel}
                  </div>

                  <h3 className="text-2xl font-bold md:text-4xl">
                    {liveClass.title}
                  </h3>

                  {liveClass.note && (
                    <p className="max-w-2xl text-sm text-white/90 md:text-base">
                      {liveClass.note}
                    </p>
                  )}

                  {(startsAtText || endsAtText) && (
                    <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm">
                      <CalendarClock className="h-4 w-4" />
                      <span>
                        {startsAtText ?? "Time not set"}
                        {endsAtText ? ` — ${endsAtText}` : ""}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <MonitorPlay className="h-20 w-20" />
                  <h3 className="text-2xl font-bold">
                    No Live Class Available
                  </h3>
                  <p className="max-w-2xl text-sm text-white/85">
                    There is no active live class right now. Please check again
                    later or contact us on WhatsApp for updates.
                  </p>
                </div>
              )}
            </div>
          </div>

          {liveClass?.isCurrentlyLive && (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              }}
              className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white"
            >
              🔴 LIVE NOW
            </motion.div>
          )}
          {/* 
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="absolute bottom-5 left-5 rounded-full bg-emerald-600 p-3 text-white shadow-lg"
            aria-label="Contact on WhatsApp"
            title="Contact on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a> */}

          {liveClass?.meetingLink && (
            <div className="flex justify-center px-6 pb-8 pt-6">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full px-8 text-sm font-semibold shadow-lg md:h-14 md:px-10 md:text-base"
              >
                <a
                  href={liveClass.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Play className="h-5 w-5" />

                  <span>
                    {liveClass.isCurrentlyLive ? "Join Now" : "Join Live Class"}
                  </span>

                  <PlatformIcon
                    platform={liveClass.platform}
                    className="h-5 w-5 shrink-0"
                  />
                </a>
              </Button>
            </div>
          )}
        </div>

        {liveClass && (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className={`${surfaceClass} p-5`}>
              <div className={infoCardIconClass}>
                <Globe className="h-5 w-5" />
              </div>
              <h4 className="text-sm text-muted-foreground">Platform</h4>
              <p className="font-semibold">{platformLabel}</p>
            </div>

            <div className={`${surfaceClass} p-5`}>
              <div className={infoCardIconClass}>
                <CalendarClock className="h-5 w-5" />
              </div>
              <h4 className="text-sm text-muted-foreground">Schedule</h4>
              <p>{startsAtText ?? "Not scheduled yet"}</p>
              {endsAtText ? (
                <p className="text-sm text-muted-foreground">{endsAtText}</p>
              ) : null}
            </div>

            <div className={`${surfaceClass} p-5`}>
              <div className={infoCardIconClass}>
                <LinkIcon className="h-5 w-5" />
              </div>
              <h4 className="text-sm text-muted-foreground">Status</h4>
              <p>
                {liveClass.isCurrentlyLive ? "Currently live" : "Scheduled"}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
