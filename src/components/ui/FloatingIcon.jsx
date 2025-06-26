// FloatingIcon.jsx
import { motion } from "framer-motion";

export const FloatingIcon = ({ children, className, position, animation }) => (
    <motion.div
        className={`absolute ${position} w-8 h-8 rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center ${className}`}
        animate={animation}
        transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
            y: { duration: 3, repeat: Infinity },
        }}
    >
        {children}
    </motion.div>
);