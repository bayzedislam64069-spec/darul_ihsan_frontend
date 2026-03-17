"use client";

import { motion } from "framer-motion";
import {
  VideoIcon,
  CalendarIcon,
  MailIcon,
  SmartphoneIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

const features = [
  {
    icon: <VideoIcon className="h-6 w-6 text-[#2D8CFF]" />,
    text: "Live video sessions via Zoom and Google Meet",
  },
  {
    icon: <CalendarIcon className="h-6 w-6 text-green-500" />,
    text: "Fixed weekly schedule with reminders",
  },
  {
    icon: <MailIcon className="h-6 w-6 text-yellow-500" />,
    text: "Class links sent via email or WhatsApp",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-pink-500" />,
    text: "Separate sessions for women and children",
  },
  {
    icon: <SmartphoneIcon className="h-6 w-6 text-purple-500" />,
    text: "Accessible from mobile, tablet, or desktop",
  },
];

export default function OnlineClassInfo() {
  return (
    <SectionShell>
      <SectionHeader
        badge="How It Works"
        title="Live Classes via Zoom & Google Meet"
        description="All our courses are conducted through secure and interactive online platforms. Students receive class links, schedules, and reminders directly via email or WhatsApp."
      />

      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 24,
            ease: "linear",
          }}
          className="flex min-w-max gap-6"
        >
          {[...features, ...features].map((item, index) => (
            <div
              key={index}
              className="w-[280px] flex-shrink-0 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                {item.icon}
              </div>
              <p className="text-sm font-medium leading-7 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://wa.me/8801602867954?text=I%20want%20to%20register%20for%20online%20classes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full bg-emerald-600 px-8 text-white hover:bg-emerald-700">
            Register for Online Classes
          </Button>
        </a>
      </div>
    </SectionShell>
  );
}
