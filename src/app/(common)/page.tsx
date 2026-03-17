import ContactForm from "@/components/contuct/Contact";
import CourseHighlights from "@/components/coursces/CourseHighlights";
import LiveClass from "@/components/coursces/LiveClass";
import OnlineClassInfo from "@/components/coursces/OnlineClassInfo";
import DarulIhsanCourses from "@/components/coursces/OurCourse/CourseSection";
import WomensCourse from "@/components/coursces/WomensIslamicCourse";
import AboutAs from "@/components/layout/AboutAs";
import HeroSlider from "@/components/layout/HeroSlider";
import EducationalSlider from "@/components/MyEducation/EducationalSlider";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CourseHighlights />
      <LiveClass />
      <DarulIhsanCourses />
      <WomensCourse />
      <OnlineClassInfo />
      <AboutAs />
      <EducationalSlider />
      <ContactForm />
    </div>
  );
};
export default HomePage;
