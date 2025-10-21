import React from "react";
import MainTittle from "./MainTittle";
import CardLocation from "../sharedComponents/CardLocation";
import Specialized from "../../assets/images/Specialized.webp";
import Assessment from "../../assets/images/Assessment.webp";
import carveLeft from "../../assets/images/carveLeft.webp";
import carveRight from "../../assets/images/carveRight.webp";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className=" py-5 md:pt-12  max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
          <MainTittle
            title="Consulting Services"
            description="Tailored solutions designed to guide organizations, entrepreneurs, and professionals toward sustainable growth and measurable impact"
            color="text-custom-blue"
          />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 gap-6 pt-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-12 md:p-0">
          <div className="flex justify-center lg:col-span-6 ">
            <CardLocation
              image={Assessment}
              title="Assessment Sessions:"
              description="Financial administrative and strategic evaluations to identify organizational strengths and weaknesses,
Feasibility and risk assessment of entrepreneurial ideas and projects,
Investment solutions meetings for selecting and expanding promising opportunities,
Institutional performance reviews to improve company outcomes
Career path evaluation and planning to shape future success"
              location="Giza, Egypt"
              buttonText="Explore Mohandessin Offices"
              link="/mohandessin-branch"
              whiteBackground={false}
            />
          </div>

          <div className="flex justify-center lg:col-span-6">
            <CardLocation
              image={Specialized}
              title="Specialized Consulting:"
              description="Strategic advisory from idea evaluation to sustainable growth planning,
Financial and administrative consulting for performance enhancement Reserve your consultation."
              location="Cairo, Egypt"
              buttonText="Explore Nasr City Offices"
              link="/nasr-city-branch"
              whiteBackground={false}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
