import React from "react";

const ProgramCardGrid = ({ programs = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
      {programs.map((program, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105"
        >
          <div className="w-full h-48 overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                {program.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href={program.link || "#"}
                className="block text-center border border-custom-blue text-custom-blue py-2 rounded hover:bg-custom-blue hover:text-white transition"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramCardGrid;
