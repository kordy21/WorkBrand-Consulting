import React from "react";
import MainTitle from "../sharedComponents/MainTittle"; 

const ConsultingSection = ({ image, title, paragraphs }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 md:p-12">
      <div className="w-full  md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-md shadow-md w-full  h-[460px]  object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-left">
        <MainTitle
          title={title}
          
          className="mb-4"
        />
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
