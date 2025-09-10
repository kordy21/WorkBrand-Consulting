import React, { useState } from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const ConnectionSection = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Consulting",
    "Media & Entertainment",
    "Food & Beverage",
  ];

  const locations = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Sharm El Sheikh",
    "Hurghada",
    "Luxor",
    "Aswan",
    "Mansoura",
    "Tanta",
    "Ismailia",
  ];

  return (
    <section className="py-16 bg-custom-gradient-card">
      <div className="px-4 max-container lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTitle
            title="Find The Right"
            subdescription="Connection"
            description="Connect with the perfect business partners, mentors, or collaborators in your industry and location."
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
              {/* Industry Selection */}
              <div>
                <label className="block mb-3 text-lg font-semibold text-gray-700">
                  Select Your Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-4 text-gray-700 transition-colors duration-300 border-2 border-gray-200 rounded-lg focus:border-custom-primary focus:outline-none"
                >
                  <option value="">Choose an industry...</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block mb-3 text-lg font-semibold text-gray-700">
                  Select Your Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-4 text-gray-700 transition-colors duration-300 border-2 border-gray-200 rounded-lg focus:border-custom-primary focus:outline-none"
                >
                  <option value="">Choose a location...</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <CustomMainButton
                text="Find Connections"
                TripleArrow={<TripleArrowIcon color="white" />}
                onClick={() => navigate("/coming-soon")}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Join over{" "}
                <span className="font-bold text-custom-primary">5,000+</span>{" "}
                entrepreneurs and business professionals in our network
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Verified Profiles
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Secure Networking
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-custom-primary"></div>
                  Expert Matching
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { number: "5,000+", label: "Active Members" },
            { number: "50+", label: "Industries" },
            { number: "1,200+", label: "Successful Connections" },
            { number: "95%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl text-custom-primary">
                {stat.number}
              </div>
              <div className="font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectionSection;
