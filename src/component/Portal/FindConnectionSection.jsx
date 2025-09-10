import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const FindConnectionSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="px-4 mb-12 xl:px-0">
      <div className="py-16 bg-white shadow-md max-container rounded-xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="mb-4 text-2xl font-bold leading-snug text-black md:text-5xl">
            Find the Right Connection
          </h2>
          <h3 className="mb-3 font-semibold text-gray-500 lg:mb-5 md:text-lg">
            Search by company name, service, or industry to discover your
            perfect business match
          </h3>

          {/* Search Form */}
          <div className="p-8 ">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Search for connections, skills, or industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 transition-colors duration-300 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary"
              />
              <div className="w-full md:w-auto">
                <CustomMainButton
                  text="Search Directory"
                  // TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindConnectionSection;
