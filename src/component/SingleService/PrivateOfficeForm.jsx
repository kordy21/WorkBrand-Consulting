import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import twins from "../../assets/Icons/👥 1.svg";
import four from "../../assets/Icons/four.svg";
import six from "../../assets/Icons/six.svg";
const PrivateOfficeForm = ({ setShow }) => {
  const [lightboxOpen, setLightboxOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOfficeSize, setSelectedOfficeSize] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    branch: "",
    businessType: "",
    officeSize: "",
    howDidYouHear: "",
    additionalNotes: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const officeSizes = [
    {
      id: "small",
      name: "Small Office",
      description: "Perfect For 2-4 People",
      icon: twins,
      sallery: "500Egp",
    },
    {
      id: "medium",
      name: "Medium Office",
      description: "Ideal For 5-6 People",
      icon: four,
      sallery: "1000Egp",
    },
    {
      id: "large",
      name: "Large Office",
      description: "Great For Up To 8 People",
      icon: six,
      sallery: "1500Egp",
    },
  ];

  const handleCloseLightbox = (e) => {
    if (e.target.tagName === "IMG") return;
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
      setShow(false);
    }
  };

  const handleOfficeSizeSelect = (sizeId) => {
    setSelectedOfficeSize(sizeId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep === 1 && selectedOfficeSize) {
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
    setSelectedOfficeSize("");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      branch: "",
      businessType: "",
      officeSize: "",
      howDidYouHear: "",
      additionalNotes: "",
    });
    setLightboxOpen(false);
    setShow(false);
  };

  return (
    <div className="">
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={handleCloseLightbox}
        >
          <div className="relative flex flex-col items-center justify-start w-full max-w-4xl py-8 bg-white rounded-lg max-h-[90vh] overflow-y-auto">
            {/* Step 1: Office Size Selection */}
            {currentStep === 1 && !showSuccessPopup && (
              <div className="w-full px-8">
                <h1 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                  Choose Office Size
                </h1>

                <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
                  {officeSizes.map((office) => (
                    <div
                      key={office.id}
                      onClick={() => handleOfficeSizeSelect(office.id)}
                      className={`p-6 rounded-lg border  border-1 cursor-pointer transition-all duration-300 ${
                        selectedOfficeSize === office.id
                          ? "border border-gray-500 bg-gray-50 shadow-lg"
                          : "bg-[#FAF4E5] hover:border-custom-primary hover:border"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center text-center">
                        <img src={office.icon} className="w-8 h-8 mb-4" />
                        <h3 className="mb-2 text-lg font-semibold text-gray-800">
                          {office.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {office.description}
                        </p>
                        <p className="text-sm font-bold text-gray-800">
                          {office.sallery} 
                        </p>
                      </div>
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
                    disabled={!selectedOfficeSize}
                    hoverColor="white"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Private Office Setup Form */}
            {currentStep === 2 && !showSuccessPopup && (
              <div className="w-full px-8">
                <h1 className="mb-8 text-3xl font-bold text-center text-transparent bg-custom-gradient-orange bg-clip-text">
                  Let Us Set Up Your Private Office Today
                </h1>

                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Your Full Name"
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Your Phone Number"
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      <span className="text-red-500">*</span> Choose Your Branch
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    >
                      <option value="">Select Location</option>
                      <option value="downtown">Downtown</option>
                      <option value="uptown">Uptown</option>
                      <option value="business-district">
                        Business District
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Type Of Business
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="Enter Your Type Of Business"
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Office Size
                    </label>
                    <select
                      name="officeSize"
                      value={formData.officeSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                    >
                      <option value="">Select Office Size</option>
                      <option value="small">Small Office (2-4 People)</option>
                      <option value="medium">Medium Office (5-6 People)</option>
                      <option value="large">
                        Large Office (Up to 8 People)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                    How Did You Hear About Us?
                  </label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                  >
                    <option value="">Select Option</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Tell Us About Any Specific Requirements Or Questions You Have..."
                    rows={4}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg resize-none bg-[#FAF4E5] focus:outline-none focus:border-custom-primary"
                  />
                </div>

                <div className="mb-4">
                  <button className="flex items-center justify-center gap-2 mb-2 text-sm font-bold text-gray-700 duration-300 lg:text-lg hover:text-custom-primary">
                    <span className="">Review Our Policy</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 text-gray-700 bg-[#FAF4E5] rounded-lg border border-black hover:bg-gray-200 transition-colors"
                  >
                    Back
                  </button>
                  <CustomMainButton
                    onClick={handleSend}
                    text="Send"
                    disabled={false}
                    hoverColor="white"
                  />
                </div>
              </div>
            )}

            {/* Success Popup */}
            {showSuccessPopup && (
              <div className="w-full px-8 text-center">
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
                  <h3 className="mb-4 text-3xl font-bold text-gray-800">
                    Success!
                  </h3>
                  <p className="max-w-md mx-auto mb-8 text-lg text-gray-600">
                    Your private office setup request has been submitted
                    successfully. We'll get back to you soon with the next
                    steps.
                  </p>
                </div>
                <CustomMainButton
                  onClick={closeSuccessPopup}
                  text="Close"
                  disabled={false}
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

export default PrivateOfficeForm;
