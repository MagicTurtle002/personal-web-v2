import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const LiquidGlassNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
    const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

    const navItems = [
        { name: "Home", href: "#home", id: "home" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Contact", href: "#contact", id: "contact" }
    ];

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4"
                style={{
                    backdropFilter: `blur(${navBlur}px)`
                }}
            >
                <motion.div
                    className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
                    style={{ opacity: navOpacity }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-50/20 to-purple-50/20"
                        animate={{
                            background: [
                                "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(219,234,254,0.2), rgba(250,245,255,0.2))",
                                "linear-gradient(180deg, rgba(250,245,255,0.2), rgba(255,255,255,0.1), rgba(219,234,254,0.2))",
                                "linear-gradient(270deg, rgba(219,234,254,0.2), rgba(250,245,255,0.2), rgba(255,255,255,0.1))",
                                "linear-gradient(360deg, rgba(255,255,255,0.1), rgba(219,234,254,0.2), rgba(250,245,255,0.2))"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                    <div className="relative backdrop-blur-xl px-6 py-4">
                        <div className="flex items-center justify-between">

                            <motion.div
                                className="font-display font-bold text-xl text-gray-800 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavClick("home")}
                            >
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Dan Teodoro
                                </span>
                            </motion.div>

                            <div className="hidden md:flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        className={`
                      relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                      ${activeSection === item.id
                                                ? 'text-blue-600'
                                                : 'text-gray-600 hover:text-gray-800'
                                            }
                    `}
                                        onClick={() => handleNavClick(item.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-xl border border-blue-200/30"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}

                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-gray-200/30 rounded-xl opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />

                                        <span className="relative z-10">{item.name}</span>
                                    </motion.button>
                                ))}
                            </div>

                            <motion.button
                                className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-800"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <motion.div
                                        className="w-full h-0.5 bg-current rounded"
                                        animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    />
                                    <motion.div
                                        className="w-full h-0.5 bg-current rounded"
                                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    />
                                    <motion.div
                                        className="w-full h-0.5 bg-current rounded"
                                        animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: "easeInOut"
                        }}
                        style={{
                            maskImage: "linear-gradient(90deg, transparent, white, transparent)"
                        }}
                    />
                </motion.div>
            </motion.nav>

            <motion.div
                className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm px-4 md:hidden`}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={isMenuOpen ?
                    { opacity: 1, y: 0, scale: 1 } :
                    { opacity: 0, y: -20, scale: 0.95 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
            >
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                    <div className="relative p-4 space-y-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                className={`
                  w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300
                  ${activeSection === item.id
                                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border border-blue-200/50'
                                        : 'text-gray-600 hover:bg-gray-100/50'
                                    }
                `}
                                onClick={() => handleNavClick(item.id)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isMenuOpen ?
                                    { opacity: 1, x: 0 } :
                                    { opacity: 0, x: -20 }
                                }
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
};

export default LiquidGlassNavbar;