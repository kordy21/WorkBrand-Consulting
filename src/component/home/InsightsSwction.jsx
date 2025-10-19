import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const expertiseData = [
  {
    id: 1,
    title: "Executive Coaching & Leadership",
    desc: "Helping executives unlock their full potential, strengthen leadership skills, and build high-performing teams through data-driven coaching frameworks.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&fm=webp",
  },
  {
    id: 2,
    title: "Strategic Planning & Organizational Transformation",
    desc: "Guiding organizations to reimagine their strategic direction and execute transformative plans that drive sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=900&fm=webp",
  },
  {
    id: 3,
    title: "Business Model Innovation & Market Expansion",
    desc: "Identifying innovative business models and expansion opportunities that align with evolving markets and technologies.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&fm=webp",
  },
  {
    id: 4,
    title: "Human Capital Development",
    desc: "Designing initiatives to nurture talent, strengthen employee engagement, and build resilient corporate cultures.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&fm=webp",
  },
  {
    id: 5,
    title: "Governmental Advisory & Policy Implementation",
    desc: "Collaborating with governments to shape policies and implement programs focused on economic resilience and innovation.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&fm=webp",
  },
  {
    id: 6,
    title: "Brand Identity & Personal Branding",
    desc: "Crafting distinctive brand identities and personal brand strategies that elevate visibility and credibility in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&fm=webp",
  },
];

export default function InsightsSection() {
  const [activeTab, setActiveTab] = useState(expertiseData[0]);

  // 🔹 Preload images for smoother transitions
  useEffect(() => {
    expertiseData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-24 text-white bg-[#0b0b0c]">
      {/* 🔹 Elegant Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0b0b0c] to-[#1a1a1a]" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(0,123,255,0.08), transparent 70%)",
            "radial-gradient(circle at 70% 60%, rgba(0,195,255,0.08), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,123,255,0.08), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-container">
        <div className="relative z-10 flex flex-col items-center w-full gap-12 px-6 md:px-12 lg:px-20 lg:flex-row">
          {/* 🖼 Left Side - Animated Image + Description + Glowing Circles */}
          <div className="relative flex flex-col items-center w-full px-5 lg:w-1/2">
            <div className="relative mb-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-[#007bff30]"
                  style={{
                    width: `${240 + i * 120}px`,
                    height: `${240 + i * 120}px`,
                    top: `-${i * 60}px`,
                    left: `-${i * 60}px`,
                  }}
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  className="relative z-10 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-4 text-xl font-light tracking-widest">
                    <span className="block mb-1 text-sm text-gray-400">
                      Comprehensive
                    </span>
                    <span className="font-semibold text-3xl text-[#009dff]">
                      Expertise
                    </span>
                  </h2>

                  <div className="relative group">
                    <motion.div
                      className="absolute inset-0 rounded-3xl blur-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,123,255,0.4), rgba(0,195,255,0.2))",
                      }}
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.img
                      src={activeTab.image}
                      alt={activeTab.title}
                      className="relative rounded-3xl border border-[#007bff30] shadow-[0_0_45px_rgba(0,123,255,0.25)] group-hover:shadow-[0_0_70px_rgba(0,195,255,0.35)] transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      }}
                    />
                  </div>

                  <motion.div
                    key={activeTab.id + "-desc"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                  >
                    <p>{activeTab.desc}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 📋 Right Side - Expertise List */}
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-semibold mb-6 text-[#00aaff]"
            >
              Areas Of Expertise
            </motion.h3>

            <div className="space-y-3">
              {expertiseData.map((item, i) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 cursor-pointer rounded-xl p-5 transition-all border backdrop-blur-sm ${
                    activeTab.id === item.id
                      ? "bg-white/5 border-[#00aaff50] shadow-[0_0_20px_rgba(0,170,255,0.2)]"
                      : "bg-white/5 border-gray-700 hover:border-[#00aaff60]"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm font-semibold ${
                      activeTab.id === item.id
                        ? "bg-[#00aaff15] border-[#00aaff60] text-[#00aaff]"
                        : "bg-white/5 border-gray-600 text-gray-400"
                    }`}
                  >
                    {item.id}
                  </div>
                  <p
                    className={`font-medium text-sm md:text-base ${
                      activeTab.id === item.id
                        ? "text-[#00aaff]"
                        : "text-gray-300"
                    }`}
                  >
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 💬 Active Description */}
            <AnimatePresence mode="wait">
              {/* <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            >
              <p className="leading-relaxed text-gray-300">{activeTab.desc}</p>
            </motion.div> */}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
