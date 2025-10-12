import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Training from '../assets/images/training.webp';
import Trainig1 from '../assets/images/training1.webp';
import AboutProgram from "../component/sharedComponents/trainig program/AboutProgram";
import training1 from '../assets/images/trainig1.webp';
import training2 from '../assets/images/training2.webp';
import training3 from '../assets/images/trainiong3.webp';
import training4 from '../assets/images/training4.webp';
import training5 from '../assets/images/trainig5.webp';
import training6 from '../assets/images/trainig6.webp';
import training7 from '../assets/images/trainig7.webp';
import training8 from '../assets/images/trainig8.webp';
import training9 from '../assets/images/trainig9.webp';
import training10 from '../assets/images/trainig10.webp';
import QualificationsGrid from "../component/DR-Tarek-El-Tantawi/Qualifications";
import MainTittle from "../component/sharedComponents/MainTittle";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import icon1 from '../assets/Icons/lamba.svg';
import icon9 from '../assets/Icons/capp.svg';
import icon2 from '../assets/Icons/bage.svg';
import icon3 from '../assets/Icons/refresh.svg';
import icon4 from '../assets/Icons/tag.svg';
import icon5 from '../assets/Icons/target.svg';
import icon6 from '../assets/Icons/target1.svg';
import icon7 from '../assets/Icons/madrasra.svg';
import icon8 from '../assets/Icons/kames.svg';

import { fa7 } from "@fortawesome/free-solid-svg-icons";

export default function TrainingProgram() {
    const qualificationsData = [
      {
        img: training1,
        title: "PhD In Strategic Planning & Business Excellence (USA)",
      },
      {
        img: training2,
        title: "MBA In Marketing, HRM, And Strategic Management",
      },
      { img: training3, title: "Master’s In Human Resource Management (AUD)" },
      {
        img: training4,
        title: "PhD In Strategic Planning & Business Excellence (USA)",
      },
      {
        img: training5,
        title: "MBA In Marketing, HRM, And Strategic Management",
      },
      { img: training6, title: "Master’s In Human Resource Management (AUD)" },

      {
        img: training7,
        title: "MBA In Marketing, HRM, And Strategic Management",
      },
      { img: training8, title: "Master’s In Human Resource Management (AUD)" },
      { img: training9, title: "Master’s In Human Resource Management (AUD)" },
      { img: training10, title: "Master’s In Human Resource Management (AUD)" },
    ];
    const featuresData = [
      {
        image: icon9,
        // tittle1: "Fast Performance",
        description:
          "Prepare fresh graduates for market readiness and workplace success",
      },
      {
        image: icon2,
        // tittle1: "Secure",
        description:
          "Strengthen job seekers with practical and solid administrative skills",
      },
      {
        image: icon3,
        // tittle1: "24/7 Support",
        description:
          "Support career shifters to adapt effectively to new career fields",
      },
      {
        image: icon4,
        // tittle1: "Fast Performance",
        description:
          "Develop leadership skills to boost personal and organizational growth",
      },
      {
        image: icon8,
        // tittle1: "Secure",
        description:
          "Prepare participants for executive and managerial positions",
      },
      {
        image: icon1,
        // tittle1: "24/7 Support",
        description: "Develop strategic thinking and decision-making skills",
      },
      {
        image: icon7,
        tittle1: "Secure",
        description: "Understand business success, failure, and risk avoidance",
      },
      {
        image: icon6,
        tittle1: "24/7 Support",
        description: "Gain hands-on training in market and project management",
      },
    ];
  return (
    <main className="relative w-full bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={Training}
        title="Training Program"
        buttonText="Book your training"
        description="Market-driven training programs, led by industry experts, designed to equip you with practical skills and a competitive edge in the modern business world."
        isSmall={true}
      />
      {/* fisst */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={Trainig1}
            title="About The Program"
            description="In An Increasingly Competitive Job Market, Degrees Alone Are No Longer Enough. Success Now Depends On Real Skills, Innovation, Self-Confidence, And Strong Communication And Teamwork Abilities."
            goalTitle="Our Goal Is To Equip You With The Capabilities That Make You The Ideal Candidate For Any Organization:"
            goals={[
              "Professional Administrative Skills",
              "Practical Experience That Bridges Theory And Real-World Application",
              "A Deep Understanding Of The Work Environment And Its Demands",
            ]}
            extraDescription="This Program Does More Than Teach Basic Skills — It Shapes A Personality Ready To Face Challenges, Think Critically, Work Effectively In Teams, And Refine Leadership And Communication Abilities."
          />
        </div>
      </section>
      {/* second  */}
      <section className="bg-white pb-5 ">
        <div className="max-container">
          <div className="pt-5">
            <MainTittle
              title="Program Topics"
              description="WorkBrand Media Agency covers every stage of creative production, offering a full-circle experience"
            />
          </div>
          <QualificationsGrid
            qualifications={qualificationsData}
            showTitle={false}
          />
        </div>
      </section>
      {/* third */}
      <section className="bg-custom-black pb-5">
        <div className="py-5">
          <MainTittle title="Main Program Objectives" />
        </div>
        <div>
          <KeyFeature title="Features" icons={featuresData} showTitle={false} />
        </div>
      </section>
      {/* foruth */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={Trainig1}
            title="About The Program"
            description="In An Increasingly Competitive Job Market, Degrees Alone Are No Longer Enough. Success Now Depends On Real Skills, Innovation, Self-Confidence, And Strong Communication And Teamwork Abilities."
            goalTitle="Our Goal Is To Equip You With The Capabilities That Make You The Ideal Candidate For Any Organization:"
            goals={[
              "Professional Administrative Skills",
              "Practical Experience That Bridges Theory And Real-World Application",
              "A Deep Understanding Of The Work Environment And Its Demands",
            ]}
            showBorder={true}
          />
        </div>
      </section>
    </main>
  );
}
