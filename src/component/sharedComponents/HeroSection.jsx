import React, { useState } from "react";
import ReactDOM from "react-dom";
import CustomMainButton from "./CustomMainButton";
import TripleArrowIcon from "./TripleArrowIcon";
import { Link, useLocation } from "react-router-dom";
import UnderLineForm from "./UnderLineForm";

const HeroSection = ({ backgroundImage, title, description, buttonText }) => {
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathnames = location.pathname.split("/").filter((x) => x);
  const isSmallPage = location.pathname.includes("store-details");

  const popupContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => setIsPopupOpen(false)}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-[600px] mx-4 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
        >
          ✖
        </button>

        <UnderLineForm />
      </div>
    </div>
  );

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
        className={`relative z-10 flex flex-col items-center justify-center px-4 mb-4 text-white md:items-start max-w-[1000px] w-full`}
      >
        <h1
          className={`mt-4 md:mb-4 font-bold ${
            isSmallPage ? "text-2xl md:text-4xl" : "text-3xl md:text-7xl"
          }`}
        >
          {title}
        </h1>

        <p
          className={`flex max-w-3xl w-full p-5 md:p-0 text-left ${
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
              onClick={() => setIsPopupOpen(true)}
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

      {isPopupOpen &&
        ReactDOM.createPortal(
          popupContent,
          document.getElementById("popup-root")
        )}
    </section>
  );
};

export default HeroSection;
