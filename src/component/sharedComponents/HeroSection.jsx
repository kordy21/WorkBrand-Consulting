import React from "react";
import CustomMainButton from "./CustomMainButton";
import TripleArrowIcon from "./TripleArrowIcon";
import { ReactComponent as WriteIcon } from "../../assets/Icons/write.svg";
import { Link, useLocation } from "react-router-dom";
const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonIcon,
  onClick,
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const isSmallPage = location.pathname.includes("store-details"); 
  return (
    <section
      className={`relative w-full flex items-center justify-center pt-[100px] lg:pt-0 
    ${isSmallPage ? "h-[300px]" : "h-[400px] md:h-[500px]"}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center px-0 mb-4 text-white md:items-start ${
          isSmallPage ? "pr-[150px]  lg:pr-[750px]" : "lg:pr-56"
        }`}
      >
        <h1
          className={`mt-4 md:mb-4 font-bold ${
            isSmallPage ? "text-2xl md:text-4xl" : "text-3xl md:text-7xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`flex max-w-3xl p-5 mx-auto text-center md:text-start md:p-0 ${
            isSmallPage ? "text-base md:text-lg" : "text-lg md:text-lg"
          }`}
        >
          {description}
        </p>

        {buttonText && (
          <div className="max-w-[250px] mt-4">
            <CustomMainButton
              text={buttonText}
              fullWidth
              TripleArrow={<TripleArrowIcon />}
              onClick={onClick}
            />
          </div>
        )}

        <nav className="flex items-center space-x-2 text-white text-sm mt-4">
          <Link to="/">Home</Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <span
                key={to}
                className="flex items-center space-x-2 text-custom-blue hover:text-white"
              >
                <span>/</span>
                <Link to={to} className="text-white hover:text-white">
                  {value.replace(/-/g, " ")}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
