import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { leftVariant, rightVariant } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

// Import images
import virtualOfficeImg1 from "../../assets/images/Virtual_Office_1.webp";
import virtualOfficeImg2 from "../../assets/images/AboutSection.webp";
import virtualOfficeImg3 from "../../assets/images/Virtual_Office_2.webp";
import privateOfficeImg1 from "../../assets/images/Private_Office_1.webp";
import meetingRoomsImg1 from "../../assets/images/Meeting_rooms_1.webp";
import meetingRoomsImg2 from "../../assets/images/Virtual_Office_2.webp";
import meetingRoomsImg3 from "../../assets/images/Offices_img.webp";
import trainingRoomsImg1 from "../../assets/images/Training_rooms_1.webp";
import trainingRoomsImg2 from "../../assets/images/Training rooms 2.webp";
import trainingRoomsImg3 from "../../assets/images/Training rooms 3.webp";

import virtualOfficeIcon from "../../assets/Icons/Virtual_Office_Icon.svg";
import privateOfficeIcon from "../../assets/Icons/Coworking_Space_Icon.svg";
import meetingRoomsIcon from "../../assets/Icons/Meeting_Room_Icon.svg";
import trainingRoomsIcon from "../../assets/Icons/Training rooms Icon.svg";

import virtualOfficeIconList1 from "../../assets/Icons/virtualOfficeIconList1.svg";
import virtualOfficeIconList2 from "../../assets/Icons/virtualOfficeIconList2.svg";
import virtualOfficeIconList3 from "../../assets/Icons/virtualOfficeIconList3.svg";
import virtualOfficeIconList4 from "../../assets/Icons/virtualOfficeIconList4.svg";
import virtualOfficeIconList5 from "../../assets/Icons/virtualOfficeIconList5.svg";
import virtualOfficeIconList6 from "../../assets/Icons/virtualOfficeIconList6.svg";

import privateOfficeImgList1 from "../../assets/Icons/privateOfficeImgList1.svg";
import privateOfficeImgList2 from "../../assets/Icons/privateOfficeImgList2.svg";
import privateOfficeImgList3 from "../../assets/Icons/privateOfficeImgList3.svg";
import privateOfficeImgList4 from "../../assets/Icons/privateOfficeImgList4.svg";
import privateOfficeImgList5 from "../../assets/Icons/privateOfficeImgList5.svg";
import privateOfficeImgList6 from "../../assets/Icons/privateOfficeImgList6.svg";
import privateOfficeImgList7 from "../../assets/Icons/privateOfficeImgList7.svg";

import meetingRoomsIconList1 from "../../assets/Icons/meetingRoomsIconList1.svg";
import meetingRoomsIconList2 from "../../assets/Icons/meetingRoomsIconList2.svg";
import meetingRoomsIconList3 from "../../assets/Icons/meetingRoomsIconList3.svg";
import meetingRoomsIconList4 from "../../assets/Icons/meetingRoomsIconList4.svg";

import trainingRoomsIconList1 from "../../assets/Icons/trainingRoomsIconList1.svg";
import trainingRoomsIconList2 from "../../assets/Icons/trainingRoomsIconList2.svg";
import trainingRoomsIconList3 from "../../assets/Icons/trainingRoomsIconList3.svg";
import trainingRoomsIconList4 from "../../assets/Icons/trainingRoomsIconList4.svg";
import trainingRoomsIconList5 from "../../assets/Icons/trainingRoomsIconList5.svg";

import ImageGallery from "../sharedComponents/ImageGallery";
import VirtualOfficeForm from "../SingleService/VirtualOfficeForm";
import PrivateOfficeForm from "../SingleService/PrivateOfficeForm";
import MeetingRoomsForm from "../SingleService/MeetingRoomsForm";
import TrainingRoomsForm from "../SingleService/TrainingRoomsForm";
const ServicesDetailSections = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [serviceSlug, setServiceSlug] = useState("");
  const servicesDataPartOne = [
    {
      id: 1,
      title: "Virtual Office",
      icon: virtualOfficeIcon,
      description:
        "Experience the flexibility of a professional business address without the physical office. Perfect for startups and remote teams who need prestige and convenience.",
      features: [
        {
          text: "Fully Furnished & Ready to Use",
          icon: virtualOfficeIconList1,
        },
        {
          text: "Flexible Lease Terms",
          icon: virtualOfficeIconList2,
        },
        {
          text: "24/7 Secure Access",
          icon: virtualOfficeIconList3,
        },
        {
          text: "High-Speed Internet & IT Support",
          icon: virtualOfficeIconList4,
        },
        {
          text: "Access to Meeting Rooms",
          icon: virtualOfficeIconList5,
        },
        {
          text: "Ergonomic Furniture",
          icon: virtualOfficeIconList1,
        },
        {
          text: "Customizable Workspace",
          icon: virtualOfficeIconList6,
        },
      ],
      image: virtualOfficeImg1,
      images: [virtualOfficeImg1, virtualOfficeImg2, virtualOfficeImg3],
      buttonText: "Explore More",
      secondButtonText: "Start Your Office",
      textColor: "text-white",
      layout: "left",
      link: "virtual-office",
    },
    {
      id: 2,
      title: "Private Office",
      icon: privateOfficeIcon,
      description:
        "Secure your own dedicated office space tailored for productivity and privacy, designed with comfort and professionalism in mind.",
      features: [
        {
          text: "Prime Business Address in Central Cairo",
          icon: privateOfficeImgList1,
        },
        {
          text: "Receive Your Mail & Tax Visits Professionally",
          icon: privateOfficeImgList2,
        },
        {
          text: "Dedicated Team for Call Answering & Follow-Up",
          icon: privateOfficeImgList3,
        },
        {
          text: " Legal Document Support",
          icon: privateOfficeImgList4,
        },
        {
          text: "Remote Access to Office Services",
          icon: privateOfficeImgList5,
        },
        {
          text: "Flexible Plans",
          icon: privateOfficeImgList6,
        },
        {
          text: "Boost Business Credibility",
          icon: privateOfficeImgList7,
        },
      ],
      image: privateOfficeImg1,
      images: [privateOfficeImg1, virtualOfficeImg2, virtualOfficeImg3],
      buttonText: "Explore More",
      secondButtonText: "Start Your Office",
      textColor: "text-white",
      layout: "right",
      link: "private-office",
    },
  ];
  const servicesDataPartTwo = [
    {
      id: 3,
      title: "Meeting Rooms",
      icon: meetingRoomsIcon,
      description:
        " We provide a calm, professional environment ideal for hosting important meetings. Our spaces are thoughtfully designed to enhance focus and productivity—featuring comfortable furnishings, optimal lighting, and decor that sets the right tone for success.",
      features: [
        {
          text: "Fully equipped with LCD screens, projectors, whiteboards, markers, and flip charts",
          icon: meetingRoomsIconList1,
        },
        {
          text: "Receive Your Mail & Tax Visits Professionall",
          icon: meetingRoomsIconList2,
        },
        {
          text: "Complimentary beverages for guests",
          icon: meetingRoomsIconList3,
        },
        {
          text: "Comfortable and stylish interior setup",
          icon: meetingRoomsIconList1,
        },
        {
          text: "Flexible booking options (hourly / daily)",
          icon: meetingRoomsIconList4,
        },
      ],
      image: meetingRoomsImg1,
      images: [meetingRoomsImg1, meetingRoomsImg2, meetingRoomsImg3],
      buttonText: "Explore More",
      secondButtonText: "Start Your Office",
      textColor: "text-black",
      layout: "left",
      link: "meeting-rooms",
    },
    {
      id: 4,
      title: "Training Rooms",
      icon: trainingRoomsIcon,
      description: "Dynamic halls designed for workshops, courses, and events.",
      features: [
        {
          text: "Custom seating capacity",
          icon: trainingRoomsIconList1,
        },
        {
          text: "Projectors & sound systems",
          icon: trainingRoomsIconList2,
        },
        {
          text: "Interactive layout for engagement",
          icon: trainingRoomsIconList3,
        },
        {
          text: "Technical support during sessions",
          icon: trainingRoomsIconList4,
        },
        {
          text: "Learning-friendly atmosphere",
          icon: trainingRoomsIconList5,
        },
      ],
      image: trainingRoomsImg1,
      images: [trainingRoomsImg1, trainingRoomsImg2, trainingRoomsImg3],
      buttonText: "Explore More",
      secondButtonText: "Start Your Office",
      textColor: "text-black",
      layout: "right",
      link: "training-rooms",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col gap-12 py-12 mb-0 bg-custom-gradient-black">
        {servicesDataPartOne.map((service, index) => (
          <div key={service.id} className={``}>
            <div className="max-container">
              <div className="flex items-center ">
                {/* Content Section */}
                <motion.div
                  className={`flex flex-col justify-center  lg:w-1/2 lg:m-0 ${
                    service.layout === "left"
                      ? "lg:pl-[50px] lg:order-2 order-1"
                      : "lg:pr-[50px] lg:order-1 order-1"
                  }`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={
                    service.layout === "left" ? leftVariant : rightVariant
                  }
                >
                  <h2
                    className={`flex gap-3 pb-2 mb-4 text-3xl lg:justify-start justify-center font-bold text-center lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text text-transparent`}
                  >
                    <img src={service.icon} className="lg:w-9" />
                    {service.title}
                  </h2>
                  <p className="block px-4 mb-6 text-lg leading-relaxed text-center text-white lg:hidden lg:text-start xl:px-0">
                    {service.description}
                  </p>

                  <div className={`block lg:hidden mb-8`}>
                    {/* <ImageGallery gallery={service?.images} rounded={true} /> */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-[500px] lg:h-[650px] shadow-md"
                    />
                  </div>

                  <main
                    className={` text-center lg:text-start xl:px-0 ${service.textColor}`}
                  >
                    <p className="hidden mb-6 text-lg leading-relaxed lg:block ">
                      {service.description}
                    </p>

                    <ul className="px-4 mb-8 space-y-3 xl:px-0">
                      {service?.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 ">
                          <img src={feature.icon} />
                          <span className="text-base">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </main>

                  <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
                    <div className="w-auto">
                      <CustomMainButton
                        fullWidth
                        text={service.buttonText}
                        onClick={() => navigate(service.link)}
                        TripleArrow={<TripleArrowIcon />}
                      />
                    </div>
                    <div className="w-auto">
                      <LightButton
                        onClick={() => {
                          setServiceSlug(service.link);
                          setShow(true);
                        }}
                        text={service.secondButtonText}
                        TripleArrow={
                          <TripleArrowIcon
                            color={"custom-primary"}
                            hoverColor={"white"}
                          />
                        }
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className={`lg:w-1/2 hidden lg:block ${
                    service.layout === "left" ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={
                    service.layout === "left" ? rightVariant : leftVariant
                  }
                >
                  {/* <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-[500px] lg:h-[650px] rounded-lg shadow-md"
                  /> */}
                  <ImageGallery
                    gallery={service?.images}
                    height={650}
                    rounded={true}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12 py-12 bg-custom-gradient-bg">
        {servicesDataPartTwo.map((service, index) => (
          <div key={service.id} className={``}>
            <div className="max-container">
              <div className="flex items-center ">
                {/* Content Section */}
                <motion.div
                  className={`flex flex-col justify-center  lg:w-1/2 lg:m-0 ${
                    service.layout === "left"
                      ? "lg:pl-[50px] lg:order-2 order-1"
                      : "lg:pr-[50px] lg:order-1 order-1"
                  }`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={
                    service.layout === "left" ? leftVariant : rightVariant
                  }
                >
                  <h2
                    className={`flex gap-3 pb-2 mb-4 text-3xl lg:justify-start justify-center font-bold text-center lg:text-left lg:text-5xl bg-custom-gradient-orange bg-clip-text text-transparent`}
                  >
                    <img src={service.icon} className="lg:w-9" />
                    {service.title}
                  </h2>
                  <p className="block px-4 mb-6 text-lg leading-relaxed text-center text-black lg:hidden lg:text-start xl:px-0">
                    {service.description}
                  </p>

                  <div className={`block lg:hidden mb-8`}>
                    {/* <ImageGallery gallery={service?.images} rounded={true} /> */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-[500px] lg:h-[650px] rounded-lg shadow-md"
                    />
                  </div>

                  <main
                    className={` text-center lg:text-start xl:px-0 ${service.textColor}`}
                  >
                    <p className="hidden mb-6 text-lg leading-relaxed lg:block ">
                      {service.description}
                    </p>

                    <ul className="px-4 mb-8 space-y-3 xl:px-0">
                      {service?.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 ">
                          <img src={feature.icon} />
                          <span className="text-base">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </main>

                  <div className="flex justify-center w-full gap-4 px-4 mt-5 lg:justify-start lg:px-0">
                    <div className="w-auto">
                      <CustomMainButton
                        fullWidth
                        text={service.buttonText}
                        onClick={() => navigate(service.link)}
                        TripleArrow={<TripleArrowIcon />}
                      />
                    </div>
                    <div className="w-auto">
                      <LightButton
                        onClick={() => {
                          setServiceSlug(service.link);
                          setShow(true);
                        }}
                        text={service.secondButtonText}
                        TripleArrow={
                          <TripleArrowIcon
                            color={"custom-primary"}
                            hoverColor={"white"}
                          />
                        }
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                  className={`lg:w-1/2 hidden lg:block ${
                    service.layout === "left" ? "lg:order-1" : "lg:order-2"
                  }`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={
                    service.layout === "left" ? rightVariant : leftVariant
                  }
                >
                  {/* <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-[500px] lg:h-[650px] rounded-lg shadow-md"
                  /> */}
                  <ImageGallery
                    gallery={service?.images}
                    height={650}
                    rounded={true}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {show && serviceSlug === "virtual-office" && (
        <>
          <VirtualOfficeForm setShow={setShow} />
        </>
      )}
      {show && serviceSlug === "private-office" && (
        <>
          <PrivateOfficeForm setShow={setShow} />
        </>
      )}
      {show && serviceSlug === "meeting-rooms" && (
        <>
          <MeetingRoomsForm setShow={setShow} />
        </>
      )}
      {show && serviceSlug === "training-rooms" && (
        <>
          <TrainingRoomsForm setShow={setShow} />
        </>
      )}
    </section>
  );
};

export default ServicesDetailSections;
