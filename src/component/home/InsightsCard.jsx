import React from "react";

const InsightsCard = ({ image, number, title, description }) => {
  return (
    <div className=" rounded-md overflow-hidden bg-white hover:shadow-md transition duration-300">
      <img src={image} alt={title} className="object-cover w-full h-40" />

      <div className="p-4 text-left">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {number}. {title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InsightsCard;
