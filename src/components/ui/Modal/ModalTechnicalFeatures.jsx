export default function ModalTechnicalFeatures({ technicalFeatures = [], darkMode }) {
  if (technicalFeatures.length === 0) return null;

  return (
    <div className="mb-8">
      <h3
        className={`text-xl font-bold mb-3 flex items-center ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}
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
      <ul className={`space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        {technicalFeatures.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 mr-2 flex-shrink-0 ${darkMode ? "text-green-400" : "text-green-600"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-lg">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}