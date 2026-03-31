"use client";

import { CourseFaqItem } from "@/data/courses-data";
import { useState } from "react";

type CourseTabsProps = {
  overviewPoints: string[];
  curriculum: string[];
  faq: CourseFaqItem[];
};

type TabKey = "overview" | "curriculum" | "faq";

export default function CourseTabs({
  overviewPoints,
  curriculum,
  faq,
}: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <div className="mt-10">
      <div className="border-b border-[#d7dce4]">
        <div className="flex flex-wrap items-end gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`min-w-[140px] rounded-t-[18px] px-7 py-5 text-left text-[18px] font-bold transition-all ${
              activeTab === "overview"
                ? "border border-b-0 border-[#e7ebf1] bg-white text-[#073f39] shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
                : "text-[#677289]"
            }`}
          >
            Overview
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("curriculum")}
            className={`min-w-[140px] rounded-t-[18px] px-7 py-5 text-left text-[18px] font-bold transition-all ${
              activeTab === "curriculum"
                ? "border border-b-0 border-[#e7ebf1] bg-white text-[#073f39] shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
                : "text-[#677289]"
            }`}
          >
            Curriculum
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("faq")}
            className={`min-w-[140px] rounded-t-[18px] px-7 py-5 text-left text-[18px] font-bold transition-all ${
              activeTab === "faq"
                ? "border border-b-0 border-[#e7ebf1] bg-white text-[#073f39] shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
                : "text-[#677289]"
            }`}
          >
            FAQ
          </button>
        </div>
      </div>

      <div className="rounded-b-[22px] rounded-tr-[22px] border border-[#e8ecf2] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] md:p-10">
        {activeTab === "overview" && (
          <ul className="space-y-6 text-[18px] leading-8 text-[#24324a]">
            {overviewPoints.map((point) => {
              const [label, ...rest] = point.split(":");
              const value = rest.join(":").trim();

              return (
                <li key={point} className="flex gap-4">
                  <span className="mt-[11px] block h-[6px] w-[6px] rounded-full bg-[#005640]" />
                  <span>
                    <span>{label}:</span>{" "}
                    <span className="font-extrabold text-[#073f39]">
                      {value}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {activeTab === "curriculum" && (
          <ul className="space-y-5 text-[18px] leading-8 text-[#24324a]">
            {curriculum.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-[11px] block h-[6px] w-[6px] rounded-full bg-[#005640]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "faq" && (
          <div className="space-y-5">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[18px] border border-[#e4e9f0] bg-[#fafbfc] p-5"
              >
                <h4 className="text-[18px] font-extrabold text-[#073f39]">
                  {item.question}
                </h4>
                <p className="mt-2 text-[16px] leading-7 text-[#5f6f89]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
