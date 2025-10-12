import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import OurImpactSection from "../component/sharedComponents/OurImpactSection";
import InsightsSection from "../component/home/InsightsSwction";
import Footer from "../component/sharedComponents/Footer";
import HeroSection from "../component/sharedComponents/HeroSection";
import Doctor from "../assets/images/Doctor.webp";
import WhoWeAreSection from "../component/home/WhoWeAreSection";
import ConsultingSection from "../component/home/ConsultingSection";
import benfit from "../assets/images/beneft.webp";
import KeyFeature from "../component/sharedComponents/KeyFeature";
import icon1 from "../assets/Icons/madrasra.svg";
import icon2 from "../assets/Icons/mahkama.svg";
import icon3 from "../assets/Icons/project.svg";
import icon4 from "../assets/Icons/lamba.svg";
import icon5 from "../assets/Icons/121212.svg";
import MainTitle from "../component/sharedComponents/MainTittle";
import RightPlace from "../component/sharedComponents/RightPlace";
import coparte from "../assets/images/Coparate.webp";
import investment from "../assets/images/investment.webp";
import instituion from "../assets/images/Institutional.webp";
import finiacial from "../assets/images/finiacial.webp";
import hr from "../assets/images/hr.webp";
import marketing from "../assets/images/marketing.webp";
import doctor from "../assets/images/drtantawy.webp"; 

const insightsData = [
  {
    image: coparte,
    number: "1",
    title: "Corporate Restructuring",
    description:
      "Identify Problems Hindering Growth, Create Modern Organizational Structures, Define Roles, And Study Markets & Competitors For Better Expansion.",
  },
  {
    image: investment,
    number: "2",
    title: "Investment Consulting",
    description:
      "Evaluate ROI, identify success & failure reasons, conduct thorough market analysis, and determine the optimal timing for investments.",
  },
  {
    image: instituion,
    number: "3",
    title: "Institutional Evaluation",
    description:
      "Use data-driven performance analysis to evaluate and improve operations. Develop strategic plans. Formulate clear mission & vision to achieve measurable goals.",
  },
  {
    image: finiacial,
    number: "4",
    title: "Financial & Management",
    description:
      "Analyze strengths, weaknesses, opportunities, and threats. Solve financial challenges to increase profitability. Guide expansion and decision-making.",
  },
  {
    image: hr,
    number: "5",
    title: "HR Consulting",
    description:
      "Evaluate employee performance with modern tools. Restructure teams and establish the right workplace culture. Optimize hiring and career paths.",
  },
  {
    image: marketing,
    number: "6",
    title: "Marketing Consulting",
    description:
      "Study institutional needs and operations. Develop and supervise marketing strategies. Conduct market research and build brand loyalty.",
  },
];
const data = [
  {
    image: icon1,
    tittle1: "CEOs",
    description:
      "Leaders overseeing strategic direction and corporate governance to ensure business continuity and market leadership.",
  },
  {
    image: icon2,
    tittle1: "Board Chairpersons",
    description:
      "Leaders overseeing strategic direction and corporate governance to ensure business continuity and market leadership",
  },
  {
    image: icon3,
    tittle1: "Project and Company Owners",
    description:
      "Owners looking to enhance their operations, profitability, and prepare their businesses for expansion.",
  },
  {
    image: icon4,
    tittle1: "Entrepreneurs and investors",
    description:
      "Individuals seeking innovative business opportunities, market insights, and investment evaluation to maximize returns.",
  },
  {
    image: icon5,
    tittle1: "Small and medium enterprises",
    description:
      "Growing businesses that need operational, financial, and marketing guidance to thrive in competitive markets.",
  },
];
const Home = () => {
  return (
    <main className="relative w-full bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={Doctor}
        title="Consulting services "
        buttonText="Book Your Consultation"
        description="Years of experience in consulting and corporate management… drawing the path to success in your business."
      />
      <section className="max-container ">
        <WhoWeAreSection
          mobileTitle="About Dr. Tarek El Tantawi"
          mobileDescription="For many years, the entrepreneurial vision of businessman and corporate restructuring consultant Tarek El Tantawi has flourished..."
          imageSrc={doctor}
          desktopTitle="Who We Are"
          desktopDescription="We Are A Company That Encompasses All Possible Solutions For Everything Related To Business..."
          philosophyTitle="Philosophy & Vision"
          philosophyDescription="Dr. Tarek's philosophy goes beyond theory: 'Leadership isn’t just about vision; it’s about building structures that last...'"
        />
        <OurImpactSection />
        <InsightsSection
          any="yes"
          data={insightsData}
          sectionTitle="Our Consulting Services"
          sectionDescription="Strategic Consulting tailored for companies, business owners, and professionals — designed to boost efficiency, streamline operations, and guide your business to sustainable growth."
        />
        <ConsultingSection
          image={benfit}
          title="Benefits From The Consulting Sessions"
          paragraphs={[
            "If You Are Interested In The Administrative Development Of Institutions And Their Evaluation, You Will Be Provided With Strategic Insight Based On Scientific And Practical Experience To Solve The Problem And Guide You Toward The Necessary Key Points To Stay On The Correct Path And Achieve Success.",
            "If You Are Interested In Investment, Investment Ideas And Suitable Projects Will Be Presented Based On The Available Capital, Considering National Economic Trends To Achieve The Highest Possible Return.",
            "Consulting Sessions With Strategic Expert Tarek El-Tantawi Provide A Deep And Useful Vision That Contributes To Achieving Success And Growth For Both Institutions And Individuals, Especially In Investment Solutions And Evaluation Of Innovative Ideas And Verifying Their Innovation Before Planning.",
          ]}
        />
        <div className="mt-10">
          <MainTitle title="Who is targeted?" />
        </div>
        <KeyFeature
          title="Our Features"
          align="center"
          white={true}
          icons={data}
          showTitle={false}
        />

        <RightPlace />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
