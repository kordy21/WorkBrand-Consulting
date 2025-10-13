import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faLinkedin,
  faTwitter,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

import UnderLineForm from "../sharedComponents/UnderLineForm";
import translations from "../../locales/en.json";

const ContactUs = ({ phonesTel, phonesMob, email, address }) => {
  const { contactus } = translations;

  return (
    <section className="grid grid-cols-1 gap-8 my-10 max-container md:grid-cols-1 lg:grid-cols-2">
      {/* Left Side - Contact Info */}
      <div className="flex flex-col justify-start space-y-6 text-white bg-black shadow-md text-start max-auto rounded-2xl">
        <div className="flex flex-col justify-start text-start mx-auto bg-black text-white rounded-2xl space-y-4 py-16 shadow-md lg:w-[70%] w-[85%]">
          <h2 className="text-2xl font-bold">{contactus.contactus}</h2>
          <p className="text-gray-400">{contactus.contactdes}</p>
          {/* Phones Tel */}
          <a
            href={`tel:${phonesTel}`}
            className="flex items-start justify-start gap-3 text-white duration-300 hover:text-custom-blue group"
          >
            <DevicePhoneMobileIcon className="w-5 h-5 text-white duration-300 group-hover:text-custom-blue" />
            {phonesTel}
          </a>
          {/* Phones Mob */}
          <a
            href={`tel:${phonesMob}`}
            className="flex items-start justify-start gap-3 text-white duration-300 hover:text-custom-blue group"
          >
            <PhoneIcon className="w-5 h-5 text-white duration-300 group-hover:text-custom-blue" />
            {phonesMob}
          </a>
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-start justify-start gap-3 text-white duration-300 hover:text-custom-blue group"
          >
            <EnvelopeIcon className="w-5 h-5 text-white duration-300 group-hover:text-custom-blue" />
            {email}
          </a>

          {/* Address */}
          <a
            href="https://maps.app.goo.gl/6AKiJt28VMgBRqNh9"
            className="flex items-start justify-start gap-3 text-white duration-300 hover:text-custom-blue group"
          >
            <MapPinIcon className="w-5 h-5 text-white duration-300 group-hover:text-custom-blue" />
            {address}
          </a>

          {/* Social Media */}
          <div className="flex items-start justify-start w-full gap-4 text-2xl max-container">
            <a
              href="https://www.facebook.com/workbrandeg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>
            <a
              href="https://www.instagram.com/workbrandeg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>

            <a
              href="https://eg.linkedin.com/company/workbrandeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>
            <a
              href="https://www.youtube.com/@workbrand1540"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>
            {/* <a
              href="https://wa.me/01029999210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white transition duration-300 hover:scale-105 hover:text-custom-blue"
              />
            </a> */}
            <a
              href="https://www.tiktok.com/@workbrandeg?_t=ZS-8zOGn4WKW1q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>

            <a
              href="https://snapchat.com/t/2oJ9hqAZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSnapchat}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>

            <a
              href="https://x.com/workbrandeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-white transition duration-300 hover:scale-105  hover:text-custom-blue"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <UnderLineForm />
    </section>
  );
};

export default ContactUs;
