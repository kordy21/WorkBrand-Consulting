import React, { useEffect, useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";
import MainTittle from "../sharedComponents/MainTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WhoIsHereSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1440);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filters = [
    "All",
    "Tech",
    "Marketing",
    "Retail",
    "Legal",
    "Real Estate",
    "Media",
    "E-commerce",
    "Development",
    "Design",
    "Consulting",
    "Startup",
  ];

  const profiles = [
    {
      id: 1,
      name: "TechMakers Studio",
      role: "Technology",
      description:
        "Innovative software development company specializing in AI and machine learning solutions.",
      avatar: require("../../assets/images/Sara_Khaled.webp"),
      category: "Studio",
    },
    {
      id: 2,
      name: "DesignHub Agency",
      role: "Design",
      description:
        "Creative agency focused on user interface and user experience design for web and mobile applications.",
      avatar: require("../../assets/images/Ahmed_Nabil.webp"),
      category: "Expert",
    },
    {
      id: 3,
      name: "DataWise Solutions",
      role: "Data Science",
      description:
        "Expert data analytics firm offering insights and predictive modeling for businesses.",
      avatar: require("../../assets/images/Layla _Mostafa.webp"),
      category: "Agency",
    },
    {
      id: 4,
      name: "CloudSync Services",
      role: "Cloud Computing",
      description:
        "Leading provider of cloud infrastructure solutions and managed services.",
      avatar: require("../../assets/images/Sara_Khaled.webp"),
      category: "Solutions",
    },
    {
      id: 5,
      name: "SecureNet Systems",
      role: "Cybersecurity",
      description:
        "Specializes in cybersecurity services and solutions to protect organizations from digital threats.",
      avatar: require("../../assets/images/Ahmed_Nabil.webp"),
      category: "Startup",
    },
    {
      id: 6,
      name: "MarketPulse Insights",
      role: "Market Research",
      description:
        "Dedicated market research firm providing data-driven insights for strategic decision making.",
      avatar: require("../../assets/images/Layla _Mostafa.webp"),
      category: "Agency",
    },
  ];

  const filteredProfiles =
    activeFilter === "All"
      ? profiles
      : profiles.filter((profile) => profile.category === activeFilter);

  return (
    <section className="py-12">
      <div className="px-4 max-container lg:px-0">
        {/* Title */}
        <div className="mb-8 text-center">
          <MainTittle
            title="Who's Here With You?"
            description="Explore a curated list of businesses sharing your space. From startups to established brands, see who's building with you."
            colorDesc="black"
          />
        </div>

        {/* Filter Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-custom-gradient-orange text-white"
                  : "bg-transparent border border-custom-primary text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}
        <>
          {/* العرض أقل من 1440px */}
          {!isWide && (
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-custom-gradient-orange text-white"
                      : "bg-transparent border border-custom-primary text-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}

          {/* العرض 1440px أو أكتر --> Swiper */}
          {isWide && (
            <Swiper
              spaceBetween={12}
              slidesPerView="auto"
              freeMode
              className="mb-12"
            >
              {filters.map((filter) => (
                <SwiperSlide key={filter} style={{ width: "auto" }}>
                  <button
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? "bg-custom-gradient-orange text-white"
                        : "bg-transparent border border-custom-primary text-gray-600"
                    }`}
                  >
                    {filter}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="overflow-hidden transition-shadow duration-300 shadow-md rounded-xl bg-custom-gradient-card hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="object-cover w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 lg:text-lg ">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-custom-primary">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  {profile.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="w-1/2">
                    <CustomMainButton
                      text="View Profile"
                      TripleArrow={<TripleArrowIcon color="white" />}
                      onClick={() => navigate("/coming-soon")}
                      fullWidth
                    />
                  </div>
                  <div className="w-1/2 mx-auto">
                    <button className="w-full duration-300 text-custom-primary hover:text-black">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsHereSection;
