import React from "react";
import { motion } from "framer-motion";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";
import LightButton from "../sharedComponents/LightButton";

const ServiceHeroDetails = ({ service, onClick }) => {
  const navigate = useNavigate();

  return (
    <section className="my-12">
      <div className="max-container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-12">
          {/* Image Section */}
          <motion.div
            className="order-2 col-span-6 lg:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={leftVariant}
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="object-cover w-full lg:h-[600px] rounded-lg shadow-md lg:block hidden"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center order-1 col-span-6 lg:order-2 lg:pl-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rightVariant}
          >
            <div className="flex items-center justify-center gap-3 mb-4 lg:justify-start">
              <h2
                className={`flex gap-3 pb-2 lg:mb-4 text-3xl lg:justify-start justify-center font-bold text-center lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text text-transparent`}
              >
                <img src={service.icon} className="lg:w-9" />
                {service.title}
              </h2>
            </div>

            <main className="text-center text-white lg:text-start xl:px-0">
              <p className="mb-4 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="block mb-8 lg:hidden">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="object-cover w-full h-[400px] rounded-lg shadow-md"
                />
              </div>
              <ul className="px-4 mb-4 space-y-3 xl:px-0 ">
                {service?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 ">
                    <img src={feature.icon} />
                    <span className="text-base text-start">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </main>

            <div className="mx-4 lg:mx-0 lg:w-1/2">
              <LightButton
                onClick={onClick}
                text={service.secondButtonText}
                TripleArrow={
                  <TripleArrowIcon
                    color={"custom-primary"}
                    hoverColor={"white"}
                  />
                }
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroDetails;
