import { courses } from "@/data/courses-data";
import CourseCard from "./course-card";

export default function CourseGrid() {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b38712]">
            Special Offer
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#073f39] md:text-5xl">
            আমাদের জনপ্রিয় কোর্সসমূহ
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[#66748b] md:text-lg">
            🎁 নতুন সেশন উপলক্ষে বিশাল অফার! সবগুলো কোর্সে ভর্তি হলেই পাচ্ছেন
            ৩০% ডিসকাউন্ট। নিচের ফি-গুলো ডিসকাউন্ট পরবর্তী চূড়ান্ত মূল্য।
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              title={course.title}
              shortTitle={course.shortTitle}
              duration={course.duration}
              price={course.price}
              oldPrice={course.oldPrice}
              billing={course.billing}
              discountLabel={course.discountLabel}
              shortDescription={course.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
