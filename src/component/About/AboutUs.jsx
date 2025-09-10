import React from "react";

const AboutUs = ({ image, title, subtitle, describtion, decmobile }) => {
  return (
    <section className="flex flex-col items-center gap-6 my-12 max-container md:flex-row">
      <div className="order-1 w-full text-center md:w-1/2 md:text-left md:order-2">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl text-custom-primary">
          {title} <span className="text-black">{subtitle}</span>
        </h1>

        <p className="block px-5 mb-5 text-lg font-semibold leading-relaxed text-center text-gray-600 md:p-0 md:hidden">
          {decmobile}
        </p>
        <div className="hidden space-y-4 text-lg leading-relaxed text-gray-600 md:block">
          {describtion.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <div className="flex justify-center order-2 w-full md:w-1/2 md:order-1">
        <img
          src={image}
          alt={title}
          className="lg:rounded-2xl max-w-full h-[500px] object-cover"
        />
      </div>

      <div className="order-3 block px-5 mt-4 text-center md:hidden">
        <p className="text-lg leading-relaxed text-gray-600">{describtion}</p>
      </div>
    </section>
  );
};

export default AboutUs;
