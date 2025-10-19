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
    <section className="bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between rounded-2xl overflow-hidden shadow-lg md:py-8">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img src={AAii} alt="AI Power" className="w-full h-full object-cover" />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue leading-snug mb-4">
          The Power Of Artificial <br /> Intelligence (AI)
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
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
                className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
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
