import React from "react";

const timelineData = [
  {
    year: "2017",
    title: "The Launch",
    description:
      "We started from a small office in Nasr City with a big vision: Provide practical office solutions with real value for business owners.",
  },
  {
    year: "2018",
    title: "Expanding Office Solutions",
    description:
      "We introduced flexible packages and services tailored for different sized entrepreneurs.",
  },
  {
    year: "2019",
    title: "Entering The Media World",
    description:
      "We launched our media production services and opened our first media studio.",
  },
  {
    year: "2020",
    title: "More Packages, More Services",
    description:
      "We expanded our services to include branding and digital marketing.",
  },
  {
    year: "2021",
    title: "Shift to Training & Consulting",
    description:
      "We started specialized training programs and consultancy for entrepreneurs.",
  },
  {
    year: "2022",
    title: "New Branch in Mohandessin",
    description:
      "We opened our new branch to deliver office solutions closer to clients.",
  },
  {
    year: "2023",
    title: "VIP Space & Bigger Impact",
    description:
      "We launched VIP offices with tailored luxury experiences for business owners.",
  },
];

const Timeline = () => {
  return (
    <>
      <section className="relative hidden mb-12 max-container md:p-5 lg:p-0 md:block">
        <div className="absolute top-0 w-1 h-full transform -translate-x-1/2 left-1/2 bg-custom-primary"></div>

        <div className="space-y-6 lg:space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-5/12 p-6 shadow-md bg-custom-gradient-card rounded-xl">
                <h3 className="mb-2 text-xl font-bold text-custom-primary">
                  {item.year}
                </h3>
                <h4 className="mb-1 text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>

                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-6 h-6  bg-custom-gradient-orange  shadow-lg  shadow-orange-300 rounded-full  ${
                    index % 2 === 0 ? "-right-12" : "-left-12"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="block mb-12 max-container md:hidden ">
        <div className="space-y-6 lg:space-y-12 ">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-center w-full px-4">
              <div className="relative flex flex-col items-center justify-center w-full gap-2 p-6 overflow-hidden rounded-lg shadow-md group">
                <div className="absolute inset-0 transition-opacity duration-300 bg-custom-gradient-card"></div>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-custom-gradient-dark"></div>

                <h3 className="relative mb-2 text-xl font-bold text-center text-custom-primary">
                  {item.year}
                </h3>
                <h4 className="relative mb-1 text-lg font-semibold text-center text-black duration-300 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="relative text-center text-gray-600 duration-300 group-hover:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Timeline;
