import { getCourseBySlug } from "@/data/courses-data";
import { notFound } from "next/navigation";
import CourseDetailsLayout from "../course-details-layout";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseDetailsPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailsLayout course={course} />;
}
