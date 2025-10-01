import React from "react";
import HeaderLayout from "../layers/HeaderLayout/HeaderLayout";
import OurImpactSection from "../sharedComponents/OurImpactSection";
import InsightsSection from "../home/InsightsSwction";
import Footer from "../sharedComponents/Footer";
import HeroSection from "../sharedComponents/HeroSection";
import Doctor from "../../assets/images/Doctor.webp";
import tarek from "../../assets/images/tannntawy.webp";
import WhoWeAreSection from "../home/WhoWeAreSection";
import ConsultingSection from "../home/ConsultingSection";
import benfit from "../../assets/images/beneft.webp";
import KeyFeature from "../sharedComponents/KeyFeature";
import icon1 from "../../assets/Icons/madrasra.svg";
import icon2 from "../../assets/Icons/mahkama.svg";
import icon3 from "../../assets/Icons/project.svg";
import icon4 from "../../assets/Icons/lamba.svg";
import icon5 from "../../assets/Icons/121212.svg";
import icon6 from "../../assets/Icons/121212.svg";
import MainTitle from "../sharedComponents/MainTittle";
import RightPlace from "../sharedComponents/RightPlace";
import Qualifications from '../DR-Tarek-El-Tantawi/Qualifications';
import AuthorThoughtLeader from '../DR-Tarek-El-Tantawi/AuthorThoughtLeader';
import Strategic from "../../assets/images/Strategic.webp";
import model  from "../../assets/images/Model.webp";
import Governmental from "../../assets/images/Governmental.webp";
import Human from "../../assets/images/Human.webp";
import Corporate from "../../assets/images/japan.webp";
import Coaching from "../../assets/images/japan1.webp";
import Brand from "../../assets/images/Brand.webp";
import LocationSection from '../sharedComponents/LocationSection'
import ContactUs from "../sharedComponents/ContactUs";
import MapSection from "../SingleService/MapSection";
import ProgramsSection  from '../DR-Tarek-El-Tantawi/ProgramsSection';
import doctor from "../../assets/images/drtantawy.webp"; 
import GuidingPhilosophy from "../DR-Tarek-El-Tantawi/GuidingPhilosophy";
const insightsData = [
  {
    image: Strategic,
    number: "1",
    title: "Strategic Planning & Organizational Transformation",
    description:
      "Guiding businesses through comprehensive planning and large-scale transformations to ensure long-term success and operational excellence.",
  },
  {
    image: model,
    number: "2",
    title: "Business Model Innovation & Market Expansion",
    description:
      "Designing innovative business models and strategies that drive market entry, competitiveness, and global expansion.",
  },
  {
    image: Governmental,
    number: "3",
    title: "Governmental Advisory & Policy Implementation",
    description:
      "Supporting governments with strategic advisory services, policy design, and effective implementation frameworks.",
  },
  {
    image: Human,
    number: "4",
    title: "Human Capital Development",
    description:
      "Building high-performing teams through advanced training, capacity-building, and employee engagement strategies.",
  },
  {
    image: Corporate,
    number: "5",
    title: "Corporate Risk Management",
    description:
      "Providing risk-conscious strategies that safeguard organizations during transformations, ensuring resilience and adaptability.",
  },
  {
    image: Coaching,
    number: "6",
    title: "Executive Coaching & Leadership",
    description:
      "mpowering executives and leaders with coaching programs that enhance decision-making, emotional intelligence, and effective leadership skills.",
  },
  {
    image: Brand,
    number: "7",
    title: "Brand Identity & Personal Branding",
    description:
      "Helping businesses and individuals craft unique identities that strengthen their presence, reputation, and influence.",
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
const tarektantawi = () => {
  return (
    <main className="relative w-full bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={tarek}
        title="DR. Tarek El Tantawi "
        buttonText="Book Your Consultation"
        description="With decades of entrepreneurial vision, Tarek El Tantawi has led hundreds of projects, delivering innovative consulting solutions and effective restructuring strategies across diverse industries, regionally and globally."
      />
      <section className="max-container ">
        <WhoWeAreSection
          mobileTitle="About Dr. Tarek El Tantawi"
          mobileDescription="For many years, the entrepreneurial vision of businessman and corporate restructuring consultant Tarek El Tantawi has flourished..."
          imageSrc={doctor}
          desktopTitle="About Dr. Tarek El Tantawi"
          philosophyDescription="For many years, the entrepreneurial vision of businessman and corporate restructuring consultant Dr. Tarek El Tantawi has flourished, delivering transformative solutions and strategies for hundreds of projects across diverse sectors, regionally and globally.
'"
        />
        <Qualifications />
      </section>
      <section className="w-full pt-12">
        <AuthorThoughtLeader />
      </section>
      <section>
        <InsightsSection
          any="yes"
          data={insightsData}
          sectionTitle="Areas of Expertise"
          sectionDescription="Strategic Consulting tailored for companies, business owners, and professionals — designed to boost efficiency, streamline operations, and guide your business to sustainable growth."
        />
        <div>
          <GuidingPhilosophy />
        </div>
        <LocationSection />

        <ProgramsSection
          sectionTitle="Dr. Tariq's Programs"
          sectionDescription="The following training programs are offered under the supervision of lecturer, businessman, and corporate restructuring consultant Tarek El Tantawy:"
          programs={[
            {
              image: Corporate,
              title: "Executive Preparation Program ",
              description: "(For Businessmen & Businesswomen)",
              buttonText: "Explore More",
            },
            {
              image: Coaching,
              title: "Qa3det Business",
              // description: "Qa3det Business",
              buttonText: "Explore More",
            },
          ]}
          ctaText="Start Your Consultation"
          ctaLink="/consultation"
        />
        <MainTitle
          title="Contact Us "
          description="We’re here to help your business grow."
        />

        <ContactUs
          phonesTel="+20 102 999 9210"
          phonesMob="+20 120 559 9333"
          email="info@workbrand.org"
          address="72 Gannet Al Dowal Al Arbaa St, Mohandessin, Giza, Egypt"
        />
        <MapSection />
      </section>

      <Footer />
    </main>
  );
};

export default tarektantawi;
