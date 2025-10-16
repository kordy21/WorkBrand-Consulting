import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import ai from '../assets/images/AIII.webp';
import AAi from '../assets/images/aiedit.jpg';
import AboutProgram from "../component/trainig program/AboutProgram";
import MainTittle from "../component/sharedComponents/MainTittle";
import AI1 from '../assets/images/AI1.webp';
import AI2 from '../assets/images/AI2.webp';
import AI3 from '../assets/images/AI3.webp';
import AI4 from '../assets/images/AI4.webp';
import Synthesia from "../assets/Icons/Synthesia.svg";
import chatgpt from "../assets/Icons/chatgpt.svg";
import Otter from "../assets/Icons/Otter.ai.svg";
import Runway from "../assets/Icons/Runway.svg";
import Jasper from "../assets/Icons/Jasper.svg";
import Grammarly from "../assets/Icons/Grammarly.svg";
import Rasa from "../assets/Icons/Rasa.svg";
import CardLocation from "../component/sharedComponents/CardLocation";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import RightPlace from "../component/sharedComponents/RightPlace";
import Footer from "../component/sharedComponents/Footer";
import ModuleHelpSection from "../component/AI/ModuleHelpSection";
const AiPage = () => {
const data = [
  {
    image: Synthesia,
    tittle1: "Synthesia",
    description: "Create professional, engaging video content",
  },
  {
    image: chatgpt,
    tittle1: "ChatGPT",
    description: "Improve communication, writing, and idea generation",
  },
  {
    image: Otter,
    tittle1: "Otter.ai",
    description: "Convert speech to text for easier meeting documentation",
  },
  {
    image: Runway,
    tittle1: "Runway",
    description: "Edit videos and enhance visual quality.",
  },
  {
    image: Grammarly,
    tittle1: "Grammarly",
    description:
      "Enhance writing and grammar, enabling error-free professional documents.",
  },
  {
    image: Jasper,
    tittle1: "Grammarly",
    description:
      "Enhance writing and grammar, enabling error-free professional documents.",
  },
  {
    image: Rasa,
    tittle1: "Rasa",
    description: "Develop smart chat systems and improve customer service..",
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
        title="The Power of Artificial Intelligence (AI)"
        buttonText="Book your training"
        description="An engaging environment to learn, discuss, and grow.."
      />
      {/* fisst */}
      <section className="bg-custom-black">
        <div className="max-container">
          <AboutProgram
            imageSrc={AAi}
            title="About The Program"
            description="This is not old-school HR. We train you to become a business enabler – someone who drives performance and creates healthy, scalable company culture."
            goalTitle="Why take this Program?"
            goals={[
              "Because it shows you exactly how AI can save time, improve decisions, and open new career opportunities. You'll learn practical tools you can apply immediately, no matter your experience level.",
            ]}
          />
        </div>
      </section>
      {/* second */}
      <section className=" bg-custom-black">
        <div className="max-container">
          <div className="py-5">
            <MainTittle title="Key Benefits" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 ">
            <CardLocation
              image={AI1}
              title="A Brief History of AI"
              description="Develop strong leadership and communication skills that help you inspire others build confidence  and grow as a professional leader."
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI2}
              title="Adapting to a Changing Market"
              description="Master how to create clear actionable plans with measurable steps to reach your business goals efficiently and avoid wasted effort."
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI3}
              title="Enhancing Managerial & Personal Skills"
              description="Gain a deeper view of where your business stands understand its growth stage and identify what’s needed for the next level"
              whiteBackground={false}
              removeMB={true}
              showButton={false}
              showLocationButton={false}
              textColor="text-white"
            />
            <CardLocation
              image={AI4}
              title="Data Analysis & Smarter Decisions"
              description="Learn how to assess performance motivate your team  and achieve better outcomes by leading others effectively."
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
      <section className=" bg-custom-black">
        <div className="pb-5">
          <MainTittle title="Key AI Tools You’ll Learn" />
        </div>
        <div className="pb-5">
          <KeyFeature
            title="Our Features"
            align="left"
            white={true}
            icons={data}
            showTitle={false}
            transparent={true}
          />
        </div>
      </section>
      {/* fourth */}
      <section className="bg-custom-yellow">
        <div className="pt-16">
          <MainTittle title="How Will This Module Help You?" />
        </div>
        <div className="">
          <ModuleHelpSection
            title="How Will This Module Help You?"
            items={moduleItems}
          />
        </div>
        <div className="mt-5">
          <RightPlace />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AiPage;
