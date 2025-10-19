import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    yourPosition: "",
    email: "",
    phoneNumber: "",
    businessType: "",
    businessYears: "",
    currentlyHiring: "",
    consultingInterest: "",
    previousConsultants: "",
    preferredConsultant: "",
    preferredConsultationType: "In-person",
    inPersonPreference: "",
    additionalNotes: "",
    dataPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 rounded-md"
      >
        <h2 className="mb-6 text-3xl font-bold text-center text-custom-blue">
          Let Us Set Up Your Training Hall Today
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-1 text-lg font-bold text-black"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>

          {/* Your Position */}
          <div className="flex flex-col">
            <label
              htmlFor="yourPosition"
              className="mb-1 text-lg font-bold text-black"
            >
              Your Position *
            </label>
            <input
              type="text"
              id="yourPosition"
              name="yourPosition"
              placeholder="Enter Your Position"
              value={formData.yourPosition}
              onChange={handleChange}
              required
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-lg font-bold text-black"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="mb-1 text-lg font-bold text-black"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>

          {/* Full-width fields */}
          {[
            {
              id: "businessType",
              label: "What Does Your Business Do?",
              placeholder: "Describe your industry and services/products",
            },
            {
              id: "businessYears",
              label: "How Long Has Your Business Been Operating?",
              placeholder: "Enter Your answer",
            },
            {
              id: "currentlyHiring",
              label:
                "What Challenges Are You Currently Facing in Your Business?",
              placeholder: "Enter Your answer",
            },
            {
              id: "consultingInterest",
              label:
                "What Goals Would You Like to Achieve Through This Consultation?",
              placeholder: "Enter Your answer",
            },
            {
              id: "previousConsultants",
              label: "Have You Worked With a Business Consultant Before?",
              placeholder: "Select consultation type",
            },
            {
              id: "preferredConsultant",
              label: "Which Consultant Do You Prefer/Need?",
              placeholder: "Select Your answer",
            },
          ].map((field) => (
            <div key={field?.id} className="flex flex-col md:col-span-2">
              <label
                htmlFor={field?.id}
                className="mb-1 text-lg font-bold text-black"
              >
                {field?.label}
              </label>
              <input
                type="text"
                id={field?.id}
                name={field?.id}
                placeholder={field?.placeholder}
                value={formData[field?.id]}
                onChange={handleChange}
                className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
              />
            </div>
          ))}

          {/* Preferred Consultation Type */}
          <div className="flex flex-col">
            <label
              htmlFor="preferredConsultationType"
              className="mb-1 text-lg font-bold text-black"
            >
              Preferred Type
            </label>
            <select
              id="preferredConsultationType"
              name="preferredConsultationType"
              value={formData.preferredConsultationType}
              onChange={handleChange}
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            >
              <option value="In-person">In-person</option>
              <option value="Online">Online</option>
            </select>
          </div>

          {/* Do You Prefer In-Person */}
          <div className="flex flex-col">
            <label
              htmlFor="inPersonPreference"
              className="mb-1 text-lg font-bold text-black"
            >
              Do You Prefer In-Person?
            </label>
            <select
              id="inPersonPreference"
              name="inPersonPreference"
              value={formData.inPersonPreference}
              onChange={handleChange}
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="additionalNotes"
              className="mb-1 text-lg font-bold text-black"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              placeholder="Tell us about any specific requirements or questions you have...
"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="p-2 bg-gray-100 rounded border-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          </div>

          {/* Data Policy */}
          {/* <div className="flex items-center gap-2 md:col-span-2">
            <input
              type="checkbox"
              name="dataPolicy"
              checked={formData.dataPolicy}
              onChange={handleChange}
              required
              className="accent-custom-blue"
            />
            <span className="text-custom-blue">I Accept The Data Policy</span>
          </div> */}
        </div>

        <div className="flex items-center gap-3 group hover:cursor-pointer">
          <a
            href="https://new.workbrand.org/refund-police"
            className="text-black duration-300 group-hover:text-custom-primary"
          >
            Review Our Policy
          </a>
          <ChevronRightIcon className="w-4 h-4 text-black duration-300 group-hover:text-custom-primary" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            className="flex-1 px-6 py-2 text-black transition duration-300 rounded bg-black/10 hover:bg-black/20"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-2 text-white transition duration-300 rounded bg-custom-blue hover:bg-black hover:text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
