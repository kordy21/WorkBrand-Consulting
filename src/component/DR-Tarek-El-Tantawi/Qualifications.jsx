import React, { useState } from "react";
import MainTitle from "../sharedComponents/MainTittle";

export default function QualificationsGrid({
  qualifications = [],
  showTitle = true,
}) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      {showTitle && (
        <div className="pb-6">
          <MainTitle title="Academic Credentials & Affiliations" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 md:p-0">
        {qualifications.slice(0, visibleCount).map((q, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-black hover:text-white shadow-md transition-all duration-300 h-full text-center gap-5"
          >
            <div className="w-100 h-100 overflow-hidden rounded">
              <img
                src={q.img}
                alt={q.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-base font-medium">{q.title}</p>
          </div>
        ))}
      </div>

      {visibleCount < qualifications.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="relative inline-flex items-center justify-center gap-3 px-4 py-4 text-sm text-white rounded-md lg:px-4 lg:py-1 sm:text-base group overflow-hidden w-full max-w-[250px] h-[50px] mx-auto bg-custom-blue hover:bg-white hover:text-black transition-all duration-300"
          >
            More
          </button>
        </div>
      )}
    </>
  );
}
