import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        center && "mx-auto text-center",
        className,
      )}
    >
      {badge ? (
        <div className="mb-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          {badge}
        </div>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
