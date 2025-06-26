export default function ModalActions({ demoLink, codeLink, darkMode }) {
  if (!demoLink && !codeLink) return null;

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${
            darkMode
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
          className={`px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 ${
            darkMode
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
            <path d="M12 0c-6.626 0-12 5.373-12 12..." />
          </svg>
        </a>
      )}
    </div>
  );
}