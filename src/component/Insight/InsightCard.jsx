import React from "react";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const InsightCard = ({ image, title, description, link }) => {
  const navigate =useNavigate()
  return (
    <div
      className="overflow-hidden transition bg-white shadow-md cursor-pointer rounded-2xl"
      onClick={() => navigate(link)}
    >
      <div className="h-64 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 duration-500 rounded-t-lg hover:scale-150"
        />
      </div>
      <div className="p-4 lg:p-6">
        <h3 className="mb-2 text-lg font-semibold duration-300 cursor-pointer lg:text-2xl hover:text-custom-primary">
          {title}
        </h3>
        <p className="text-sm text-gray-600 lg:text-base">{description}</p>
        <hr className="my-4" />
        <a
          href={link}
          className="flex items-center gap-2 font-medium text-custom-primary hover:underline"
        >
          Read More <TripleArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default InsightCard;
