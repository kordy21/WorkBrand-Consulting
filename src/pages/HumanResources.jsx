import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import marketing from "../assets/images/marketingpafe (2).webp";
import AboutProgram from "../component/trainig program/AboutProgram";
import markeeting from "..//assets/images/MARKETINNNNG.webp";
import human1 from "../assets/images/human1.webp";
import human2 from "../assets/images/human2.webp";
import human3 from "../assets/images/human3.webp";
import human4 from "../assets/images/human4.webp";
import human5 from "../assets/images/human5.webp";
import human6 from "../assets/images/human6.webp";
import MainTittle from "../component/sharedComponents/MainTittle";
import CoursesGrid from "../component/Marketing Program/CourseCard";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import shakosh from "../assets/Icons/shakkosh (1).svg";
import tv from "../assets/Icons/tvvv.svg";
import taelem  from "../assets/Icons/shakkosh (3).svg";
import RightPlace from "../component/sharedComponents/RightPlace";
import Footer from "../component/sharedComponents/Footer";
export default function MarketingProgram() {
  const coursesData = [
    {
      image: human1,
      title: "Job Analysis & Professional Job Descriptions",
      description:
        "Create clear, effective job descriptions and understand workforce needs.",
    },
    {
      image: human2,
      title: "Performance Management Systems",
      description:
        "Build and implement evaluation systems to improve employee performance.",
    },
    {
      image: human3,
      title: "Talent Management Strategies",
      description:
        "Attract, retain, and grow the right talent for business success.",
    },
    {
      image: human4,
      title: "Productive Work Environment Building",
      description:
        "Learn to foster a healthy, collaborative, and high-performing workplace.",
    },
    {
      image: human5,
      title: "HR's Role in Business Strategy",
      description:
        " Align HR functions with overall company objectives for growth.",
    },
    {
      image: human6,
      title: "Employee Training & Development",
      description:
        "Build employee skills with training and support for growth.",
    },
  ];
  const data = [
    {
      image: tv,
      tittle1: "Simulated Work Scenarios",
      description: "Practice HR tasks in real-world simulations.",
    },
    {
      image: shakosh,
      tittle1: "Practical Workshops",
      description: "Gain hands-on experience through interactive sessions.",
    },
    {
      image: taelem,
      tittle1: "Project-based learning",
      description:
        "Get personalized guidance to develop professional HR skills.",
    },
    {
      image: taelem,
      tittle1: "Project-based learning",
      description:
        "Get personalized guidance to develop professional HR skills.",
    },
    
  ];
  return (
    <main className="bg-custom-yellow">
      <HeaderLayout />
      <HeroSection
        backgroundImage={marketing}
        title="Marketing & Digital ProgramHuman Resources & Business Growth Program "
        buttonText="Book your training"
        description="An engaging environment to learn, discuss, and grow."
        
      />{" "}
      {/* fisst */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={markeeting}
            title="About The Program"
            description="This is not old-school HR. We train you to become a business enabler – someone who drives performance and creates healthy, scalable company culture."
            goalTitle="Why is this program different?"
            goals={[
              "Because it’s more than theory. You’ll learn practical strategies, explore real case studies, and use modern tools to understand customers and drive growth. By the end, you’ll know how to build campaigns that deliver real results and strengthen any brand.",
            ]}
          />
        </div>
      </section>
      {/* second */}
      <section className="bg-custom-black">
        <div className="max-container">
          <div>
            <MainTittle title="What You’ll Learn" />
          </div>
          <div>
            <CoursesGrid courses={coursesData} />
          </div>
        </div>
      </section>
      {/* third */}
      <section className="bg-custom-yellow">
        <div className="pt-5">
          <MainTittle title="Training Approach" />
        </div>
        <div className="pt-5">
          <KeyFeature
            title="Our Features"
            align="left"
            white={true}
            icons={data}
            showTitle={false}
          />
        </div>
        <div className="mt-5">
          <RightPlace />
        </div>
      </section>
      <Footer />
    </main>
  );
}
