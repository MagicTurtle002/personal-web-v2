import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  purpose,
  techStack = [],
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

        {/* Modal Header */}
        <div className="mb-6">
          {/* Modal Title */}
          {title && (
            <h2
              id="modal-title"
              className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
                }`}
            >
              {title}
            </h2>
          )}

          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`text-sm font-semibold py-2 px-4 rounded-full shadow-md ${darkMode
                      ? "bg-indigo-700 text-white"
                      : "bg-indigo-600 text-white"
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

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

          {(demoLink || codeLink) && (
            <div className="flex flex-wrap gap-4 mb-8">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${darkMode
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                >
                  <span>View Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}

              {codeLink && (
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${darkMode
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gray-700 text-white hover:bg-gray-800"
                    }`}
                >
                  <span>View Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {impact && (
            <div
              className={`mb-8 p-5 rounded-xl ${darkMode ? "bg-indigo-900/30" : "bg-indigo-50"
                }`}
            >
              <h3
                className={`text-xl font-bold mb-2 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 20V10"></path>
                  <path d="M18 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
                Project Impact
              </h3>
              <p
                className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {impact}
              </p>
            </div>
          )}

          {(client || company || projectType || year) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {client && (
                <div
                  className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}
                >
                  <h4
                    className={`text-sm font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    Client
                  </h4>
                  <p
                    className={`text-base ${darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                  >
                    {client}
                  </p>
                </div>
              )}
              {company && (
                <div
                  className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}
                >
                  <h4
                    className={`text-sm font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    Company
                  </h4>
                  <p
                    className={`text-base ${darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                  >
                    {company}
                  </p>
                </div>
              )}
              {projectType && (
                <div
                  className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}
                >
                  <h4
                    className={`text-sm font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    Project Type
                  </h4>
                  <p
                    className={`text-base ${darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                  >
                    {projectType}
                  </p>
                </div>
              )}
              {year && (
                <div
                  className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"
                    }`}
                >
                  <h4
                    className={`text-sm font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    Year
                  </h4>
                  <p
                    className={`text-base ${darkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                  >
                    {year}
                  </p>
                </div>
              )}
            </div>
          )}

          {problemSolved && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-2 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Challenge Addressed
              </h3>
              <p
                className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {problemSolved}
              </p>
            </div>
          )}

          {purpose && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-2 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Project Purpose
              </h3>
              <p
                className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {purpose}
              </p>
            </div>
          )}

          {description && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-2 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Description
              </h3>
              <p
                className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {description}
              </p>
            </div>
          )}

          {technicalFeatures && technicalFeatures.length > 0 && (
            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-3 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
                Key Technical Features
              </h3>
              <ul
                className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {technicalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 mr-2 flex-shrink-0 ${darkMode ? "text-green-400" : "text-green-600"
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {clientTestimonial && (
            <div
              className={`mb-8 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
            >
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h3
                  className={`text-xl font-bold ml-3 ${darkMode ? "text-indigo-300" : "text-indigo-700"
                    }`}
                >
                  Client Feedback
                </h3>
              </div>
              <p
                className={`text-lg italic ${darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                "{clientTestimonial}"
              </p>
              <div className="flex justify-end mt-4">
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  — {client}
                </p>
              </div>
            </div>
          )}
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
