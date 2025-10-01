import React from "react";
import MainTitle from "../sharedComponents/MainTittle";
import phd from "../../assets/images/PhD.webp";
import MBA from "../../assets/images/MBA.webp";
import Masters from "../../assets/images/Master’s.webp";
import Certified from "../../assets/images/Certified.webp";
import Leadership from "../../assets/images/Leadership.webp";
import Member from "../../assets/images/Member.webp";
const qualifications = [
  {
    img: phd,
    title: "PhD In Strategic Planning & Business Excellence (USA)",
  },
  { img: MBA, title: "MBA In Marketing, HRM, And Strategic Management" },
  { img: Masters, title: "Master’s In Human Resource Management (AUD)" },
  {
    img: Leadership,
    title: "Level 7 Leadership Certification (Abu Dhabi University)",
  },
  { img: Member, title: "Member, CIPD UK" },
  { img: Certified, title: "Certified Translator, UNESCO" },
];

export default function QualificationsGrid() {
  return (
    <>
    <div className="pb-6">

      <MainTitle title="Academic Credentials & Affiliations" />
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-0">
        {qualifications.map((q) => (
          <div
            key={q}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-black hover:text-white shadow-md  transition-all duration-300 h-full text-center gap-5"
          >
            <div className="w-100 h-100 overflow-hidden rounded">
              <img
                src={q.img}
                alt="icon"
                className="w-full h-full object-cover "
              />
            </div>

            <p className="text-base font-medium">{q.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
