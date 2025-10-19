import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logoworkbrandblue.webp";
import LanguageDropdown from "../../sharedComponents/CustomDropDownLanguages";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faTiktok,
  faSnapchatGhost,
} from "@fortawesome/free-brands-svg-icons";


const MobileMenu = ({
  isDropdownOpen,
  setIsDropdownOpen,
  menuDataMob,
  toggleDropdown,
  isOpen,
}) => {
  const [isSubOpen, setIsSubOpen] = React.useState({});
  const toggleSubDropdown = (sectionId) => {
    setIsSubOpen((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-end h-screen overflow-scroll">
      {/* Backdrop - transparent with blur effect (more transparent) */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={() => setIsDropdownOpen(false)}
      ></div>

      {/* Dropdown Panel */}
      <div
        className={`bg-white shadow-md transition-transform transform ${
          isDropdownOpen ? "translate-x-0" : "translate-x-full"
        } w-[85vw] md:w-[50vw] min-h-screen py-4 overflow-y-auto`}
      >
        <div className="h-full">
          <div className="flex items-center justify-between px-4">
            <Link to="/">
              <img src={Logo} alt="Logo" className=" h-[60px]" />
            </Link>
            <button onClick={() => setIsDropdownOpen(false)}>
              <XMarkIcon className="w-6 h-6 text-red" />
            </button>
          </div>

          <div className="flex items-center justify-between px-4 my-3 ">
            <p className="font-bold text-big-text-color">Khaled Mohamed</p>
            <div className="flex items-center">
              <LanguageDropdown light={true} />
            </div>
          </div>

          {/* Dropdown Content */}
          <ul className="list-none">
            {Object.keys(menuDataMob).map((key) => (
              <li key={key} className="">
                {/* Menu Item with Toggle */}
                <div
                  className="flex items-center justify-between px-4 py-3 font-bold bg-gray-100 cursor-pointer border-y hover:bg-gray-200"
                  onClick={() => toggleDropdown(key)}
                >
                  <span className="text-big-text-color">
                    {menuDataMob[key].name}
                  </span>
                  {menuDataMob[key].sections && (
                    <>
                      {isOpen[key] ? (
                        <span className="text-lg font-bold text-big-text-color">
                          <ChevronUpIcon className={`w-4 h-4 text-black`} />
                        </span>
                      ) : (
                        <span className="text-lg font-bold text-big-text-color">
                          <ChevronDownIcon className={`w-4 h-4 text-black`} />
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Expanded Content */}
                {isOpen[key] && (
                  <div className="">
                    <div className="flex flex-col">
                      {menuDataMob[key].sections.map((section) => (
                        <div key={section.id}>
                          {/* Subtitle toggle */}
                          <div
                            className="flex items-center justify-between px-10 py-3 font-bold cursor-pointer bg-gray-50 hover:bg-gray-200 border-y"
                            onClick={() => toggleSubDropdown(section.id)}
                          >
                            <span className="text-big-text-color">
                              {section.headline1}
                            </span>
                            {isSubOpen[section.id] ? (
                              <ChevronUpIcon className="w-4 h-4 text-black" />
                            ) : (
                              <ChevronDownIcon className="w-4 h-4 text-black" />
                            )}
                          </div>

                          {/* SubItems */}
                          {isSubOpen[section.id] && (
                            <>
                              {section.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.link}
                                  className="flex items-center justify-between py-3 font-bold cursor-pointer px-14 hover:bg-gray-200 border-y"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li
              className="flex items-center justify-between px-4 py-3 font-bold cursor-pointer bg-gray-50 hover:bg-gray-200 border-y"
              onClick={null}
            >
              <span className="text-big-text-color">My Account</span>
            </li>
            <li
              className="flex items-center justify-between px-4 py-3 font-bold cursor-pointer bg-gray-50 hover:bg-gray-200 border-y"
              onClick={null}
            >
              <span className="text-red-500 text-big-text-color">Logout</span>
              {true ? (
                <ArrowRightEndOnRectangleIcon className="w-4 h-4 text-red-500" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 text-black" />
              )}
            </li>
          </ul>
          <div className="flex gap-4 px-10 py-3">
            <a
              href="https://www.facebook.com/workbrandeg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/workbrandeg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://eg.linkedin.com/company/workbrandeg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.youtube.com/@workbrand1540"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.tiktok.com/@workbrandeg?_t=ZS-90as1k08P5k&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
              href="https://snapchat.com/t/2oJ9hqAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-custom-primary hover:text-black text-3xl"
            >
              <FontAwesomeIcon icon={faSnapchatGhost} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
