import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import ai from "../assets/images/datacover.webp";
import AAi from "../assets/images/dataanalysis.webp";
import AboutProgram from "../component/trainig program/AboutProgram";
import MainTittle from "../component/sharedComponents/MainTittle";
import AI1 from "../assets/images/data1.webp";
import AI2 from "../assets/images/data2.webp";
import AI3 from "../assets/images/data3.webp";
import AI4 from "../assets/images/data4.webp";
import thinking from "../assets/Icons/thinking.svg";
import smart from "../assets/Icons/smart.svg";
import pexcel from "../assets/Icons/pexcel.svg";
import sql from "../assets/Icons/sql.svg";
import inventory from "../assets/Icons/inventory.svg";
import practical from "../assets/Icons/practical.svg";
import dataaa from "../assets/Icons/data.svg";
import CardLocation from "../component/sharedComponents/CardLocation";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import RightPlace from "../component/sharedComponents/RightPlace";
import Footer from "../component/sharedComponents/Footer";
import ProgramHighlights from "../component/DataAnalysis.jsx/ProgramHighlights";
const DataAnalysis = () => {
  const data = [
    {
      image: thinking,
      tittle1: "Intro to Analytical Thinking",
      //   description:
      //     "Identify trends, best-selling products, and top-performing employees.",
    },
    {
      image: pexcel,
      tittle1: "Power BI, Excel, and Google Sheets",
      //   description: "Determine staffing needs and reduce delays.",
    },
    {
      image: inventory,
      tittle1: "Sales, Cost & Inventory Analysis",
      //   description:
      //     "Enhance writing and grammar, enabling error-free professional documents.",
    },
    {
      image: dataaa,
      tittle1: "Data Visualization Techniques",
      //   description:
      //     "Enhance writing and grammar, enabling error-free professional documents.",
    },
    {
      image: smart,
      tittle1: "Smart Reports for Decision Making",
      //   description: "Predict shortages and avoid customer dissatisfaction.",
    },

    {
      image: sql,
      tittle1: "SQL Basics & AI-Powered Insights",
      //   description: "Spot profitable campaigns and optimize cost management",
    },

    {
      image: practical,
      tittle1: "100% Practical with a Real Graduation Project",
      //   description:
      //     "Enhance writing and grammar, enabling error-free professional documents.",
    },
  ];
  const moduleItems = [
    {
      number: 1,
      title: "Boost Your Professional",
      description: "Productivity And Confidence",
    },
    {
      number: 2,
      title: "Stay Competitive In A Rapidly",
      description: "Evolving Market",
    },
    {
      number: 3,
      title: "Master Modern AI Tools For",
      description: "Smarter Management",
    },
    {
      number: 4,
      title: "Innovate And Implement New",
      description: "Strategies In Your Workplace",
    },
  ];

  return (
    <main className="bg-custom-yellow">
      <HeaderLayout />
      <HeroSection
        backgroundImage={ai}
        title="Data Analysis Program"
        buttonText="Book your training"
        description="An engaging environment to learn, discuss, and grow.."
      />
      {/* fisst */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={AAi}
            title="About The Program"
            description="Understand the numbers. Make the right decisions.In today’s world, data is the language of success. This program transforms raw numbers into actionable insights for smarter decisions across business, marketing, operations, and finance"
            goalTitle="Why does this matter?"
            goals={[
              "Because understanding data gives you a competitive edge. You’ll learn how to turn numbers into clear strategies, spot opportunities before others, and make confident decisions that drive real business results..",
            ]}
          />
        </div>
      </section>
      {/* second */}
      <section className=" bg-custom-black">
        <div className="max-container">
          <div className="pt-5 md:pt-8">
            <MainTittle title="What You’ll Learn" />
          </div>
          <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 ">
            <CardLocation
              image={AI1}
              title="Sales Insights"
              description="Identify trends best-selling products and top-performing employees."
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI2}
              title="Inventory Optimization"
              description="Predict shortages and avoid customer dissatisfaction."
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI3}
              title="Operational Efficiency"
              description="Determine staffing needs and reduce delays."
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI4}
              title="Marketing & Finance Decisions"
              description="Spot profitable campaigns and optimize cost management"
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
          </div>
        </div>
      </section>
      {/* third */}
      <section className="bg-custom-yellow">
        <div className="pt-8 md:pt-8">
          <MainTittle title="Program Highlights" />
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
      </section>
      <section
        className="relative py-16 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${require("../assets/images/bg--black.webp")})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-0">
          <ProgramHighlights />
        </div>
      </section>
      {/* fiifth */}
      <section className="pt-10">
        <RightPlace/>
      </section>

      <Footer />
    </main>
  );
};

export default DataAnalysis;
