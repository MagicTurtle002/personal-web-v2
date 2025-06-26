export default function ModalHeader({ title, techStack = [], darkMode }) {
  return (
    <div className="mb-6">
      {title && (
        <h2
          id="modal-title"
          className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          {title}
        </h2>
      )}

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-sm font-semibold py-2 px-4 rounded-full shadow-md ${
                darkMode ? "bg-indigo-700 text-white" : "bg-indigo-600 text-white"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}