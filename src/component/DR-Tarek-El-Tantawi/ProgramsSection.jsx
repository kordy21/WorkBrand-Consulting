import React from "react";
import MainTittle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from '../sharedComponents/TripleArrowIcon';
const ProgramsSection = ({
  sectionTitle,
  sectionDescription,
  programs,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="px-4 py-12 max-container">
      <MainTittle title={sectionTitle} description={sectionDescription} />

      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col flex-grow p-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {program.title}
              </h3>
              <p className="flex-grow mb-4 text-sm text-gray-600">
                {program.description}
              </p>
              <button className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700">
                {program.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <p className="mb-4 text-center text-gray-300">
          For More Details Or To Book Your Spot, Please Visit This Link.
        </p>
        <a href={ctaLink}>
          <CustomMainButton
            fullWidth
            text="Book Your Office Now"
            TripleArrow={
              <TripleArrowIcon color="text-white" hoverColor="black" />
            }
          />
        </a>
      </div>
    </section>
  );
};

export default ProgramsSection;
