import { motion } from "framer-motion";

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      title: "Intern - Highly Succeed Inc.",
      date: "2025",
      subtitle: "Unleash Web Portal - User Management System",
      tasks: [
        "Developed responsive user interfaces with React and Vite",
        "Implemented user management system with role-based permissions",
        "Collaborated with backend team on API integration",
        "Optimized application performance for better user experience"
      ]
    },
    {
      title: "Web Developer - Capstone Project",
      date: "2024",
      subtitle: "Veterinary Record Management System",
      tasks: [
        "Built backend systems using PHP and MySQL",
        "Designed database schema for veterinary records",
        "Implemented user authentication and authorization",
        "Created reports and analytics dashboard for data visualization"
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
      <div className="relative">
        <div className={`absolute left-2 top-0 bottom-0 w-0.5 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />

        <ul className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.li key={index} className="relative pl-10">
              <div className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${darkMode ? "border-indigo-400 bg-gray-900" : "border-indigo-600 bg-white"}`} />
              <div>
                <h4 className={`font-semibold text-lg ${darkMode ? "text-gray-200" : "text-gray-900"}`}>
                  {experience.title}
                </h4>
                <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {experience.date}
                </span>
                <p className={`text-sm font-medium ${darkMode ? "text-indigo-400" : "text-indigo-600"} mb-3`}>
                  {experience.subtitle}
                </p>
                <ul className={`list-disc pl-5 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} space-y-1`}>
                  {experience.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;