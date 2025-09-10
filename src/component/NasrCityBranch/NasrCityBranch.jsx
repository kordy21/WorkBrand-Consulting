import React from "react";
import view from "../../assets/images/Nasir_city1.webp";
import videowalker from "../../assets/images/Nasir_City2.webp";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import CustomMainButton from "../sharedComponents/CustomMainButton";

const NasrCityBranch = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-12 lg:flex-row max-container">
        <div className="w-full lg:w-1/2">
          <h2 className="block mt-12 mb-8 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary lg:hidden">
            View Gallery
          </h2>
          <img
            src={view}
            alt="فرع مدينة نصر"
            className="w-full h-[600px] lg:h-[600px] object-cover "
          />
        </div>

        <div className="flex flex-col justify-center w-full px-4 mt-8 lg:w-1/2 lg:px-8 lg:mt-0">
          <h2 className="hidden mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary lg:block">
            View Gallery
          </h2>

          <div className="space-y-4 text-center lg:text-left">
            <p className="text-lg font-semibold leading-relaxed text-gray-600">
              Visual Highlights, Tell Our Brand’s Full Story
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Step inside our world through curated visuals — from our vibrant
              workspaces and premium consulting sessions to dynamic training
              moments and sleek website launches. Every image captures a piece
              of what makes WorkBrand different.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mb-12 lg:flex-row max-container">
        <div className="block w-full lg:w-1/2 lg:hidden">
          <h2 className="block mt-12 mb-8 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary lg:hidden">
            Video Walkthrough
          </h2>
          <img
            src={videowalker}
            alt="فرع مدينة نصر فيديو"
            className="w-full h-[600px] object-cover "
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-5 px-4 mt-8 lg:w-1/2 md:justify-start md:items-start lg:mt-0">
          <h2 className="hidden mb-4 text-3xl font-bold text-center lg:text-left lg:text-5xl text-custom-primary lg:block">
            Video Walkthrough
          </h2>

          <div className="space-y-4 text-center lg:text-left">
            <p className="text-lg font-semibold leading-relaxed text-gray-600">
              Explore our spaces, services, and client success stories
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Take a quick visual tour inside WorkBrand — see our inspiring
              workspaces, expert-led services, and how we help brands grow every
              day.
            </p>
          </div>
          <div className="flex justify-center items-center  mx-auto lg:mx-0 lg:justify-start lg:text-start md:w-[50%]  ">
            <CustomMainButton
              fullWidth
              text={"Explore Training Tracks"}
              TripleArrow={
                <TripleArrowIcon color={"text-white"} hoverColor={"white"} />
              }
            />
          </div>
        </div>

        <div className="hidden w-full lg:w-1/2 lg:block">
          <img
            src={videowalker}
            alt="فرع المهندسين فيديو"
            className="w-full h-[600px] object-cover "
          />
        </div>
      </section>
    </>
  );
};

export default NasrCityBranch;
