import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function HeroHeading({ darkMode, textRef, textWidth }) {
  return (
    <motion.h1 className="text-5xl sm:text-7xl font-bold tracking-tight flex justify-center relative font-display">
      <span
        ref={textRef}
        className={`
          relative inline-block
          text-transparent bg-clip-text 
          bg-gradient-to-br 
          ${darkMode 
            ? "from-white/90 to-white/50" 
            : "from-gray-900 to-gray-600"}
          backdrop-blur-md
        `}
      >
        <AnimatedText
          text="Dan Teodoro"
          className="inline-block"
          delay={0.5}
        />
      </span>
    </motion.h1>
  );
}