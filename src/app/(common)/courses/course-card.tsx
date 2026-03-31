import Link from "next/link";
import { Clock3, BadgePercent, Users, BookOpenCheck } from "lucide-react";

type CourseCardProps = {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  price: string;
  oldPrice: string;
  billing: string;
  discountLabel: string;
  shortDescription: string;
};

export default function CourseCard({
  slug,
  title,
  shortTitle,
  duration,
  price,
  oldPrice,
  billing,
  discountLabel,
  shortDescription,
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-[22px] border border-[#d9dee5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#005640]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_50%,rgba(0,0,0,0.08))]" />

        <div className="relative flex flex-col items-center justify-center">
          <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#0b6a54]/60">
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#d4a514]/40">
              <BookOpenCheck
                className="h-9 w-9 text-[#d4a514]"
                strokeWidth={2.2}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-[#d4a514]" />

      <div className="px-6 pb-7 pt-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-full border border-[#d4a514] bg-[#fffaf0] px-4 py-2 text-sm font-bold text-[#0a4c46]">
            <Clock3 className="mr-2 h-4 w-4" />
            {duration}
          </span>

          <span className="inline-flex items-center rounded-full bg-[#e8f8ef] px-4 py-2 text-sm font-bold text-[#087443]">
            <BadgePercent className="mr-2 h-4 w-4" />
            {discountLabel}
          </span>
        </div>

        <h3 className="text-[24px] font-black leading-[1.25] tracking-[-0.03em] text-[#083f39]">
          {title}
        </h3>

        <p className="mt-2 text-[16px] font-semibold text-[#5f6b7a]">
          {shortTitle}
        </p>

        <p className="mx-auto mt-4 line-clamp-3 max-w-[330px] text-[15px] leading-7 text-[#66748b]">
          {shortDescription}
        </p>
      </div>

      <div className="border-t border-[#e5e9ef] px-6 py-7">
        <div className="flex flex-wrap items-end justify-center gap-3 text-center">
          <span className="text-[40px] font-black leading-none tracking-[-0.03em] text-[#005640]">
            {price}
          </span>
          <span className="pb-1 text-[22px] font-bold text-[#95a0b4] line-through">
            {oldPrice}
          </span>
        </div>

        <p className="mt-2 text-center text-[14px] font-semibold uppercase tracking-[0.16em] text-[#6f7b90]">
          {billing}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-[15px] font-semibold text-[#596679]">
          <Users className="h-4 w-4 text-[#d4a514]" />
          <span>ভর্তি চলছে</span>
        </div>

        <Link
          href={`/courses/${slug}`}
          className="mt-7 flex h-14 w-full items-center justify-center rounded-xl bg-[#005640] text-[18px] font-extrabold text-[#f7d04f] transition-all duration-300 hover:bg-[#004734]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
