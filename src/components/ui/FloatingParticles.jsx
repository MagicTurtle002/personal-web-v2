import { motion } from "framer-motion";

const FloatingParticles = ({ darkMode }) => {
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle}
                    className={`absolute w-1 h-1 rounded-full ${darkMode ? "bg-indigo-400/20" : "bg-indigo-600/20"
                        }`}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;