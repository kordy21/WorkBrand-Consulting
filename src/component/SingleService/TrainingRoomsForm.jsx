import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";

const TrainingRoomsForm = ({ setShow }) => {
  const [lightboxOpen, setLightboxOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleCloseLightbox = (e) => {
    if (e.target.tagName === "IMG") return;
    if (e.target === e.currentTarget) {
      setLightboxOpen(false);
      setShow(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = () => {
    setCurrentStep(2);
  };

  const closeSuccessPopup = () => {
    setCurrentStep(1);
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
            {/* Step 1: Form */}
            {currentStep === 1 && (
              <div className="w-full px-8">
                <h1 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                  Let Us Set Up Your Training Rooms Today
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
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
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
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
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
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
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
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
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
                      Date and time
                    </label>
                    <select
                      name="Dateandtime"
                      value={formData.businessSector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
                    >
                      <option value="">Select Date and Time</option>
                      <option value="technology">1</option>
                      <option value="finance">2</option>
                      <option value="healthcare">3</option>
                      <option value="retail">4</option>
                      <option value="other">5</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700 lg:text-lg">
                      Office Size
                    </label>
                    <select
                      name="OfficeSize"
                      value={formData.businessSector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
                    >
                      <option value="">Select Office Size</option>
                      {Array.from({ length: 40 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
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
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg bg-[#FAF4E5]"
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
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg resize-none bg-[#FAF4E5]"
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
                    className="px-6 py-2 text-gray-700 bg-[#FAF4E5] rounded-lg border border-black"
                    onClick={handleCloseLightbox}
                  >
                    Back
                  </button>
                  <CustomMainButton
                    onClick={handleSend}
                    text="Send"
                    hoverColor="white"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Success Popup */}
            {currentStep === 2 && (
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
                  <h2 className="mb-8 text-3xl font-bold text-center text-transparent lg:text-4xl bg-custom-gradient-orange bg-clip-text">
                    Success!
                  </h2>
                  <p className="max-w-md mx-auto mb-8 text-lg text-gray-600">
                    Your virtual office setup request has been submitted
                    successfully. We'll get back to you soon with the next
                    steps.
                  </p>
                </div>
                <CustomMainButton
                  onClick={closeSuccessPopup}
                  text="Close"
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

export default TrainingRoomsForm;
