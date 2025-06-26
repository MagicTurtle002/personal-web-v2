import { motion } from "framer-motion";
import { navItems } from "../../../utils/constant";

const MobileNavMenu = ({ isMenuOpen, activeSection, handleNavClick }) => {
  return (
    <motion.div
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm px-4 md:hidden"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={
        isMenuOpen
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: -20, scale: 0.95 }
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
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border border-blue-200/50"
                    : "text-gray-600 hover:bg-gray-100/50"
                }
              `}
              onClick={() => handleNavClick(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMenuOpen
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
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
  );
};

export default MobileNavMenu;