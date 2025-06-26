import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalHeader from "./ModalHeader";
import ModalImpact from "./ModalImpact";
import ModalMetaInfo from "./ModalMetaInfo";
import ModalChallenge from "./ModalChallenge";
import ModalPurpose from "./ModalPurpose";
import ModalDescription from "./ModalDescription";
import ModalTechnicalFeatures from "./ModalTechnicalFeatures";
import ModalTestimonial from "./ModalTestimonial";
import ModalActions from "./ModalActions";

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  purpose,
  image,
  client,
  company,
  projectType,
  year,
  problemSolved,
  impact,
  technicalFeatures = [],
  clientTestimonial,
  demoLink,
  codeLink,
  children,
  darkMode = false,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-xl bg-black/50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      style={{ isolation: "isolate" }}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`relative max-w-5xl w-[90%] max-h-[90vh] overflow-hidden rounded-3xl p-8 shadow-xl backdrop-blur-3xl flex flex-col ${darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
          }`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 hover:text-red-500 transition p-2 rounded-full z-10 ${darkMode
            ? "text-gray-300 bg-gray-800 hover:bg-gray-700"
            : "text-gray-800 bg-gray-100 hover:bg-gray-200"
            }`}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ModalHeader title={title} techStack={technicalFeatures} darkMode={darkMode} />

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {image && (
            <div className="w-full mb-8">
              <img
                src={image}
                alt={title ?? "Project Image"}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          )}

          <ModalActions demoLink={demoLink} codeLink={codeLink} darkMode={darkMode} />
          <ModalImpact impact={impact} darkMode={darkMode} />
          <ModalMetaInfo client={client}
            company={company}
            projectType={projectType}
            year={year}
            darkMode={darkMode}
          />
          <ModalChallenge problemSolved={problemSolved} darkMode={darkMode} />
          <ModalPurpose purpose={purpose} darkMode={darkMode} />
          <ModalDescription description={description} darkMode={darkMode} />
          <ModalTechnicalFeatures technicalFeatures={technicalFeatures} darkMode={darkMode} />
          <ModalTestimonial clientTestimonial={clientTestimonial} client={client} darkMode={darkMode} />
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
