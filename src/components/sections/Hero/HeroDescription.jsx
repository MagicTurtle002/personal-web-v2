import { motion } from "framer-motion";
import { SparklesIcon, CodeBracketIcon, BeakerIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { GradientWord } from "../../ui/GradientWord";
import { FloatingIcon } from "../../ui/FloatingIcon";

export default function HeroDescription({ darkMode }) {
  return (
    <motion.div
      className="mt-8 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {/* Main Description with Enhanced Typography */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glowing Background Effect */}
        <div className={`absolute inset-0 rounded-2xl blur-xl opacity-20 ${
          darkMode 
            ? "bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500" 
            : "bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
        }`} />
        
        <motion.p
          className={`relative text-lg font-medium sm:text-xl lg:text-2xl max-w-3xl mx-auto text-pretty leading-relaxed px-6 py-4 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* More dynamic and personality-driven copy */}
          Creative developer building{" "}
          <GradientWord text="next-generation" darkMode={darkMode} />
          {" "}digital experiences with{" "}
          <GradientWord text="AI-powered" darkMode={darkMode} />
          {" "}innovation and{" "}
          <motion.span
            className={`font-bold ${
              darkMode 
                ? "text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text" 
                : "text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text"
            }`}
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            pixel-perfect
          </motion.span>
          {" "}design.
        </motion.p>
      </motion.div>

      {/* Enhanced Floating Icons with More Variety */}
      <FloatingIcon
        position="-top-6 -left-8"
        animation={{ 
          rotate: [0, 360], 
          scale: [1, 1.3, 1],
          filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"]
        }}
        className="animate-pulse"
      >
        <SparklesIcon className={`w-6 h-6 drop-shadow-lg ${
          darkMode 
            ? "text-yellow-300 filter drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]" 
            : "text-yellow-500 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
        }`} />
      </FloatingIcon>

      <FloatingIcon
        position="-bottom-6 -right-8"
        animation={{ 
          rotate: [-15, 15, -15], 
          y: [0, -15, 0],
          scale: [0.9, 1.1, 0.9]
        }}
      >
        <CodeBracketIcon className={`w-5 h-5 ${
          darkMode 
            ? "text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" 
            : "text-blue-600 filter drop-shadow-[0_0_6px_rgba(37,99,235,0.3)]"
        }`} />
      </FloatingIcon>

      {/* Additional Organic-positioned Icons */}
      <FloatingIcon
        position="top-0 left-1/4"
        animation={{ 
          rotate: [0, -180, 0], 
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6]
        }}
        delay={2}
      >
        <BeakerIcon className={`w-4 h-4 ${
          darkMode 
            ? "text-purple-400 filter drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]" 
            : "text-purple-600 filter drop-shadow-[0_0_4px_rgba(147,51,234,0.3)]"
        }`} />
      </FloatingIcon>

      <FloatingIcon
        position="bottom-2 left-3/4"
        animation={{ 
          y: [0, -8, 0], 
          rotate: [0, 45, 0],
          scale: [1, 0.9, 1]
        }}
        delay={1.5}
      >
        <CpuChipIcon className={`w-5 h-5 ${
          darkMode 
            ? "text-pink-400 filter drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]" 
            : "text-pink-600 filter drop-shadow-[0_0_6px_rgba(219,39,119,0.3)]"
        }`} />
      </FloatingIcon>

      {/* Organic Shape Decorations */}
      <motion.div
        className={`absolute -top-12 -right-16 w-24 h-24 rounded-full opacity-10 blur-sm ${
          darkMode ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-purple-400 to-pink-400"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
        }}
      />

      <motion.div
        className={`absolute -bottom-8 -left-12 w-20 h-20 opacity-10 blur-sm ${
          darkMode ? "bg-gradient-to-br from-cyan-500 to-blue-500" : "bg-gradient-to-br from-cyan-400 to-blue-400"
        }`}
        animate={{
          scale: [0.8, 1.1, 0.8],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          clipPath: "circle(50% at 30% 40%)"
        }}
      />

      {/* Interactive Glow Effect on Hover */}
      <motion.div
        className={`absolute inset-0 rounded-3xl opacity-0 pointer-events-none ${
          darkMode 
            ? "bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20" 
            : "bg-gradient-to-r from-purple-400/15 via-transparent to-cyan-400/15"
        }`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}