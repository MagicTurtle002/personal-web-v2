export default function ModalPurpose({ purpose, darkMode }) {
  if (!purpose) return null;

  return (
    <div className="mb-8">
      <h3
        className={`text-xl font-bold mb-2 flex items-center ${
          darkMode ? "text-indigo-300" : "text-indigo-700"
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
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {purpose}
      </p>
    </div>
  );
}