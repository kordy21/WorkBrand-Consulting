import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import doctor from "../../assets/images/navigate.webp";
import CNB from "../../assets/images/cnb.webp";
import alahram from "../../assets/images/alahram.webp";
import alkaharah from "../../assets/images/alkaharah.webp";

const AuthorThoughtLeader = () => {
  return (
    <section className="bg-custom-gradient-black text-white py-12">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-[90%] mx-auto">
          <img
            src={doctor}
            alt="Author and Thought Leader"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="lg:w-[90%] px-5 md:p-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-start">
            Thought Leadership
          </h2>

          <p className="text-gray-300 text-center md:text-start leading-relaxed mb-4">
            Dr. Tarek is the author of 18 acclaimed books on strategy,
            leadership, and HR, including bestsellers such as{" "}
            <span className="text-white font-semibold">
              "Exploring Organisational Strategy"
            </span>{" "}
            (200,000+ copies sold) and{" "}
            <span className="text-white font-semibold">
              "Navigating Strategy."
            </span>{" "}
            His works, featured at major international book fairs, are available
            in both English and Arabic.
          </p>

          <p className="text-gray-300 text-center md:text-start leading-relaxed mb-8">
            His articles on economics and politics have been featured on
            prominent platforms like{" "}
            <span className="font-semibold text-white">Al-Ahram</span>,{" "}
            <span className="font-semibold text-white">Cairo 24</span>, and{" "}
            <span className="font-semibold text-white">CNBC Channel</span>,
            establishing him as a trusted voice in the public sphere.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pb-6">
            {[
              { src: alkaharah, alt: "Cairo24" },
              { src: CNB, alt: "CNBC" },
              { src: alahram, alt: "Al-Ahram" },
            ].map((item, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border rounded-lg shadow flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <img src={item.src} alt={item.alt} className="w-10 h-10" />
              </button>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-4 pt-6">
            <CustomMainButton
              text="Book Your Office Now"
              fullWidth={false}
              TripleArrow={
                <TripleArrowIcon color="text-white" hoverColor="black" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorThoughtLeader;
