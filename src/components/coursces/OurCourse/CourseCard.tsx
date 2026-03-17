"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  title: string;
  description: string;
  fee: string;
  image: string;
};

export default function CourseCard({
  title,
  description,
  fee,
  image,
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-border/60 bg-background/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {fee}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mb-6 text-sm leading-7 text-muted-foreground">
          {description}
        </p>

        <Button className="w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
          Enroll Now
        </Button>
      </div>
    </div>
  );
}
