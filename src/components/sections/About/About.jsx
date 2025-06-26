import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./SkillsSection";
import CallToAction from "./CTA";
import ProfileHeader from "./ProfileHeader";
import AboutIntro from "./AboutIntro";

const AboutModalContent = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileHeader darkMode={darkMode} />

      <motion.div
        className="relative"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div
          className="absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div
            className={`w-full border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </div>
        <div className="relative flex justify-center">
          <span
            className={`px-4 ${darkMode ? "bg-gray-900" : "bg-white"} text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            My Journey
          </span>
        </div>
      </motion.div>

      <AboutIntro darkMode={darkMode} />

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            {["Experience", "Education", "Skills"].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)} // Add this
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${activeTab === tab
                  ? darkMode
                    ? "border-indigo-400 text-indigo-400"
                    : "border-indigo-600 text-indigo-600"
                  : darkMode
                    ? "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                whileHover={{ y: -2 }}
              >
                {tab}
              </motion.button>
            ))}
          </nav>
        </div>
        {activeTab === "Experience" && <ExperienceSection darkMode={darkMode} />}
        {activeTab === "Education" && <EducationSection darkMode={darkMode} />}
        {activeTab === "Skills" && <SkillsSection darkMode={darkMode} />}
      </motion.div>

      <CallToAction />
    </motion.div>
  );
};

export default AboutModalContent;