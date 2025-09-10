import React from "react";
import HeroSection from "../sharedComponents/HeroSection";
import MainTitle from "../sharedComponents/MainTittle";
import CardLocation from "../home/CardLocation";
import Footer from "../sharedComponents/Footer";
import WhyChooseLocations from "../Office/WhyChooseLocations";
import Office from "../../assets/images/Offices.webp";
import Mohandsin from "../../assets/images/Almohandsin.webp";
import Nasr from "../../assets/images/Nacersity.webp";

import {
  UsersIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  ArrowPathRoundedSquareIcon,
  TruckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import HeaderLayout from "../layers/HeaderLayout/HeaderLayout";

const officeData = [
  {
    image: Mohandsin,
    title: "Mohandessin Branch",
    description:
      "Located in the heart of Mohandessin — directly in front of the metro and surrounded by all essential services and major banks — this branch provides a fully professional business environment ...",
    location: "Giza, Egypt",
    buttonText: "Explore Mohandessin Offices",
    link: "/mohandessin-branch",
    keyfeatures: [
      {
        icon: <UsersIcon className="w-6 h-6 text-custom-primary" />,
        text: "VIP meeting and training rooms in various sizes",
      },
      {
        icon: <BuildingOfficeIcon className="w-6 h-6 text-custom-primary" />,
        text: "Legal registration ready",
      },
      {
        icon: (
          <ArrowPathRoundedSquareIcon className="w-6 h-6 text-custom-primary" />
        ),
        text: "Complete admin & tech support to keep you focused",
      },
      {
        icon: <TruckIcon className="w-6 h-6 text-custom-primary" />,
        text: "On-site parking availability",
      },
    ],
  },
  {
    image: Nasr,
    title: "Nasr City Branch",
    description:
      "Strategically located in bustling Nasr City, this branch is ideal for startups and small businesses seeking reliable services and a practical workspace in the middle of everything.",
    location: "Cairo, Egypt",
    buttonText: "Explore Nasr City Offices",
    link: "/nasr-city-branch",
    keyfeatures: [
      {
        icon: <UsersIcon className="w-6 h-6 text-custom-primary" />,
        text: "choose Flexible private your rooms for your team",
      },
      {
        icon: (
          <WrenchScrewdriverIcon className="w-6 h-6 text-custom-priamary" />
        ),
        text: "Full reception service",
      },
      {
        icon: (
          <ArrowPathRoundedSquareIcon className="w-6 h-6 text-custom-primary" />
        ),
        text: "Dedicated media setup for podcasts & content creation",
      },
      {
        icon: <GlobeAltIcon className="w-6 h-6 text-custom-primary" />,
        text: "High-speed internet and utilities included",
      },
    ],
  },
];

const Offices = () => {
  return (
    <div className="bg-custom-gradient-bg">
      {/* Header */}
      <HeaderLayout />
      <HeroSection
        backgroundImage={Office}
        title="Offices"
        description="Fully-equipped private and shared offices in Mohandessin & Nasr City. Move in, plug in, and start working — no delays, no stress."
      />

      <div className="flex flex-col my-12 max-container ">
        <div className="hidden md:block md:p-5 lg:p-0">
          <MainTitle
            title="Our offices"
            subdescription=" Locations"
            description="Discover your new workspace in Cairo’s top business zones — fully equipped, modern, and built to inspire growth."
            align="start"
          />
        </div>
        <div className="block md:hidden">
          <MainTitle
            title="Our Locations"
            subdescription="offices"
            description="Discover your new workspace in Cairo’s top business zones — fully equipped, modern, and built to inspire growth."
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-4 md:flex-row lg:px-0">
          {officeData.map((office, index) => (
            <CardLocation
              key={index}
              image={office.image}
              imageBG="/bg.jpg"
              title={office.title}
              description={office.description}
              location={office.location}
              buttonText={office.buttonText}
              link={office.link}
              textfeature="Key Features:"
              keyfeatures={office.keyfeatures}
              whiteBackground={true}
              removeMB={true}
            />
          ))}
        </div>
      </div>
      <WhyChooseLocations />
      <Footer />
    </div>
  );
};

export default Offices;
