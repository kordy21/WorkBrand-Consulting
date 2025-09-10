import React from "react";
import bgSection from "../../assets/images/bg-sectionAbout.webp";
import {
  CheckCircleIcon,
  EyeIcon,
  HeartIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const StatementSection = () => {
  const cards = [
    {
      id: 1,
      icon: CheckCircleIcon,
      title: "Mission",
      description:
        "To empower business owners with smart, practical services that cover all business needs.",
    },
    {
      id: 2,
      icon: EyeIcon,
      title: "Vision",
      description:
        "To become the number one destination for fully integrated business solutions.",
    },
    {
      id: 3,
      icon: HeartIcon,
      title: "Core Values",
      description:
        "Professionalism – Innovation – Transparency – A Commitment to Excellence.",
    },
    {
      id: 4,
      icon: PencilIcon,
      title: "Our Promise",
      description:
        "We keep evolving to offer smart solutions that save time, reduce hassle, and drive real impact.",
    },
  ];

  return (
    <section
      className="px-4 py-16 mb-12 bg-center bg-cover xl:px-0 "
      style={{ backgroundImage: `url(${bgSection})` }}
    >
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="mb-2 text-xl font-bold text-center text-transparent md:text-start md:text-2xl bg-custom-gradient-orange bg-clip-text">
          Since Day One, Our Purpose Has Been Clear: To Truly Support Every
          Business Owner and Entrepreneur
        </h2>
        <p className=" mb-2 text-center text-white md:text-start xl:w-[70%]">
          We're not just an office provider — we deliver complete solutions to
          help you launch, grow, and scale with confidence. Our goal has always
          been to be the only partner you need to focus on your success.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-2 gap-3 mx-auto xl:gap-6 md:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              className="p-3 text-center transition bg-transparent border border-white shadow-md lg:p-6 rounded-xl lg:text-start hover:shadow-md"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 transition lg:mx-0 text-custom-primary" />
              <h3 className="mb-2 text-xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-white">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatementSection;
