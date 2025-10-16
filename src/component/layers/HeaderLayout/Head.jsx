import React from "react";
import ButtonUnderLine from "../../sharedComponents/ButtonUnderLine";
import Divider from "../../sharedComponents/divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import LanguageDropdown from "../../sharedComponents/CustomDropDownLanguages";
import CustomMainButton from "../../sharedComponents/CustomMainButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Head() {
  const { t } = useTranslation();
  const navigate = useNavigate();
const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <section className="relative hidden bg-custom-gradient-black lg:block">
      <div className="z-10 flex items-center justify-between px-2 py-2 max-container">
        <div className="flex items-center ">
          <ButtonUnderLine
            name={t("About")}
            link={"https://new.workbrand.org/about-us"}
          />
          <Divider />
          <ButtonUnderLine
            name={t("Location")}
            link={"https://new.workbrand.org/location"}
          />
          <Divider />
          <ButtonUnderLine
            name={t("Careers")}
            link={"https://new.workbrand.org/career"}
          />
          <Divider />
          <ButtonUnderLine
            name={t("contact")}
            link={"https://new.workbrand.org/contact-us"}
          />
          {/* <Divider /> */}
          {/* <ButtonUnderLine name={t("Coupon")} link={"/coming-soon"} /> */}
        </div>
        <div className="flex items-center gap-x-4 gap-y-2 ">
          <div className="flex items-center gap-4">
            <CustomMainButton
              text={t("Portal")}
              hover_white={true}
              onClick={() => window.open(`${baseUrl}/portal`, "_blank")}
            />

            <a
              href="mailto:info@workbrand.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://wa.me/+20 102 999 9210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <Divider />
            <a
              href="https://x.com/workbrandeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://www.youtube.com/@workbrand1540"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://www.facebook.com/workbrandeg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://www.instagram.com/_workbrand_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://www.tiktok.com/@workbrandeg?_t=ZS-8zOGn4WKW1q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <a
              href="https://eg.linkedin.com/company/workbrandeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-white duration-300 hover:text-custom-primary"
              />
            </a>
            <Divider />
            <div className="flex items-center">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
