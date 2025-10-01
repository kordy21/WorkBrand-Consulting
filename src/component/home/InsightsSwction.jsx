import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainTitle from "../sharedComponents/MainTittle";
import InsightsCard from "../home/InsightsCard";
import { fadeInPlace, fadeInUp } from "../../utils/motionVariants";
import { motion } from "framer-motion";
import frame from '../../assets/images/frame.webp';
export default function InsightsSection({
  any,
  data,
  sectionTitle,
  sectionDescription,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  const MotionWrapper = any === "no" ? "div" : motion.div;
  const motionProps =
    any === "no"
      ? {}
      : {
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true },
        };

  return (
    <section className="my-12 max-container xl:px-0">
      {/* Title */}
      {/* <MotionWrapper
        {...motionProps}
        variants={any === "no" ? undefined : fadeInPlace}
      >
        <MainTitle title={sectionTitle} description={sectionDescription} />
      </MotionWrapper> */}
      <div
        className="flex justify-center items-center p-5 md:p-0 w-[600px] h-[600px] bg-no-repeat bg-center bg-contain mx-auto hidden  lg:block"
        style={{ backgroundImage: `url(${frame})` }}
      >
      </div>
      <div
        className="flex justify-center items-center p-5 md:p-0 w-[400px] h-[400px] bg-no-repeat bg-center bg-contain mx-auto block  lg:hidden"
        style={{ backgroundImage: `url(${frame})` }}
      >
      </div>

      {/* <MotionWrapper
        className="hidden grid-cols-3 gap-8 px-4 py-6 lg:grid md:px-0"
        {...motionProps}
        variants={any === "no" ? undefined : fadeInUp}
      >
        {data?.map((item, index) => (
          <InsightsCard
            key={index}
            image={item.image}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </MotionWrapper>

      <MotionWrapper
        {...motionProps}
        variants={any === "no" ? undefined : fadeInUp}
      >
        <div className="lg:hidden">
          <Slider {...settings} className="pb-4">
            {data?.map((item, index) => (
              <div key={index} className="p-4">
                <InsightsCard
                  image={item.image}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </MotionWrapper> */}
    </section>
  );
}
