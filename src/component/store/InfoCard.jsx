import React from "react";

const InfoCard = ({ title, tags, description }) => {
  return (
    <div className="px-4 py-6 bg-white shadow-md lg:px-6 rounded-2xl">
      <h3 className="mb-3 text-2xl font-semibold lg:text-3xl text-custom-primary">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 text-sm text-gray-700 bg-[#E6E3F1] rounded-lg shadow-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
