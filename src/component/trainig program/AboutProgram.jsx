import React from "react";

export default function AboutProgram({
  imageSrc,
  title = "About The Program",
  description = "",
  goalTitle = "Our Goal Is To Equip You With The Capabilities That Make You The Ideal Candidate For Any Organization:",
  goals = [],
  extraDescription = "",
  showBorder = false,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6    text-white pt-8 px-5 md:px-0 rounded-lg ${
        showBorder ? "border border-gray-300" : ""
      }`}
    >
      <div className="lg:w-1/2 text-start">
        <img
          src={imageSrc}
          alt="Program"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="lg:w-1/2 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold text-custom-blue my-4">
          {title}
        </h2>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="border border-1 p-4 rounded mb-4">
          <h3 className="font-semibold mb-2">{goalTitle}</h3>
          <ul className="list-disc list-inside">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-300">{extraDescription}</p>
      </div>
    </div>
  );
}
