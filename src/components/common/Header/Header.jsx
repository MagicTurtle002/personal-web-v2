import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { navItems } from "../../../utils/constant";
import MobileNavMenu from "./MobileNavMenu";
import HamburgerMenu from "./HamburgerMenu";
import DesktopNavLinks from "./DesktopNav";

const LiquidGlassNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    const navOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
    const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

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

                            <DesktopNavLinks
                                activeSection={activeSection}
                                handleNavClick={handleNavClick}
                            />

                            <HamburgerMenu
                                isMenuOpen={isMenuOpen}
                                toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                            />
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

            <MobileNavMenu
                isMenuOpen={isMenuOpen}
                activeSection={activeSection}
                handleNavClick={handleNavClick}
            />

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