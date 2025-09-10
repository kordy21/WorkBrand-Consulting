import React from "react";

const A_Q = ({ number, title, description, list,description1,description2,description3 }) => {
  return (
    <div className="h-full p-5 mb-6 bg-white border border-gray-200 rounded-xl drop-shadow-sm ">
      <h3 className="flex items-start m-2 font-bold text-black lg:text-xl">
        {number && <span className="mr-2">{number}.</span>}
        {title}
      </h3>

      {description && (
        <p className="m-2 text-sm leading-relaxed text-gray-600 lg:text-base">{description}</p>
      )}

      {Array.isArray(list) && list.length > 0 && (
        <ul className="pl-6 space-y-2 text-gray-600 list-disc">
          {list.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
      {description && (
        <p className="m-2 leading-relaxed text-gray-600">{description1}</p>
      )}
      {description && (
        <p className="m-2 leading-relaxed text-gray-600">{description2}</p>
      )}
      {description && (
        <p className="leading-relaxed text-custom-primary ">{description3}</p>
      )}
    </div>
  );
};

export default A_Q;
