import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import FooterLayout from "../component/sharedComponents/Footer";
import viewgallery from "../assets/images/view_gallery.webp";
import Nasircity from "../assets/images/Nasir_city.webp";
import Location from "../assets/images/Location.webp";
import HeroSection from "../component/sharedComponents/HeroSection";
import data from "../locales/en.json"; 
import { ClockIcon } from "@heroicons/react/24/solid";

const imageMap = {
  viewgallery: viewgallery,
  Nasircity: Nasircity,
};

const LocationPage = () => {
  const { title, description, branches } = data.location;

  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient-bg ">
      {/* Header */}
      <HeaderLayout />

      {/* Hero Section */}
      <HeroSection
        backgroundImage={Location}
        title={title}
        description={description}
      />

      {/* Main Content */}
      <main className="my-12">
        <div className="flex flex-col items-center w-full gap-5 px-4 max-container md:flex-row xl:px-0">
          {/* Mohandessin Branch */}
          <div className="w-full lg:w-2/5">
            <div className="flex items-center gap-4 p-4 mb-3 shadow-md bg-custom-gradient-card rounded-xl">
              <a href="/mohandessin-branch">
                <img
                  src={viewgallery}
                  alt="Mohandessin"
                  className="object-cover w-24 h-24 rounded-xl"
                />
              </a>
              <div>
                <a href="/mohandessin-branch">
                  <h3 className="mb-2 text-xl font-bold ">Mohandessin Branch</h3>
                  <p className="flex items-center gap-1 text-gray-600">
                    <ClockIcon className="w-5 h-5 text-black" />9 AM - 9 PM
                  </p>
                </a>
              </div>
            </div>

            {/* Nasr City Branch */}
            <div className="flex items-center gap-4 p-4 mb-3 shadow-md bg-custom-gradient-card rounded-xl">
              <a href="/nasr-city-branch">
                <img
                  src={Nasircity}
                  alt="Nasr City"
                  className="object-cover w-24 h-24 rounded-xl"
                />
              </a>
              <div>
                <a href="/nasr-city-branch">
                  <h3 className="mb-2 text-xl font-bold">Nasr City Branch</h3>
                  <p className="flex items-center gap-1 text-gray-600">
                    <ClockIcon className="w-5 h-5 text-black" />
                    10 AM - 10 PM
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}

          <div className="w-full overflow-hidden shadow-md lg:w-3/5 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5543359847766!2d31.203792126137987!3d30.04964106291746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584124d86c3eed%3A0x57bfeca20492f00f!2sWork%20Brand%20Office%20Space%20-%20Mohandeseen%20Branch!5e0!3m2!1sar!2seg!4v1757311908818!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterLayout />
    </div>
  );
};

export default LocationPage;
