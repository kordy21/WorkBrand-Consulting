import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionVariants";

const MapSection = () => {
  return (
    <section className=" mb-[-6rem]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-full overflow-hidden shadow-md lg:w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.554495093557!2d31.19917869999999!3d30.049636500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584124d86c3eed%3A0x57bfeca20492f00f!2sWork%20Brand%20Office%20Space%20-%20Mohandeseen%20Branch!5e0!3m2!1sar!2seg!4v1757312235964!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Work Brand Office - Mohandeseen"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default MapSection;
