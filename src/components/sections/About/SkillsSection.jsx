import { motion } from "framer-motion";
import { skills } from "../../../utils/constant";

const SkillsSection = ({ darkMode }) => {
  const categories = [
    { title: "Frontend", skills: skills.frontend, color: "indigo" },
    { title: "Backend", skills: skills.backend, color: "purple" },
    { title: "Tools", skills: skills.tools, color: "emerald" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm ${darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"} hover:shadow-lg transition-all duration-300`}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              show: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ scale: 1.03 }}
          >
            <h4
              className={`text-lg font-semibold mb-4 text-${category.color}-${darkMode ? '400' : '600'}`}
            >
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-md text-sm transition-all duration-300 hover:scale-105 ${darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;