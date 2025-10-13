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
}) => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border p-5 md:p-0 ${
        removeMB ? "" : "md:"
      } border-gray-300 custom-radius`}
      style={{
        backgroundImage:
          whiteBackground || isMobile ? "none" : `url(${imageBG})`,
        backgroundColor: whiteBackground ? "white" : "transparent",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative">
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src={image}
            className="object-cover w-full h-64 duration-500 hover:scale-150"
            alt={title}
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-3 mb-4 duration-300 cursor-pointer text-white hover:text-custom-blue">
          <button className="bg-custom-primary w-[15px] h-[15px] rounded mt-2"></button>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="mb-4 text-base text-white list-disc list-inside">
          {description.split(",").map((item, i) => (
            <li key={i}>{item.trim()}</li>
          ))}
        </ul>

        <h1 className="text-xl text-black ">{textfeature}</h1>

        {keyfeatures.length > 0 && (
          <ul className="flex flex-col gap-5 mt-4">
            {keyfeatures.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-custom-primary">
                  {item.icon}
                </span>
                <span className="text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* <div className="flex w-full p-5">
        <div className="w-full">
          <CustomMainButton
            fullWidth
            TripleArrow={<TripleArrowIcon color={"white"} />}
            text={buttonText || "Explore Offices"}
            onClick={() => navigate(link)}
          />
        </div>
      </div> */}
    </div>
  );
};

export default CardLocation;
