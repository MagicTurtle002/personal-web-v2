// GradientWord.jsx
import { motion } from "framer-motion";

export const GradientWord = ({ text, darkMode }) => (
  <motion.span className="relative inline-block group">
    <motion.span
      className={`font-semibold ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
      animate={{
        textShadow: [
          "0 0 0px rgba(16, 185, 129, 0)",
          "0 0 10px rgba(16, 185, 129, 0.4)",
          "0 0 0px rgba(16, 185, 129, 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
    >
      {text}
    </motion.span>
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
  </motion.span>
);