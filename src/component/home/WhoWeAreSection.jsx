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
    <section className="flex flex-col items-center justify-center gap-6 py-6 md:py-12 max-container lg:flex-row">
      {/* Mobile Title & Description */}
      <div className="block md:hidden">
        <MainTittle
          title={mobileTitle}
          className="mb-4 text-3xl font-bold lg:text-5xl"
          align="start"
        />
      </div>
      <p className="block mb-0 text-center text-gray-700 md:mb-6 md:hidden">
        {mobileDescription}
      </p>

      {/* Image */}
      <div className="w-full lg:w-[50%]">
        <img
          src={imageSrc}
          alt="who we are"
          className="w-full h-[465px] object-cover rounded-lg p-5 md:p-0"
        />
      </div>

      {/* Desktop Content */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <div className="hidden md:block">
          <MainTittle
            title={desktopTitle}
            className="mb-4 text-3xl font-bold lg:text-5xl"
            align="start"
          />
        </div>


        <div className="rounded-lg ">
          <p className="p-5 text-center text-gray-700 md:text-start md:p-0">
            {philosophyDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
