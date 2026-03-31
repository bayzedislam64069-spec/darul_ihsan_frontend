import ContactForm from "@/components/contuct/Contact";
import LiveClass from "@/components/coursces/LiveClass";
import OnlineClassInfo from "@/components/coursces/OnlineClassInfo";
import WomensCourse from "@/components/coursces/WomensIslamicCourse";
import HeroSlider from "@/components/layout/HeroSlider";
import OurCourses from "./courses/page";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <OurCourses />
      <LiveClass />
      {/* <DarulIhsanCourses /> */}
      <WomensCourse />
      <OnlineClassInfo />
      {/* <AboutAs /> */}
      {/* <EducationalSlider /> */}
      <ContactForm />
    </div>
  );
};
export default HomePage;
