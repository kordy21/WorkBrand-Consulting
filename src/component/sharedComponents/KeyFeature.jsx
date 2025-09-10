import React from "react";

const KeyFeature = ({
  title,
  icons = [],
  align = "start",
  white = false,
  showTitle = true,
}) => {
  const justifyClass = align === "center" ? "justify-center" : "justify-start";
  const itemsClass = align === "center" ? "items-center" : "items-start";
  const textClass = align === "center" ? "text-center" : "text-start";
  // const bgClass = white ? "bg-white" : "bg-custom-gradient-card";

  return (
    <section className="mb-12 max-container">
      {showTitle && (
        <h2 className="mb-8 text-3xl font-bold text-center md:text-5xl text-custom-primary">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
        {icons.map((item, index) => (
          <div
            key={index}
            className={`group relative flex flex-col ${justifyClass} ${itemsClass} ${textClass} p-4 rounded-xl shadow-md transition-all duration-300 min-h-[128px]`}
          >
            <div className="absolute inset-0 transition-opacity duration-300 bg-custom-gradient-card rounded-xl"></div>
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-xl bg-custom-gradient-dark"></div>
            <img
              src={item.image}
              alt={`feature-${index}`}
              className="relative object-contain w-8 h-8 mb-4"
            />
            <h1 className="flex justify-center text-xl relative text-center text-black transition-colors duration-300 md:justify-center md:text-center group-hover:text-white md:text-xl w-[90%]">
              {item.tittle1}
            </h1>
            <p className="flex justify-center text-base relative text-center text-gray-700 transition-colors duration-300 md:justify-center md:text-center group-hover:text-white md:text-xl w-[90%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeature;
