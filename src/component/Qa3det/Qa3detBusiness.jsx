import React from "react";
import HeaderLayout from "../layers/HeaderLayout/HeaderLayout";
import HeroSection from "../sharedComponents/HeroSection";
import MainTittle from "../sharedComponents/MainTittle";
import Qaadet from '../../assets/images/Qa3det.webp';
import qa3da from '../../assets/images/Qa3det.webp';
import cabhvyse from '../../assets/images/case.webp';
import market1 from '../../assets/images/market1.webp';
import busting from '../../assets/images/busting.webp';
import growth1 from '../../assets/images/growth1.webp';
import owner1 from '../../assets/images/owner1.webp';
import strategy1 from '../../assets/images/strategy1.webp';
import AboutProgram from "../trainig program/AboutProgram";
import benefit1 from '../../assets/images/benefit1.webp';
import benefit2 from '../../assets/images/benefit2.webp';
import benefit3 from '../../assets/images/benefit3.webp';
import benefit4 from '../../assets/images/benefit4.webp';
import Footer from "../sharedComponents/Footer";
import QualificationsGrid from "../DR-Tarek-El-Tantawi/Qualifications";
import CardLocation from "../sharedComponents/CardLocation";
import { Description } from "@headlessui/react";
import InfoCards from "./InfoCards";
export default function Qa3detBusiness() {
        const qualificationsData = [
          {
            img: strategy1,
            title: "Strategic Planning",
            describtion:
              "Clear steps to craft an effective business plan that helps you launch with confidence and achieve your goals faster.",
          },
          {
            img: owner1,
            title: "Owner vs. Entrepreneur",
            describtion:
              "Understand the key differences between a business owner and an entrepreneur, and the skills required for each.",
          },
          {
            img: growth1,
            title: "Sustained Growth",
            describtion:
              "The essential factors that ensure any business can grow and thrive in the long run",
          },
          {
            img: busting,
            title: "Myth Busting",
            describtion:
              "Debunking the most common misconceptions in marketing, management, and finance with practical insights.",
          },
          {
            img: market1,
            title: "Egyptian Market",
            describtion:
              "Understanding the characteristics of the Egyptian market, common mistakes entrepreneurs make, and how to avoid them.",
          },
          {
            img: cabhvyse,
            title: " Case Studies",
            describtion:
              "Learning from global success and failure stories to gain valuable lessons for your own business journey.",
          },
          {
            img: strategy1,
            title: "Strategic Planning",
            describtion:
              "Clear steps to craft an effective business plan that helps you launch with confidence and achieve your goals faster.",
          },
          {
            img: owner1,
            title: "Owner vs. Entrepreneur",
            describtion:
              "Understand the key differences between a business owner and an entrepreneur, and the skills required for each.",
          },
          {
            img: market1,
            title: "Egyptian Market",
            describtion:
              "Understanding the characteristics of the Egyptian market, common mistakes entrepreneurs make, and how to avoid them.",
          },
          {
            img: cabhvyse,
            title: " Case Studies",
            describtion:
              "Learning from global success and failure stories to gain valuable lessons for your own business journey.",
          },
          {
            img: strategy1,
            title: "Strategic Planning",
            describtion:
              "Clear steps to craft an effective business plan that helps you launch with confidence and achieve your goals faster.",
          },
          {
            img: owner1,
            title: "Owner vs. Entrepreneur",
            describtion:
              "Understand the key differences between a business owner and an entrepreneur, and the skills required for each.",
          },
        ];
        const data = [
          { text: "Over 26 Years Of Hands-On Business Consulting Experience." },
          { text: "Holds A PhD In Strategic Management From The USA." },
          { text: "Author Of 16+ Books On Management And Marketing." },
        ];
    return (
      <>
        <HeaderLayout />
        <main>
          <HeroSection
            backgroundImage={Qaadet}
            title="Qa3det Business"
            buttonText="Book your training"
            description="Design Your Future with 26 Years of Expertise and development"
            isSmall={true}
          />
          {/* fisst */}
          <section className="bg-custom-black">
            <div className="max-container">
              <AboutProgram
                imageSrc={qa3da}
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
          {/* Second */}
          <section className="bg-white pb-5 ">
            <div className="max-container">
              <div className="pt-5">
                <MainTittle
                  title="Key Topics Covered"
                  description="Essential topics to launch and grow your business"
                />
              </div>
              <QualificationsGrid
                qualifications={qualificationsData}
                showTitle={false}
              />
            </div>
          </section>
          {/* third */}
          <section className=" bg-custom-black">
            <div className="max-container">
              <div className="py-5">
                <MainTittle title="Key Benefits" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
                <CardLocation
                  image={benefit1}
                  title="Keynote Sessions"
                  description="Open discussions with thought leaders and influencers about the future of technology, startup investment, and global trends"
                  whiteBackground={false}
                  removeMB={true}
                  showButton={false}
                  showLocationButton={false}
                />
                <CardLocation
                  image={benefit2}
                  title="Keynote Sessions"
                  description="Open discussions with thought leaders and influencers about the future of technology, startup investment, and global trends"
                  whiteBackground={false}
                  removeMB={true}
                  showButton={false}
                  showLocationButton={false}
                />
                <CardLocation
                  image={benefit3}
                  title="Keynote Sessions"
                  description="Open discussions with thought leaders and influencers about the future of technology, startup investment, and global trends"
                  whiteBackground={false}
                  removeMB={true}
                  showButton={false}
                  showLocationButton={false}
                />
                <CardLocation
                  image={benefit4}
                  title="Keynote Sessions"
                  description="Open discussions with thought leaders and influencers about the future of technology, startup investment, and global trends"
                  whiteBackground={false}
                  removeMB={true}
                  showButton={false}
                  showLocationButton={false}
                />
              </div>
            </div>
          </section>
          {/* fourth */}
          <section className="bg-custom-yellow">
            <div className="pt-5">
              <MainTittle title="About Tarek El-Tantawi" />
            </div>
            <div>
              <InfoCards items={data} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}
