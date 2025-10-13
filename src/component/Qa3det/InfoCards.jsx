import React from "react";

const InfoCards = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 p-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="group flex-1 bg-white hover:bg-black duration-300 rounded-xl shadow-sm border border-gray-100 text-center p-6 hover:shadow-md transition-all"
        >
          <div className="flex justify-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-custom-blue text-white font-semibold text-lg rotate-45 border-2 border-white shadow-md">
              <span className="-rotate-45">{index + 1}</span>
            </div>
          </div>

          <p className="text-custom-black text-xl font-medium leading-snug transition-colors duration-300 group-hover:text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
