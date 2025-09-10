import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";

const WhyChooseVirtualOffice = ({ features }) => {
  return (
    <section className="mb-12 ">
      <div className="max-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTitle
            title="Why Choose Our Virtual Offices?"
            description="Man in smart casual leading business workshop, modern boardroom, diagrams on screen, team engaged"
            colorDesc="white"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
            {features?.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-transparent border border-white shadow-md group rounded-2xl hover:shadow-lg backdrop-blur-sm"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseVirtualOffice;
