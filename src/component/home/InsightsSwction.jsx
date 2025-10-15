import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const expertiseData = [
  {
    id: 1,
    title: "Executive Coaching & Leadership",
    desc: "Helping executives unlock their full potential, strengthen leadership skills, and build high-performing teams through data-driven coaching frameworks.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
  },
  {
    id: 2,
    title: "Strategic Planning & Organizational Transformation",
    desc: "Guiding organizations to reimagine their strategic direction and execute transformative plans that drive sustainable growth.",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800",
  },
  {
    id: 3,
    title: "Business Model Innovation & Market Expansion",
    desc: "Identifying innovative business models and expansion opportunities that align with evolving markets and technologies.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
  {
    id: 4,
    title: "Human Capital Development",
    desc: "Designing initiatives to nurture talent, strengthen employee engagement, and build resilient corporate cultures.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
  },
  {
    id: 5,
    title: "Governmental Advisory & Policy Implementation",
    desc: "Collaborating with governments to shape policies and implement programs focused on economic resilience and innovation.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
  },
  {
    id: 6,
    title: "Brand Identity & Personal Branding",
    desc: "Crafting distinctive brand identities and personal brand strategies that elevate visibility and credibility in competitive markets.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
];

export default function InsightsSection() {
  const [activeTab, setActiveTab] = useState(expertiseData[0]);

  return (
    <section className="relative w-full overflow-hidden py-24 text-white">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#282727] to-[#151516]">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(40,39,39,0.2), transparent 70%)",
              "radial-gradient(circle at 80% 70%, rgba(21,21,22,0.25), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(40,39,39,0.2), transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Glowing Circles & Changing Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-blue-500/20 shadow-[0_0_20px_#007bff30]"
                style={{
                  width: `${220 + i * 120}px`,
                  height: `${220 + i * 120}px`,
                  top: `-${i * 60}px`,
                  left: `-${i * 60}px`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                className="relative z-10 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xl font-light tracking-widest leading-snug mb-3">
                  <span className="block text-gray-300 text-sm mb-1">
                    Comprehensive
                  </span>
                  <span
                    className="font-semibold text-2xl text-custom-blue
                  "
                  >
                    Expertise
                  </span>
                </h2>
                <motion.img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="rounded-2xl shadow-xl border border-gray-700"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Tabs */}
        <div className="w-full lg:w-1/2">
          <motion.h3
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-semibold mb-6 text-custom-blue"
          >
            Areas Of Expertise
          </motion.h3>

          <div className="space-y-3">
            {expertiseData.map((item, i) => (
              <motion.div
                key={item.id}
                onClick={() => setActiveTab(item)}
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-4 cursor-pointer rounded-xl p-5 transition-all border ${
                  activeTab.id === item.id
                    ? "bg-[#10121a]/80 border-blue-500 shadow-[0_0_15px_#007bff50]"
                    : "bg-[#10121a]/50 border-gray-700 hover:border-blue-500"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border font-semibold ${
                    activeTab.id === item.id
                      ? "bg-blue-500/20 border-blue-400 text-blue-300"
                      : "bg-blue-500/10 border-gray-600 text-gray-400"
                  }`}
                >
                  {item.id}
                </div>
                <p className="text-gray-200 font-medium text-sm md:text-base">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Active Tab Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-[#0f121a]/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-[0_0_20px_#00000050]"
            >
              <p className="text-gray-300 leading-relaxed">{activeTab.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
