// File: AreasOfExpertise.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const areas = [
  {
    id: 1,
    title: "Executive Coaching & Leadership",
    desc: "Empowering leaders to achieve strategic clarity, inspire teams, and drive sustainable growth through executive coaching and transformative leadership practices.",
  },
  {
    id: 2,
    title: "Strategic Planning & Organizational Transformation",
    desc: "Guiding organizations in building agile strategies and executing change management initiatives that ensure long-term success.",
  },
  {
    id: 3,
    title: "Business Model Innovation & Market Expansion",
    desc: "Designing innovative business models and enabling market entry strategies that maximize value and competitive advantage.",
  },
  {
    id: 4,
    title: "Human Capital Development",
    desc: "Cultivating a high-performance culture by developing people, leadership pipelines, and organizational capabilities.",
  },
  {
    id: 5,
    title: "Governmental Advisory & Policy Implementation",
    desc: "Supporting public institutions with evidence-based advisory to enhance governance, policy design, and execution efficiency.",
  },
  {
    id: 6,
    title: "Brand Identity & Personal Branding",
    desc: "Crafting authentic brand identities that reflect purpose, values, and a compelling market presence.",
  },
];

export default function AreasOfExpertise() {
  const [active, setActive] = useState(areas[0]);

  return (
    <div className="relative  min-h-screen flex-col items-center justify-center bg-[#0f0f12] text-white px-6 py-20 overflow-hidden">
      <div className="max-container">

      <h3 className="text-2xl font-semibold text-custom-blue mb-2 ">
        Areas Of Expertise
      </h3>
      <p className="text-sm text-gray-400 mb-8">
        An Expert In Corporate Risk Management, Supporting Organizations Seeking
        A Calculated And Risk-Conscious Transformation
      </p>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Circle Section */}
        <div className="flex items-center justify-center relative">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-700"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border border-gray-800"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-900"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-sm"
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-3">
                Comprehensive Expertise
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {active.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Zigzag Tabs */}
        <div className="flex flex-col justify-center relative">
      
          <div className="relative">
            {areas.map((area, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.button
                  key={area.id}
                  onClick={() => setActive(area)}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`absolute flex items-center gap-3 px-5 py-3 rounded-lg border transition-all duration-300 ${
                    active.id === area.id
                      ? "bg-custom-blue border-blue-500 text-white shadow-lg"
                      : "bg-[#1a1a1f] border-gray-700 text-gray-300 hover:bg-[#22222a]"
                  }`}
                  style={{
                    top: `${i * 75}px`,
                    left: isLeft ? "0px" : "100px",
                    width: "calc(100% - 100px)",
                  }}
                >
                  <span className="flex items-center justify-center w-6 h-6 text-xs font-semibold bg-custom-blue text-white rounded-full">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{area.title}</span>
                </motion.button>
              );
            })}
            <div className="h-[600px]" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
