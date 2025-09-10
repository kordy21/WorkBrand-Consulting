import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";

import bag from "../../assets/Icons/💼 1.svg";
import star from "../../assets/Icons/star.svg";
import champon from "../../assets/Icons/champon.svg";
import crstal from "../../assets/Icons/crstal.svg";

const VirtualOfficeForm = ({ setShow }) => {
  const [lightboxOpen, setLightboxOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [activeTooltip, setActiveTooltip] = useState(null); // جديد
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    branch: "",
    businessType: "",
    businessSector: "",
    howDidYouHear: "",
    additionalNotes: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const packages = [
    {
      id: "basic",
      name: "Basic Package",
      description: "Perfect For Startups",
      description1: [
        "Prestigious business address for registration (Commercial Register & Tax Card).",
        "Dedicated landline with call answering in your company’s name.",
        "Administrative team for mail handling & client reception.",
        "Free legal consultation.",
        "Government inspections handled (Taxes, Insurance, Banks, etc.)",
        "Discounts on meeting & training rooms",
        "Special discount on logo & branding design",
      ],
      icon: bag,
      sallery: "6000EGP",
    },
    {
      id: "silver",
      name: "Silver Package",
      description: "Perfect For Growing Businesses",
      icon: star,
      sallery: "12500EGP",
      description1: [
        "Obtain a prestigious business address.",
        "Use the address for Commercial Registration and Tax Card issuance.",
        "Dedicated landline with call answering in your company’s name.",
        "Administrative team for receiving and handling your official mail.",
        "Free legal consultation.",
        "Handling of all government inspections related to your company (Taxes, Insurance, Banks, etc.).",
        "Enjoy access to a fully equipped private office on an hourly basis.",
        "Special discounts on meeting rooms and training spaces.",
        "Discounts on using the lounge for meetings and gatherings.",
        "Exclusive offer for designing your company’s logo and corporate identity.",
      ],
    },
    {
      id: "gold",
      name: "Gold Package",
      description: "Perfect For Established Companies",
      icon: champon,
      sallery: "16500EGP",
      description1: [
        "Obtain a prestigious business address.",
        "Use the address for Commercial Registration and Tax Card issuance.",
        "Dedicated landline with call answering in your company’s name.",
        "Administrative team for receiving and handling your official mail.",
        "Free legal consultation.",
        "Handling of all government inspections related to your company (Taxes, Insurance, Banks, etc.).",
        "Enjoy access to a fully equipped private office on an hourly basis.",
        "Special discounts on meeting rooms and training spaces.",
        "Discounts on using the lounge for meetings and gatherings.",
        "Exclusive offer for designing your company’s logo and corporate identity.",
      ],
    },
    {
      id: "diamond",
      name: "Diamond Package",
      description: "Perfect For Enterprises",
      icon: crstal,
      sallery: "24000EGP",
      description1: [
        "Obtain a prestigious business address.",
        "Registration support with the Chamber of Commerce to issue the commercial register and tax card.",
        "Dedicated landline with call answering in your company’s name.",
        "Administrative team for receiving and delivering your company’s mail.",
        "Complimentary legal consultation.",
        "Handling all government correspondence for your company (Taxes, Municipalities, and more).",
        "Enjoy access to a fully equipped private office on an hourly basis.",
        "Business card printed with your company’s name and logo.",
        "Archiving service for your company’s official documents.",
        "Special discounts on using training and meeting halls.",
        "Exclusive discounts on designing your company’s logo and corporate identity.",
      ],
    },
  ];

  const handleCloseLightbox = (e) => {
    if (e.target.tagName === "IMG") return;
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
      setShow(false);
    }
  };

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  const toggleTooltip = (id) => {
    setActiveTooltip((prev) => (prev === id ? null : id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedPackage) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSend = () => {
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCurrentStep(1);
    setSelectedPackage("");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      branch: "",
      businessType: "",
      businessSector: "",
      howDidYouHear: "",
      additionalNotes: "",
    });
    setLightboxOpen(false);
  };

  return (
    <div>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={handleCloseLightbox}
        >
          <div className="relative flex flex-col items-center justify-start w-full max-w-4xl py-8 bg-white rounded-lg max-h-[90vh] overflow-y-auto">
            {currentStep === 1 && !showSuccessPopup && (
              <div className="w-full px-8 py-8">
                <h1 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                  Available Packages
                </h1>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
                  {packages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      onClick={() => {
                        handlePackageSelect(pkg.id);
                        toggleTooltip(pkg.id);
                      }}
                      className={` group p-6 rounded-lg border cursor-pointer transition-all duration-300 
        ${
          selectedPackage === pkg.id
            ? "border border-gray-500 bg-gray-50 shadow-lg"
            : "bg-[#FAF4E5] hover:border-custom-primary hover:border"
        }`}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={pkg.icon} className="w-8 h-8 mb-4" />
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">
                          {pkg.name}
                        </h3>
                        <p className="text-gray-600">{pkg.description}</p>
                        <p className="text-custom-primary">{pkg.sallery}</p>
                      </div>

                      {/* Tooltip */}
                      {pkg.description1 && (index === 0 || index === 1) && (
                        <div
                          className={`absolute flex justify-center mx-6 w-[90%] start-0  z-50 top-1/2 mt-2 px-4 py-3 text-sm bg-black rounded-lg   shadow-lg
      ${activeTooltip === pkg.id ? "block" : "hidden md:group-hover:block"}`}
                        >
                          <ul className="list-disc list-inside space-y-2 text-left text-white/90 font-medium max-h-[220px]  overflow-y-auto pr-2 custom-scrollbar">
                            {pkg.description1.map((item, index) => (
                              <li key={index} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {pkg.description1 && (index === 2 || index === 3) && (
                        <div
                          className={`absolute flex justify-center mx-6 w-[90%] start-0  z-50 top-[10%] mt-2 px-4 py-3 text-sm bg-black rounded-lg   shadow-lg
      ${activeTooltip === pkg.id ? "block" : "hidden md:group-hover:block"}`}
                        >
                          <ul className="list-disc list-inside space-y-2 text-left text-white/90 font-medium max-h-[220px]  overflow-y-auto pr-2 custom-scrollbar">
                            {pkg.description1.map((item, index) => (
                              <li key={index} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button
                    className="px-6 py-2 text-gray-700 bg-[#FAF4E5] rounded-lg border border-black"
                    onClick={handleCloseLightbox}
                  >
                    Back
                  </button>
                  <CustomMainButton
                    onClick={handleNext}
                    text="Next"
                    disabled={!selectedPackage}
                    hoverColor="white"
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && !showSuccessPopup && (
              <div className="w-full px-8 py-8">
                <h1 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                  Let Us Set Up Your Virtual Office Today
                </h1>
              </div>
            )}

            {/* Success Popup */}
            {showSuccessPopup && (
              <div className="w-full px-8 py-8 text-center">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                    Success!
                  </h3>
                  <p className="max-w-md mx-auto mb-8 text-lg text-gray-600">
                    Your virtual office setup request has been submitted
                    successfully. We'll get back to you soon with the next
                    steps.
                  </p>
                </div>
                <CustomMainButton
                  onClick={closeSuccessPopup}
                  text="Close"
                  disabled={!selectedPackage}
                  hoverColor="white"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualOfficeForm;
