import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logoworkbrandblue.webp";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronUpIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faLinkedin,
  faTiktok,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import arrow from "../../assets/Icons/arrowfooter.svg";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [showWhatsOptions, setShowWhatsOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = {
    "Services ": "/services",
    "Offices ": "/offices",
    "Consulting ": "/coming-soon",
    "Create Website": "/coming-soon",
    "Media Agency": "/coming-soon",
  };

  const importantLinks = {
    "Store ": "/store",
    "Insights ": "/insights",
    "About Us": "/about-us",
    "Contact us": "/contact-us",
  };

  const Link = {
    "FAQS ": "/faq",
    "Terms and Conditions": "/terms-condition",
    "Privacy Policy": "/privacy-police",
    "Refund Policy": "/refund-police",
    "Shipping Policy": "/shipping-police",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative pb-8 text-white lg:pt-20 md:bg-cover md:bg-no-repeat footer"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-between gap-8 px-4 py-10 max-container md:flex-row">
        <div className="md:w-1/3">
          <div className="flex justify-center md:justify-start">
            <a href="/">
              <img src={logo} alt="WorkBrand" className="w-32 mb-4 md:w-32" />
            </a>
          </div>

          <p className="text-sm leading-6 text-[#FEF2D4]">
            We empower entrepreneurs to launch and grow with ease offering smart
            offices and digital tools designed for real success.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 md:mt-[40px]">
          {/* Services */}
          <div>
            <ul>
              {Object.entries(services).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer hover:text-custom-blue text-[#FEF2D4] group gap-2 items-center"
                >
                  <img src={arrow} className="w-[10px]" alt="arrow" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <ul>
              {Object.entries(importantLinks).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer hover:text-custom-blue text-[#FEF2D4] group gap-2 items-center"
                >
                  <img src={arrow} className="w-[10px]" alt="arrow" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <ul>
              {Object.entries(Link).map(([name, url], i) => (
                <li
                  key={i}
                  className="flex mb-4 duration-300 cursor-pointer text-[#FEF2D4] hover:text-custom-blue group gap-2 items-center"
                >
                  <img src={arrow} className="w-[10px]" alt="arrow" />
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full">
        <div className="flex-grow h-[2px] bg-custom-blue"></div>

        {[
          {
            icon: faTwitter,
            link: "https://x.com/workbrandeg",
            target: "_blank",
          },
          { icon: faFacebook, link: "https://www.facebook.com/workbrandeg/" },
          {
            icon: faWhatsapp,
            link: "https://wa.me/201234567890",
            target: "_blank",
          },
          {
            icon: faLinkedin,
            link: "https://eg.linkedin.com/company/workbrandeg",
            target: "_blank",
          },
          {
            icon: faTiktok,
            link: "https://www.tiktok.com/@workbrandeg?_t=ZS-8zOGn4WKW1q&_r=1",
            target: "_blank",
          },
          { icon: faEnvelope, link: "mailto:info@workbrandeg.com" },
          {
            icon: faYoutube,
            link: "https://www.youtube.com/@workbrandeg",
            target: "_blank",
          },
          {
            icon: faInstagram,
            link: "https://www.instagram.com/workbrandeg/",
            target: "_blank",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center mx-1 sm:mx-2 group"
          >
            <a href={item.link} target={item.target} rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={item.icon}
                className="w-4 sm:w-5 p-1 sm:p-2 text-lg sm:text-lg duration-300 border rounded-full text-custom-blue group-hover:text-white border-white group-hover:border-white"
              />
            </a>
          </div>
        ))}

        <div className="flex-grow h-[2px] bg-custom-blue"></div>
      </div>

<div className="flex flex-row md:flex-row flex-wrap justify-center items-center w-full p-5 pt-4 mt-8 text-sm text-center text-[#FEF2D4] md:p-0 gap-1 md:gap-2">
  ©2025 All rights reserved{" "}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="duration-300 hover:text-custom-primary"
  >
    WorkBrand.org
  </a>{" "}
  Developed by{" "}
  <a
    href="https://target-group.org/"
    target="_blank"
    rel="noopener noreferrer"
    className="duration-300 hover:text-custom-primary"
  >
    target digital solutions
  </a>
</div>



      {/* Scroll to Top */}
      <div
        className={`fixed z-30 bottom-4 md:bottom-7 flex flex-col gap-3 start-5`}
      >
        {showScroll && (
          <button
            className="flex items-center justify-center w-12 h-12 transition duration-300 rounded-full shadow-lg bg-custom-blue hover:bg-white hover:text-black"
            onClick={scrollToTop}
          >
            <ChevronUpIcon className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* WhatsApp Button + Options */}
{/* WhatsApp Button + Options */}
<div className={`fixed z-30 bottom-4 md:bottom-7 flex flex-col gap-3 end-5`}>
  <div className="relative">
    <button
      onClick={() => setShowWhatsOptions(!showWhatsOptions)}
      className="flex items-center justify-center w-12 h-12 transition duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-white" />
    </button>

    <div
      className={`absolute bottom-16 right-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
        showWhatsOptions
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="bg-green-500 text-white p-3 flex justify-between items-center">
        <span className="font-bold">Hi!</span>
        <button onClick={() => setShowWhatsOptions(false)}>✕</button>
      </div>

      <div className="p-3 text-gray-700 text-sm border-b">
        Chat with one of our agent.
      </div>

      <div className="flex flex-col">
        <a
          href="https://wa.me/201029999210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 hover:bg-gray-100 transition text-black"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Technical support
        </a>
        <a
          href="https://wa.me/201011223344"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 text-black hover:bg-gray-100 transition"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Salles
        </a>
        <a
          href="https://wa.me/201055667788"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-3 hover:bg-gray-100 transition text-black"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          Consulting
        </a>
      </div>

      <div className="p-2 text-xs text-gray-500 text-center border-t">
        Use this feature to chat with our agent.
      </div>
    </div>
  </div>

  {/* Phone Button */}
  <button className="flex items-center justify-center w-12 h-12 transition duration-300 rounded-full shadow-lg bg-custom-gradient-black hover:bg-yellow-400">
    <PhoneIcon className="w-6 h-6 text-white" />
  </button>
</div>

    </footer>
  );
}
