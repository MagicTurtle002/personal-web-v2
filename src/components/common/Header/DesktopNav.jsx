import { motion } from "framer-motion";
import { navItems } from "../../../utils/constant";

const DesktopNavLinks = ({ activeSection, handleNavClick }) => {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          className={`
            relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
            ${activeSection === item.id
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-800'}
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
  );
};

export default DesktopNavLinks;