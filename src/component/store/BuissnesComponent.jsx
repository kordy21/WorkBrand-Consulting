import React, { useRef } from "react";
import author from "../../assets/images/Artisan_Designs.webp";
import {
  StarIcon,
  ShoppingCartIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import green from "../../assets/images/greenbook.webp";
import blue from "../../assets/images/bluebook.webp";
import brown from "../../assets/images/brownbook.webp";
import LightButton from "../sharedComponents/LightButton";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BuissnesComponent = () => {
  const navigate = useNavigate();
  const colors = [
    { name: "Leather", img: brown },
    { name: "Blue", img: blue },
    { name: "Green", img: green },
  ];

  const swiperRef = useRef(null);

  // Custom navigation buttons with brown background
  const CustomPrevButton = () => (
    <button
      className="absolute top-1/2 left-2 z-10 p-2 rounded-full bg-custom-primary hover:bg-opacity-80 -translate-y-1/2"
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <ChevronLeftIcon className="w-5 h-5 text-white" />
    </button>
  );

  const CustomNextButton = () => (
    <button
      className="absolute top-1/2 right-2 z-10 p-2 rounded-full bg-custom-primary hover:bg-opacity-80 -translate-y-1/2"
      onClick={() => swiperRef.current?.slideNext()}
    >
      <ChevronRightIcon className="w-5 h-5 text-white" />
    </button>
  );

  return (
    <section className="max-container p-4 lg:p-0 lg:my-16 min-h-[500px] w-full bg-white">
      <div className="relative flex flex-col mx-auto overflow-hidden bg-white shadow-md lg:flex-row rounded-2xl">
        {/* Left: Swiper Carousel */}
        <div className="relative w-full  lg:h-auto lg:w-3/5">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            navigation={false} 
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {colors.map((c) => (
              <SwiperSlide key={c.name}>
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <CustomPrevButton />
          <CustomNextButton />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center flex-1 p-6 bg-white lg:w-2/5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-semibold text-custom-blue lg:text-4xl">
                Store
              </span>
              <span className="text-gray-500 text-sm lg:text-[12px]">
                (15 Reviews)
              </span>
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-bg-custom-blue lg:text-4xl">
              Leather Journal
            </h2>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" /> 16 Nov, 2024
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <img
                src={author}
                alt="Author"
                className="object-cover w-10 h-10 rounded-full"
              />
              <span className="font-medium underline duration-300 cursor-pointer text-custom-primary hover:text-black">
                By <span className="text-primary-color">Tarek Tantawy</span>
              </span>
            </div>

            <div className="mb-2 text-2xl font-bold lg:text-4xl">30 $</div>
            <div className="mb-2 text-2xl font-bold lg:text-2xl">Colors:</div>
          </div>

          {/* Color Buttons */}
          <div className="flex gap-3 mt-4 mb-5">
            {colors.map((c, index) => (
              <button
                key={c.name}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                style={{
                  backgroundColor:
                    c.name === "Leather" ? "#A0522D" : c.name.toLowerCase(),
                }}
                onClick={() => swiperRef.current?.slideTo(index)}
              ></button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center w-full gap-4 mt-5 lg:justify-start">
            <div className="w-1/2">
              <CustomMainButton
                fullWidth
                IconEnd={ShoppingCartIcon}
                text={"Add To Cart"}
                onClick={() => console.log("افتح الكارت هنا")}
              />
            </div>
            <div className="w-1/2">
              <LightButton
                text="Get Product"
                icon={
                  <ChevronRightIcon className="w-4 h-4 duration-300 text-custom-primary group-hover:text-white" />
                }
                onClick={() => console.log("Get Product")}
              />
            </div>
          </div>

          {/* Social */}
          <div className="flex mt-6 space-x-4 text-gray-500">
            <a
              href="https://x.com/workbrandeg"
              aria-label="Twitter"
              className="transition-colors rounded-md hover:text-custom-primary"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-6 h-6 text-black duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://www.facebook.com/workbrandeg/"
              aria-label="Facebook"
              className="transition-colors rounded-lg hover:text-custom-primary"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="w-6 h-6 text-black duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://eg.linkedin.com/company/workbrandeg"
              aria-label="LinkedIn"
              className="transition-colors hover:text-custom-primary"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-6 h-6 text-black duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://wa.me/201029999210"
              aria-label="WhatsApp"
              className="transition-colors rounded-md hover:text-custom-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-6 h-6 text-custom-primary duration-300 hover:text-custom-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuissnesComponent;
