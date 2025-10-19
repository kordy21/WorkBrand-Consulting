import React from "react";

export default function ProgramHighlights() {
  const sections = [
    {
      title: "Who Should Join?",
      items: [
        "Business Owners & Branch Managers",
        "Marketers & Sales Analysts",
        "Accountants & Financial Analysts",
        "Anyone Dealing With Data-Driven Decisions",
      ],
    },
    {
      title: "What Makes Our Program Different?",
      items: [
        "100% Practical Learning",
        "Real Business Case Studies",
        "Hands-On Training On Top Tools: Power BI, Python, Advanced Excel",
        "AI-Integrated Insights For Predictive And Smart Reporting",
      ],
    },
    {
      title: "Program Outcome",
      items: [
        "Analyze And Visualize Complex Data",
        "Make Confident Business Decisions",
        "Turn Data Into Profit-Driving Insights",
        "Be Job-Market Ready With Real-World Skills",
      ],
    },
  ];

  return (
    <section className=" text-white py-10 px-6 lg:px-0">
      <div className="max-container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-start justify-start">
            <h3 className="text-custom-blue font-semibold text-lg mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2 text-gray-300 leading-relaxed list-disc list-inside">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
