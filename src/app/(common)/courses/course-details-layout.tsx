import { Award, Languages, Star, Users, Clock3 } from "lucide-react";
import CourseFeatureList from "./course-feature-list";
import CoursePriceBox from "./course-price-box";
import CourseTabs from "./course-tabs";
import { CourseItem } from "@/data/courses-data";

export default function CourseDetailsLayout({
  course,
}: {
  course: CourseItem;
}) {
  return (
    <section className="bg-[#f5f5f5] py-8 md:py-10">
      <div className="mx-auto grid max-w-[1540px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
        <div className="min-w-0">
          <div className="rounded-[24px] border border-[#e5e9ef] bg-white p-6 md:p-8">
            <span className="inline-flex rounded-full bg-[#fff4d0] px-4 py-2 text-sm font-bold text-[#9c7200]">
              🎁 নতুন সেশন অফার • {course.discountLabel}
            </span>

            <h1 className="mt-5 text-[32px] font-black tracking-[-0.03em] text-[#073f39] md:text-[54px]">
              {course.title}
            </h1>

            <p className="mt-3 text-[20px] font-bold text-[#66748b] md:text-[24px]">
              {course.shortTitle}
            </p>

            <p className="mt-5 max-w-4xl text-[17px] leading-8 text-[#5f6f89] md:text-[19px]">
              {course.shortDescription}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div>
                <p className="text-[16px] text-[#66748b]">Instructor</p>
                <p className="mt-2 text-[20px] font-extrabold text-[#152437]">
                  {course.instructor}
                </p>
              </div>

              <div>
                <p className="text-[16px] text-[#66748b]">Rating</p>
                <p className="mt-2 text-[20px] font-extrabold text-[#152437]">
                  4.9
                </p>
                <div className="mt-2 flex items-center gap-1 text-[#d4a514]">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>

              <div>
                <p className="text-[16px] text-[#66748b]">Language</p>
                <div className="mt-2 flex items-center gap-2 text-[20px] font-extrabold text-[#152437]">
                  <Languages className="h-5 w-5 text-[#005640]" />
                  <span>{course.language}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-[16px] text-[#66748b]">Certification</p>
                  <div className="mt-2 flex items-center gap-2 text-[20px] font-extrabold text-[#152437]">
                    <Award className="h-5 w-5 text-[#005640]" />
                    <span>{course.certificate}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[16px] text-[#66748b]">Students</p>
                  <div className="mt-2 flex items-center gap-2 text-[20px] font-extrabold text-[#152437]">
                    <Users className="h-5 w-5 text-[#005640]" />
                    <span>{course.enrolled} Enrolled</span>
                  </div>
                </div>

                <div>
                  <p className="text-[16px] text-[#66748b]">Duration</p>
                  <div className="mt-2 flex items-center gap-2 text-[20px] font-extrabold text-[#152437]">
                    <Clock3 className="h-5 w-5 text-[#005640]" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6">
            <CourseFeatureList
              title="কোর্সে যা যা থাকবে"
              icon="📚"
              items={course.services}
            />
            <CourseFeatureList
              title="বিশেষত্ব"
              icon="✨"
              items={course.specialFeatures}
            />
          </div>

          <CourseTabs
            overviewPoints={course.overviewPoints}
            curriculum={course.curriculum}
            faq={course.faq}
          />
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <CoursePriceBox course={course} />
        </aside>
      </div>
    </section>
  );
}
