import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const CardLocation = ({
  image,
  imageBG,
  title,
  description,
  location,
  link,
  buttonText,
  textfeature,
  keyfeatures = [],
  whiteBackground = false,
  removeMB,
  textColor,
}) => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const appliedTextColor = textColor || "text-custom-blue";

  return (
    <div
      className={`relative mx-5 md:mx-0 my-5 w-auto overflow-hidden rounded-2xl border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300 ${
        removeMB ? "" : "md:my-8"
      }`}
      style={{
        backgroundImage:
          whiteBackground || isMobile ? "none" : `url(${imageBG})`,
        backgroundColor: whiteBackground ? "white" : "transparent",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full h-64 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-125"
        />
      </div>

      <div className="p-5">
        <div
          className={`flex items-start gap-3 mb-4 cursor-pointer ${appliedTextColor}`}
        >
          <span className="bg-custom-primary w-[15px] h-[15px] rounded mt-2"></span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <ul
          className={`mb-4 text-base list-disc list-inside ${appliedTextColor}`}
        >
          {description.split(",").map((item, i) => (
            <li key={i}>{item.trim()}</li>
          ))}
        </ul>

        {textfeature && (
          <h1 className={`text-xl font-semibold mb-3 ${appliedTextColor}`}>
            {textfeature}
          </h1>
        )}

        {keyfeatures.length > 0 && (
          <ul className="flex flex-col gap-4 mt-2">
            {keyfeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-custom-blue">
                  {item.icon}
                </span>
                <span className={`${appliedTextColor}`}>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardLocation;
