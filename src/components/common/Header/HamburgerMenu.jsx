import { motion } from "framer-motion";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.button
      className="md:hidden p-2 rounded-xl text-gray-600 hover:text-gray-800"
      onClick={toggleMenu}
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
  );
};

export default HamburgerMenu;