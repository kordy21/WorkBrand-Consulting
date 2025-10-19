import React from "react";

const KeyFeature = ({
  title,
  icons = [],
  align = "start",
  showTitle = true,
  transparent = false, 
}) => {
  const justifyClass = align === "center" ? "justify-center" : "justify-start";
  const itemsClass = align === "center" ? "items-center" : "items-start";
  const textClass = align === "center" ? "text-center" : "text-start";

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
            className={`group relative flex flex-col ${justifyClass} ${itemsClass} ${textClass} p-4 rounded-xl shadow-md transition-all duration-300 min-h-[128px] 
             ${
               transparent
                 ? "bg-transparent text-white border border-gray-300 hover:bg-white/30 hover:text-white"
                 : "bg-white text-black border border-gray-300"
             }
`}
          >
            <img
              src={item.image}
              alt={`feature-${index}`}
              className="relative object-contain w-8 h-8 mb-4 transition-none group-hover:opacity-100"
            />

            <h1 className="text-xl font-semibold transition-colors duration-300 w-[90%]">
              {item.tittle1}
            </h1>
            <p className="text-sm transition-colors duration-300 w-[90%]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeature;
