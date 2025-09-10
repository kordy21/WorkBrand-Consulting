import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import doctor from '../../assets/images/Doctor.webp';

const AuthorThoughtLeader = () => {
  return (
    <section className="bg-[#1a1a1a] text-white py-12">
      <div className=" max-container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={doctor}
            alt="Author and Thought Leader"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold mb-6">
            Author And Thought Leader
          </h2>
          <p className="text-gray-300 text-center md:text-start leading-relaxed mb-4">
            Dr. Tarek is the author of 18 acclaimed books on strategy,
            leadership, and HR, including bestsellers such as "Exploring
            Organisational Strategy" (200,000+ copies sold) and "Navigating
            Strategy." Major international book fairs have featured his works in
            both English and Arabic.
          </p>
          <p className="text-gray-300  text-center md:text-start leading-relaxed mb-8">
            Numerous articles authored by Dr. Tarek on economics and politics
            have garnered attention on prominent platforms, including Al-Ahram,
            Cairo 24, and CNBC Channel.
          </p>
          <CustomMainButton
            fullWidth
            text="Book Your Office Now"
            TripleArrow={
              <TripleArrowIcon color="text-white" hoverColor="black" />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AuthorThoughtLeader;
