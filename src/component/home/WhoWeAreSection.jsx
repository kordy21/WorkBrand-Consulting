import React from "react";
import MainTittle from "../sharedComponents/MainTittle";

const WhoWeAreSection = ({
  mobileTitle,
  mobileDescription,
  imageSrc,
  desktopTitle,
  desktopDescription,
  philosophyTitle,
  philosophyDescription,
}) => {
  return (
    <section className="max-container flex flex-col lg:flex-row items-center justify-center py-16 gap-5">
      {/* Mobile Title & Description */}
      <div className="block md:hidden">
        <MainTittle
          title={mobileTitle}
          className="text-3xl lg:text-5xl font-bold mb-4"
          align="start"
        />
      </div>
      <p className="text-gray-700 mb-6 block md:hidden text-center">
        {mobileDescription}
      </p>

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={imageSrc}
          alt="who we are"
          className="w-full h-[465px] rounded-lg p-5 md:p-0"
        />
      </div>

      {/* Desktop Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="hidden md:block">
          <MainTittle
            title={desktopTitle}
            className="text-3xl lg:text-5xl font-bold mb-4"
            align="start"
          />
        </div>


        <div className="bg-custom-gradient-bg rounded-lg shadow-white shadow-lg">
          <p className="text-gray-700 text-center md:text-start">
            {philosophyDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
