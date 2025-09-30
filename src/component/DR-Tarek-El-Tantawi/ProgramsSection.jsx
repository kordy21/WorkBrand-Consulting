import React from "react";
import MainTittle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from '../sharedComponents/TripleArrowIcon';
import bg from '../../assets/images/bg-square.png';
const ProgramsSection = ({
  sectionTitle,
  sectionDescription,
  programs,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className=" bg-custom-gradient-black px-4 my-12 ">
      <div className="bg-custom-gradient-black px-4 py-12 max-container">
        <MainTittle
          title={sectionTitle}
          description={sectionDescription}
          align="start"
          color="no"
        />

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-80 object-cover"
              />
              <div className="flex flex-col flex-grow p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {program.title}
                </h3>
                <p className="flex-grow mb-4 text-sm text-gray-600">
                  {program.description}
                </p>
                <div className="flex gap-4">
                  <a href={ctaLink} className="flex-1">
                    <CustomMainButton
                      fullWidth
                      text="Book Your Office Now"
                      TripleArrow={
                        <TripleArrowIcon
                          color="text-white"
                          hoverColor="black"
                        />
                      }
                    />
                  </a>
                  <a href={ctaLink} className="flex-1">
                    <CustomMainButton
                      fullWidth
                      text="Book Your Office Now"
                      TripleArrow={
                        <TripleArrowIcon
                          color="text-white"
                          hoverColor="black"
                        />
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-center justify-center mt-10">
          <a href={ctaLink}>
            <CustomMainButton
              fullWidth
              text="Book Your Office Now"
              TripleArrow={
                <TripleArrowIcon color="text-white" hoverColor="black" />
              }
            />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;
