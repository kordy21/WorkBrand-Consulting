import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import doctor from '../../assets/images/navigate.webp';
import CNB from '../../assets/images/cnb.webp';
import alahram from "../../assets/images/alahram.webp";
import alkaharah from "../../assets/images/alkaharah.webp";
const AuthorThoughtLeader = () => {
  return (
    <section className=" bg-custom-gradient-black text-white py-12">
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
            Thought Leadership
          </h2>
          <p className="text-gray-300 text-center md:text-start leading-relaxed mb-4">
            Dr. Tarek is the author of 18 acclaimed books on strategy,
            leadership, and HR, including bestsellers such as "Exploring
            Organisational Strategy" (200,000+ copies sold) and "Navigating
            Strategy." His works, featured at major international book fairs,
            are available in both English and Arabic.
          </p>
          <p className="text-gray-300  text-center md:text-start leading-relaxed mb-8">
            His articles on economics and politics have been featured on
            prominent platforms like Al-Ahram, Cairo 24, and CNBC Channel,
            establishing him as a trusted voice in the public sphere.
          </p>
          <div className="flex gap-4 pb-6">
            <button className="px-4 py-2 bg-white border rounded-lg shadow flex items-center justify-center">
              <img src={alkaharah} alt="btn1" className="w-10 h-10" />
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg shadow flex items-center justify-center">
              <img src={CNB} alt="btn2" className="w-10 h-10" />
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg shadow flex items-center justify-center">
              <img src={alahram} alt="btn3" className="w-10 h-10" />
            </button>
          </div>

          <CustomMainButton
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
