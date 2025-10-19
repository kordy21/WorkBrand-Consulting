import React from "react";

const ModuleHelpSection = ({ title, items = [] }) => {
  return (
    <section className="   max-container py-5 px-5 md:px-0 md:pt-8 ">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-stretch items-stretch">
  {items.map((item, index) => (
    <div
      key={index}
      className="bg-custom-gradient-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full p-5 text-left flex flex-col justify-between"
    >
      <div>
        <h3 className="text-[#18415D] font-bold text-2xl mb-2">
          {item.number}.
        </h3>
        <p className="text-sm text-gray-800 font-semibold leading-tight">
          {item.title}
        </p>
        <p className="text-xs text-gray-700 mt-1">{item.description}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ModuleHelpSection;
