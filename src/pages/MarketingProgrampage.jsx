import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import marketing from '../assets/images/marketingpafe.webp';
import AboutProgram from "../component/trainig program/AboutProgram";
import markeeting from '..//assets/images/MARKETINNNNG.webp';
import learn1 from '../assets/images/learn1.webp';
import learn2 from '../assets/images/learn2.webp';
import learn3 from '../assets/images/learn3.webp';
import learn4 from '../assets/images/learn4.webp';
import learn5 from '../assets/images/learn5.webp';
import learn6 from '../assets/images/learn6.webp';
import MainTittle from "../component/sharedComponents/MainTittle";
import CoursesGrid from "../component/Marketing Program/CourseCard";
export default function MarketingProgram() {
  const coursesData = [
    {
      image: learn1,
      title: "Marketing Mindset And Customer Journey",
      description:
        "Understand How Customers Think And Move Through Your Brand Experience.",
    },
    {
      image: learn2,
      title: "Market Research And Analysis",
      description:
        "Study Competitors, Trends, And Insights To Make Informed Marketing Decisions.",
    },
    {
      image: learn3,
      title: "Digital Marketing Strategies",
      description:
        "Learn Strategies For Online Growth, Brand Awareness, And Lead Generation.",
    },
    {
      image: learn4,
      title: "Paid Advertising And Campaign Optimization",
      description:
        "Master Paid Ads And Learn How To Improve ROI With Smart Targeting.",
    },
    {
      image: learn5,
      title: "Social Media As A Marketing Tool",
      description:
        "Leverage Social Platforms To Reach, Engage, And Convert Audiences.",
    },
    {
      image: learn6,
      title: "Building A Powerful Brand Identity",
      description: "Create A Brand Image That Resonates And Builds Loyalty.",
    },
  ];

  return (
    <main>
      <HeaderLayout />
      <HeroSection
        backgroundImage={marketing}
        title="Marketing & Digital Program "
        buttonText="Book your training"
        description="An engaging environment to learn, discuss, and grow."
      />{" "}
      {/* fisst */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={markeeting}
            title="About The Program"
            description="Marketing is no longer theoretical. This program gives you a complete journey – from understanding the philosophy of marketing to mastering digital tools that bring real business results."
            goalTitle="Why choose this course?"
            goals={[
              "Because it’s designed to turn knowledge into action. You’ll not only learn modern marketing strategies, but also practice them through real-world projects, case studies, and hands-on tools. By the end, you’ll have the skills and confidence to create campaigns that grow brands, attract customers, and drive measurable success.",
            ]}
          />
        </div>
      </section>
      {/* second */}
      <section className="bg-custom-black">
        <div>
          <MainTittle title="What You’ll Learn" />
        </div>
        <div className=" max-container">
          <CoursesGrid courses={coursesData} />
        </div>
      </section>
    </main>
  );
}
