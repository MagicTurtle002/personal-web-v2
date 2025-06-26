import { motion } from "framer-motion";
import { useState } from "react";

const LiquidGlassButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  className = "",
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Enhanced size variants with better proportions
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
    xl: "px-10 py-5 text-xl min-h-[60px]"
  };

  // Updated color variants with more modern palettes
  const variants = {
    primary: {
      bg: "from-indigo-500/15 via-blue-500/10 to-cyan-500/15",
      border: "border-white/20 dark:border-white/10",
      text: "text-slate-900 dark:text-white",
      glow: "shadow-[0_0_40px_rgba(99,102,241,0.25)] dark:shadow-[0_0_40px_rgba(99,102,241,0.4)]",
      accent: "from-indigo-400 to-cyan-400"
    },
    secondary: {
      bg: "from-slate-100/40 via-gray-50/30 to-slate-100/40 dark:from-slate-700/20 dark:via-slate-600/10 dark:to-slate-700/20",
      border: "border-slate-200/60 dark:border-slate-600/40",
      text: "text-slate-700 dark:text-slate-200",
      glow: "shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.08)]",
      accent: "from-slate-400 to-slate-600"
    },
    success: {
      bg: "from-emerald-500/15 via-green-500/10 to-teal-500/15",
      border: "border-white/20 dark:border-white/10",
      text: "text-slate-900 dark:text-white",
      glow: "shadow-[0_0_40px_rgba(34,197,94,0.25)] dark:shadow-[0_0_40px_rgba(34,197,94,0.4)]",
      accent: "from-emerald-400 to-teal-400"
    },
    danger: {
      bg: "from-red-500/15 via-pink-500/10 to-rose-500/15",
      border: "border-white/20 dark:border-white/10",
      text: "text-slate-900 dark:text-white",
      glow: "shadow-[0_0_40px_rgba(239,68,68,0.25)] dark:shadow-[0_0_40px_rgba(239,68,68,0.4)]",
      accent: "from-red-400 to-pink-400"
    },
    // New trendy variants
    aurora: {
      bg: "from-purple-500/15 via-pink-500/10 to-violet-500/15",
      border: "border-white/20 dark:border-white/10",
      text: "text-slate-900 dark:text-white",
      glow: "shadow-[0_0_40px_rgba(147,51,234,0.25)] dark:shadow-[0_0_40px_rgba(147,51,234,0.4)]",
      accent: "from-purple-400 via-pink-400 to-violet-400"
    },
    minimal: {
      bg: "from-transparent via-white/5 to-transparent",
      border: "border-slate-200/40 dark:border-slate-700/40",
      text: "text-slate-600 dark:text-slate-300",
      glow: "shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
      accent: "from-slate-300 to-slate-500"
    }
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-2xl
        ${currentSize}
        ${currentVariant.text}
        font-medium
        transition-all duration-300 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        group
        ${className}
      `}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => !disabled && setIsPressed(false)}
      onClick={disabled ? undefined : onClick}
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : {}}
      {...props}
    >
      {/* Enhanced glass background with better layering */}
      <div className={`
        absolute inset-0 backdrop-blur-md
        bg-gradient-to-br ${currentVariant.bg}
        border ${currentVariant.border}
        rounded-2xl
        transition-all duration-500 ease-out
        ${isHovered ? currentVariant.glow : ''}
      `} />

      {/* Noise texture overlay for more realistic glass */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Enhanced liquid gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-40"
        animate={isHovered ? {
          background: [
            `linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03), rgba(255,255,255,0.08))`,
            `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.12), rgba(255,255,255,0.03))`,
            `linear-gradient(225deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03), rgba(255,255,255,0.08))`,
            `linear-gradient(315deg, rgba(255,255,255,0.03), rgba(255,255,255,0.08), rgba(255,255,255,0.03))`
          ]
        } : {}}
        transition={{
          duration: 4,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced shimmer effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-2xl`}
        animate={isHovered ? {
          x: ["-200%", "200%"]
        } : {}}
        transition={{
          duration: 1.8,
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 2,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, white 40%, white 60%, transparent 100%)"
        }}
      />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent rounded-2xl" />

      {/* Enhanced floating particles */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{
                left: `${25 + i * 25}%`,
                top: `${60 + Math.random() * 20}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2.5 + i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.3
              }}
            />
          ))}
        </>
      )}

      {/* Enhanced press effect with ripple */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Content with subtle text shadow */}
      <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
        {children}
      </span>

      {/* Enhanced liquid drip effect */}
      {isHovered && (
        <>
          <motion.div
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b ${currentVariant.accent} rounded-full opacity-60`}
            animate={{
              height: [0, 12, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.5
            }}
          />
          
          {/* Secondary smaller drip */}
          <motion.div
            className={`absolute bottom-0 left-[60%] transform -translate-x-1/2 w-0.5 h-2 bg-gradient-to-b ${currentVariant.accent} rounded-full opacity-40`}
            animate={{
              height: [0, 6, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2
            }}
          />
        </>
      )}

      {/* Subtle border highlight on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-white/0"
        animate={isHovered ? {
          borderColor: "rgba(255,255,255,0.3)"
        } : {
          borderColor: "rgba(255,255,255,0)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default LiquidGlassButton;