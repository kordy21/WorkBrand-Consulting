import {React,useState} from "react";
import MainTittle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from '../sharedComponents/TripleArrowIcon';
import bg from '../../assets/images/bg-square.png';
import UnderLineForm from "../sharedComponents/UnderLineForm";
const ProgramsSection = ({
  sectionTitle,
  sectionDescription,
  programs,
  ctaText,
  ctaLink,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className=" bg-custom-gradient-black px-4 my-12 ">
      <div className="bg-custom-gradient-black  py-12 max-container">
        <MainTittle
          title={sectionTitle}
          description={sectionDescription}
          align="start"
          color="no"
        />

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-2 ">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-custom-gradient-black rounded-2xl shadow-md overflow-hidden flex flex-col border-2 border-[#282727]"
            >
              <div className="overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-150"
                />
              </div>

              <div className="flex flex-col flex-grow p-4">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {program.title}
                </h3>
                <p className="flex-grow mb-4 text-sm text-white">
                  {program.description}
                </p>
                <div className="flex flex-col lg:flex-row gap-4">
                  <a href={ctaLink} className="flex-1">
                    <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-black transition-colors duration-300">
                      Explore More
                    </button>
                  </a>
                  <a href={ctaLink} className="flex-1">
                    <CustomMainButton
                      fullWidth
                      text="Book Your Office Now"
                      TripleArrow={
                        <TripleArrowIcon
                          color="text-white"
                          hoverColor="black"
                        />
                      }
                      onClick={() => setIsPopupOpen(true)}
                    />
                  </a>
                  {isPopupOpen && (
                    <div
                      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50"
                      onClick={() => setIsPopupOpen(false)}
                    >
                      <div
                        className="bg-white rounded-2xl p-6 w-[500px] shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setIsPopupOpen(false)}
                          className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
                        >
                          ✖
                        </button>

                       <UnderLineForm/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex flex-col items-center justify-center mt-10">
          <a href={ctaLink}>
            <CustomMainButton
              fullWidth
              text="Book Your Office Now"
              TripleArrow={
                <TripleArrowIcon color="text-white" hoverColor="black" />
              }
            />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;
