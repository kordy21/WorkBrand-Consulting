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
    <section className="py-8">
      {showTitle && (
        <div className="pb-6 text-center">
          <MainTitle title="Academic Credentials & Affiliations" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5 md:p-0">
        {qualifications.slice(0, visibleCount).map((q, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-black hover:text-white shadow-md transition-all duration-300 text-center gap-5 h-full"
          >
            {q.img && (
              <div className="w-full h-40 overflow-hidden rounded-xl">
                <img
                  src={q.img}
                  alt={q.title || "Qualification image"}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}

            {q.title && <p className="text-lg font-semibold">{q.title}</p>}

            {q.describtion && (
              <p className="text-sm opacity-80">{q.describtion}</p>
            )}
          </div>
        ))}
      </div>

      {visibleCount < qualifications.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-medium text-white bg-custom-blue rounded-md hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300"
          >
             More
          </button>
        </div>
      )}
    </section>
  );
}
