import { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import AAii from "../../assets/images/AAii.webp";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import UnderLineForm from "../sharedComponents/UnderLineForm";

export default function AIPowerSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpen = () => {
    setIsPopupOpen(true);
    console.log("Popup opened");
  };

  return (
    <section className="flex flex-col items-center justify-between overflow-hidden text-white shadow-lg md:flex-row rounded-2xl p-5  md:py-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img src={AAii} alt="AI Power" className="object-cover w-full h-full" />
      </div>

      {/* Right Content */}
      <div className="w-full p-5 md:w-1/2 md:py-12 md:px-5">
        <h2 className="mb-4 text-3xl font-bold leading-snug md:text-4xl text-custom-blue">
          The Power Of Artificial <br /> Intelligence (AI)
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
          In today’s modern workplace, Artificial Intelligence (AI) is a
          powerful tool that helps individuals enhance their managerial skills
          and increase their opportunities in the job market. In this module, we
          offer you a comprehensive overview of how to benefit from AI in your
          professional life — whether you’re a beginner or an experienced
          manager.
        </p>

        <CustomMainButton
          fullWidth
          text="Book Your Office Now"
          TripleArrow={
            <TripleArrowIcon color="text-white" hoverColor="black" />
          }
          onClick={handleOpen}
        />

        {/* Popup Section */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsPopupOpen(false)}
          >
            <div
              className="bg-white rounded-2xl p-6 w-[90%] md:w-[500px] shadow-lg relative"
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
    </section>
  );
}
