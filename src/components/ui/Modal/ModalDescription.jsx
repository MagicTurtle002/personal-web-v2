export default function ModalDescription({ description, darkMode }) {
  if (!description) return null;

  return (
    <div className="mb-8">
      <h3
        className={`text-xl font-bold mb-2 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}
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
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {description}
      </p>
    </div>
  );
}