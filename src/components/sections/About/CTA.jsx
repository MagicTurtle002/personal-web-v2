import { motion } from "framer-motion";

const CallToAction = ({ darkMode }) => {
  return (
    <motion.div
      className={`p-8 rounded-lg text-center relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-indigo-900 to-purple-900"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 3.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `radial-gradient(circle, ${
            darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          } 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <motion.h3
        className={`text-xl font-bold mb-3 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.7 }}
      >
        Interested in working together?
      </motion.h3>

      <motion.p
        className={`mb-6 text-base ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.8 }}
      >
        I'm currently available for freelance projects and job opportunities.
      </motion.p>

      <motion.a
        href="#contact"
        className={`inline-flex items-center px-8 py-3 rounded-lg text-base font-medium ${
          darkMode
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "bg-indigo-600 text-white hover:bg-indigo-500"
        } transition-all duration-300 shadow-lg hover:shadow-xl`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3.9 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
        <motion.svg
          className="ml-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
};

export default CallToAction;