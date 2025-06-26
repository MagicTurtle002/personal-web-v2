export default function ModalChallenge({ problemSolved, darkMode }) {
  if (!problemSolved) return null;

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
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        Challenge Addressed
      </h3>
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {problemSolved}
      </p>
    </div>
  );
}