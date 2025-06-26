import { motion } from "framer-motion";

const EducationSection = ({ darkMode }) => {
  const education = [
    {
      school: "Polytechnic University of the Philippines",
      degree: "Bachelor of Science in Information Technology",
      date: "2021 - 2025",
      details: [
        "GPA: 1.50 (equivalent to 92+%)",
        "Capstone: Veterinary Record Management System",
        "Relevant coursework: Web Systems, Software Engineering, Database Management"
      ]
    }
  ];

  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-8">
        {education.map((edu, index) => (
          <motion.li
            key={index}
            className="relative pl-6 border-l-2"
            style={{ borderColor: darkMode ? "#4F46E5" : "#6366F1" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h4 className={`font-semibold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
              {edu.school}
            </h4>
            <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {edu.degree}
            </span>
            <p className={`text-sm mt-1 ${darkMode ? "text-indigo-300" : "text-indigo-600"}`}>
              {edu.date}
            </p>
            <ul className={`list-disc pl-5 mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default EducationSection;