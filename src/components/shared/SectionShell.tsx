import { cn } from "@/lib/utils";
import React from "react";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionShell({
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden px-4 py-20 md:px-8 lg:px-10",
        "bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.08),_transparent_30%)]",
        "bg-background text-foreground",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
