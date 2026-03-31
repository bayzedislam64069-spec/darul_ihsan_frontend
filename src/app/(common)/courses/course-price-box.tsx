import { CourseItem } from "@/data/courses-data";
import {
  Award,
  BadgePercent,
  Clock3,
  Languages,
  Signal,
  Users,
  MonitorPlay,
  UserRound,
  CalendarClock,
} from "lucide-react";

function MetaRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-dashed border-[#d7dde6] py-5">
      <div className="flex items-center gap-3 text-[#64738b]">
        <span className="text-[#005640]">{icon}</span>
        <span className="text-[17px] font-semibold">{label}</span>
      </div>

      <div className="text-right text-[17px] font-extrabold text-[#1c2737]">
        {value}
      </div>
    </div>
  );
}

export default function CoursePriceBox({ course }: { course: CourseItem }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#dde2e9] bg-white shadow-sm">
      <div className="relative flex h-[250px] items-center justify-center bg-[#005640]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_50%,rgba(0,0,0,0.08))]" />

        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[#0b6a54]/60">
          <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#d4a514]/40 text-[32px] text-[#d4a514]">
            📘
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-[#d4a514]" />

      <div className="p-7 md:p-8">
        <div className="mb-5 inline-flex items-center rounded-full bg-[#e8f8ef] px-4 py-2 text-sm font-bold text-[#087443]">
          <BadgePercent className="mr-2 h-4 w-4" />
          {course.discountLabel}
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <span className="text-[42px] font-black leading-none tracking-[-0.03em] text-[#073f39]">
            {course.price}
          </span>

          <span className="pb-1 text-[22px] font-bold text-[#98a3b8] line-through">
            {course.oldPrice}
          </span>
        </div>

        <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.18em] text-[#69768c]">
          {course.billing}
        </p>

        <button
          type="button"
          className="mt-7 flex h-16 w-full items-center justify-center rounded-[16px] bg-[#005f46] text-[20px] font-extrabold text-white shadow-[0_14px_30px_rgba(0,95,70,0.18)] transition-all hover:bg-[#004d39]"
        >
          Enroll Now
        </button>

        <div className="mt-8">
          <MetaRow
            label="Audience"
            value={course.audience}
            icon={<UserRound className="h-5 w-5" />}
          />
          <MetaRow
            label="Language"
            value={course.language}
            icon={<Languages className="h-5 w-5" />}
          />
          <MetaRow
            label="Duration"
            value={course.duration}
            icon={<Clock3 className="h-5 w-5" />}
          />
          <MetaRow
            label="Level"
            value={course.level}
            icon={<Signal className="h-5 w-5" />}
          />
          <MetaRow
            label="Class Mode"
            value={course.classMode}
            icon={<MonitorPlay className="h-5 w-5" />}
          />
          <MetaRow
            label="Access"
            value={course.access}
            icon={<CalendarClock className="h-5 w-5" />}
          />
          <MetaRow
            label="Certificate"
            value={course.certificate}
            icon={<Award className="h-5 w-5" />}
          />
          <div className="pt-1">
            <MetaRow
              label="Students"
              value={String(course.enrolled)}
              icon={<Users className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
