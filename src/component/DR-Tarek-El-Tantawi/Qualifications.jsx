import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
const qualifications = [
  { id: 1, title: "PhD In Strategic Planning & Business Excellence (USA)" },
  { id: 2, title: "MBA In Marketing, HRM, And Strategic Management" },
  { id: 3, title: "Master’s In Human Resource Management (AUD)" },
  { id: 4, title: "Level 7 Leadership Certification (Abu Dhabi University)" },
  { id: 5, title: "Member, CIPD UK" },
  { id: 6, title: "Certified Translator, UNESCO" },
];

export default function QualificationsGrid() {
  return (
    <>
      <MainTitle title="Academic Credentials & Affiliations" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-0">
        {qualifications.map((q) => (
          <div
            key={q.id}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-black hover:text-white shadow-md  transition-all duration-300 h-full text-center gap-5"
          >
            <div className="w-8 h-8 bg-blue-900 text-white font-bold text-lg flex items-center justify-center transform rotate-45">
              <span className="transform -rotate-45">{q.id}</span>
            </div>

            <p className="text-base font-medium">{q.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
