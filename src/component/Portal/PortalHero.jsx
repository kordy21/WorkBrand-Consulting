import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/portal-bg-img.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const PortalHero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 px-4 max-container">
        <div className="text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Welcome To Your Business Hub
          </h1>
          <p className="mb-6">
            Meet the people, brands, and businesses growing with you under one
            roof
          </p>
          <div className="flex justify-center w-1/2 mx-auto">
            <CustomMainButton
              text="Browse Business Directory"
              IconStart={MagnifyingGlassIcon}
              //   TripleArrow={<TripleArrowIcon color="white" />}
              onClick={() => navigate("/coming-soon")}
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalHero;
