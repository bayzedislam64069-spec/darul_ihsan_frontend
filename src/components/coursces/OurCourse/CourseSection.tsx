import CourseCard from "./CourseCard";
import SectionShell from "@/components/shared/SectionShell";
import SectionHeader from "@/components/shared/SectionHeader";

const courses = [
  {
    title: "Qur’an Recitation Course",
    description:
      "Learn to recite the Qur’an clearly and fluently with Tajweed under expert guidance, InshaAllah.",
    fee: "820 BDT",
    image: "/images/Online-Quran-Recitation-Course.jpg",
  },
  {
    title: "Basic Islamic Education Course",
    description:
      "Explore essential Islamic teachings in depth, guided by qualified scholars.",
    fee: "1000 BDT",
    image: "/images/images.jpeg",
  },
  {
    title: "Hifzul Qur’an Course",
    description:
      "Memorize the Qur’an or selected Surahs through a structured and disciplined program.",
    fee: "1020 BDT",
    image: "/images/quran-hifz-course.jpg",
  },
  {
    title: "Aqeedah Course",
    description:
      "Understand core Islamic beliefs through essential sessions covering the foundations of Aqeedah.",
    fee: "500 BDT",
    image: "/images/AQEEDA-TAHAWVIA-FOR-WEB.jpg",
  },
];

export default function DarulIhsanCourses() {
  return (
    <SectionShell>
      <SectionHeader
        badge="Our Courses"
        title="Choose the Right Course for Your Journey"
        description="A curated set of courses designed to strengthen recitation, understanding, memorization, and everyday Islamic practice."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </SectionShell>
  );
}
