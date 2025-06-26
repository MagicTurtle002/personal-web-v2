export default function ModalImpact({ impact, darkMode }) {
  if (!impact) return null;

  return (
    <div className={`mb-8 p-5 rounded-xl ${darkMode ? "bg-indigo-900/30" : "bg-indigo-50"}`}>
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
          <path d="M12 20V10"></path>
          <path d="M18 20V4"></path>
          <path d="M6 20v-6"></path>
        </svg>
        Project Impact
      </h3>
      <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {impact}
      </p>
    </div>
  );
}