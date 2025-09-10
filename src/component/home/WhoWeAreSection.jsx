import React from "react";
import MainTittle from "../sharedComponents/MainTittle"; 
import doctor from "../../assets/images/drtantawy.webp"; 

const WhoWeAreSection = () => {
  return (
    <section className="max-container flex flex-col lg:flex-row items-center justify-center py-16 gap-5">
      <div className="block md:hidden">
        <MainTittle
          title="About Dr. Tarek El Tantawi"
          className="text-3xl lg:text-5xl font-bold mb-4"
          align="start"
        />
      </div>
      <p className="text-gray-700 mb-6 block md:hidden text-center">
        For many years, the entrepreneurial vision of businessman and corporate
        restructuring consultant Tarek El Tantawi has flourished, delivering
        consulting solutions and restructuring strategies for hundreds of
        projects across diverse sectors regionally and globally.
      </p>
      <div className="w-full lg:w-1/2">
        <img
          src={doctor}
          alt="doctor"
          className="w-full h-[465px] rounded-lg  p-5 md:p-0"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="hidden md:block">
          <MainTittle
            title="Who We Are"
            className="text-3xl lg:text-5xl font-bold mb-4"
            align="start"
          />
        </div>
        <p className="text-gray-700 mb-6 hidden md:block">
          We Are A Company That Encompasses All Possible Solutions For
          Everything Related To Business. We Have A Fully Integrated Team Led By
          Entrepreneur And Corporate Restructuring Consultant Tarek El-Tantawi
          To Assist All Entrepreneurs And Those Interested In The World Of
          Business Through Our Consulting And Training Services.
        </p>

        <div className="bg-custom-gradient-bg  rounded-lg shadow-white shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-center md:text-start">Philosophy & Vision</h3>
          <p className="text-gray-700 text-center md:text-start">
            Dr. Tarek's philosophy goes beyond theory: "Leadership isn’t just
            about vision; it’s about building structures that last and
            empowering people who lead." His mission is to cultivate the next
            generation of Arab leaders ready to navigate and revolutionize the
            business world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
