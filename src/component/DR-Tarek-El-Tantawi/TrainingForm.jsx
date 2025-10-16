import React, { useState } from "react";

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
    <div className="max-h-[80vh] overflow-y-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto rounded-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-custom-blue">
          Let Us Set Up Your Training Hall Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-1 font-bold text-lg text-black"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            />
          </div>

          {/* Your Position */}
          <div className="flex flex-col">
            <label
              htmlFor="yourPosition"
              className="mb-1 font-bold text-lg text-black"
            >
              Your Position *
            </label>
            <input
              type="text"
              id="yourPosition"
              name="yourPosition"
              value={formData.yourPosition}
              onChange={handleChange}
              required
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 font-bold text-lg text-black"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="mb-1 font-bold text-lg text-black"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            />
          </div>

          {/* Full-width fields */}
          {[
            { id: "businessType", label: "What Does Your Business Do?" },
            {
              id: "businessYears",
              label: "How Long Has Your Business Been Operating?",
            },
            {
              id: "currentlyHiring",
              label:
                "What Challenges Are You Currently Facing in Your Business?",
            },
            {
              id: "consultingInterest",
              label:
                "What Goals Would You Like to Achieve Through This Consultation?",
            },
            {
              id: "previousConsultants",
              label: "Have You Worked With a Business Consultant Before?",
            },
            {
              id: "preferredConsultant",
              label: "Which Consultant Do You Prefer/Need?",
            },
          ].map((field) => (
            <div key={field.id} className="flex flex-col md:col-span-2">
              <label
                htmlFor={field.id}
                className="mb-1 font-bold text-lg text-black"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
              />
            </div>
          ))}

          {/* Preferred Consultation Type */}
          <div className="flex flex-col">
            <label
              htmlFor="preferredConsultationType"
              className="mb-1 font-bold text-lg text-black"
            >
              Preferred Type
            </label>
            <select
              id="preferredConsultationType"
              name="preferredConsultationType"
              value={formData.preferredConsultationType}
              onChange={handleChange}
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            >
              <option value="In-person">In-person</option>
              <option value="Online">Online</option>
            </select>
          </div>

          {/* Do You Prefer In-Person */}
          <div className="flex flex-col">
            <label
              htmlFor="inPersonPreference"
              className="mb-1 font-bold text-lg text-black"
            >
              Do You Prefer In-Person?
            </label>
            <select
              id="inPersonPreference"
              name="inPersonPreference"
              value={formData.inPersonPreference}
              onChange={handleChange}
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
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
              className="mb-1 font-bold text-lg text-black"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="border border-custom-blue p-2 rounded focus:outline-none focus:ring-2 bg-gray-100 focus:ring-custom-blue"
            />
          </div>

          {/* Data Policy */}
          <div className="flex items-center gap-2 md:col-span-2">
            <input
              type="checkbox"
              name="dataPolicy"
              checked={formData.dataPolicy}
              onChange={handleChange}
              required
              className="accent-custom-blue"
            />
            <span className="text-custom-blue">I Accept The Data Policy</span>
          </div>
        </div>

        <a
          href="https://new.workbrand.org/refund-police"
          className="text-black hover:underline hover:cursor-pointer"
        >
          Review Our Policy
        </a>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            className="flex-1 px-6 py-2 rounded border border-black text-black bg-black/10 hover:bg-black/20 transition duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-2 rounded border border-black text-white bg-custom-blue hover:bg-black hover:text-white duration-300 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainingForm;
