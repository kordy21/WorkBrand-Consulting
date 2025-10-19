import { React, useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import doctor from "../../assets/images/navigate.webp";
import CNB from "../../assets/images/cnb.webp";
import alahram from "../../assets/images/alahram.webp";
import alkaharah from "../../assets/images/alkaharah.webp";
import UnderLineForm from "../sharedComponents/UnderLineForm";
import { motion, AnimatePresence } from "framer-motion";

const AuthorThoughtLeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className=" text-white bg-[#0b0b0c]">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.08), transparent 70%)",
            "radial-gradient(circle at 70% 60%, rgba(0,195,255,0.08), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,123,255,0.08), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid items-center grid-cols-1 gap-6 py-12 max-container md:grid-cols-2">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-[100%] mx-auto">
            <img
              src={doctor}
              alt="Author and Thought Leader"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:w-[90%] px-5 md:pt-0">
            <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl md:text-start">
              Thought Leadership
            </h2>

            <p className="mb-4 leading-relaxed text-center text-gray-300 md:text-start">
              Dr. Tarek is the author of 18 acclaimed books on strategy,
              leadership, and HR, including bestsellers such as{" "}
              <span className="font-semibold text-white">
                "Exploring Organisational Strategy"
              </span>{" "}
              (200,000+ copies sold) and{" "}
              <span className="font-semibold text-white">
                "Navigating Strategy."
              </span>{" "}
              His works, featured at major international book fairs, are
              available in both English and Arabic.
            </p>

            <p className="mb-8 leading-relaxed text-center text-gray-300 md:text-start">
              His articles on economics and politics have been featured on
              prominent platforms like{" "}
              <span className="font-semibold text-white">Al-Ahram</span>,{" "}
              <span className="font-semibold text-white">Cairo 24</span>, and{" "}
              <span className="font-semibold text-white">CNBC Channel</span>,
              establishing him as a trusted voice in the public sphere.
            </p>

            <div className="flex justify-center gap-4 pb-6 md:justify-start">
              {[
                { src: alkaharah, alt: "Cairo24" },
                { src: CNB, alt: "CNBC" },
                { src: alahram, alt: "Al-Ahram" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center px-4 py-2 transition-transform duration-300 bg-white border rounded-lg shadow hover:scale-110"
                >
                  <img src={item.src} alt={item.alt} className="h-10 " />
                </button>
              ))}
            </div>

            <div className="flex justify-center gap-4 pt-6 md:justify-start">
              <CustomMainButton
                text="Book Your Office Now"
                fullWidth={false}
                TripleArrow={
                  <TripleArrowIcon color="text-white" hoverColor="black" />
                }
                onClick={() => setIsPopupOpen(true)}
              />

              {isPopupOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <div
                    className="bg-white rounded-2xl p-6 w-[500px] shadow-lg relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setIsPopupOpen(false)}
                      className="absolute text-2xl text-gray-600 top-2 right-3 hover:text-black"
                    >
                      ✖
                    </button>

                    <UnderLineForm />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AuthorThoughtLeader;
