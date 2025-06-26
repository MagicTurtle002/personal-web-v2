import { motion } from "framer-motion";
import { AvailabilityBadge } from "./AvailabilityBadge.jsx";

export default function AvailabilityBlock() {
  return (
    <motion.div
      className="mb-6 flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
        transition={{ duration: 0.3 }}
      >
        <AvailabilityBadge />
      </motion.div>
    </motion.div>
  );
}