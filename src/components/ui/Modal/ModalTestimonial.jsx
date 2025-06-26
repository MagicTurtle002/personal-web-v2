export default function ModalTestimonial({ clientTestimonial, client, darkMode }) {
  if (!clientTestimonial) return null;

  return (
    <div className={`mb-8 p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <h3 className={`text-xl font-bold ml-3 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>
          Client Feedback
        </h3>
      </div>
      <p className={`text-lg italic ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        "{clientTestimonial}"
      </p>
      <div className="flex justify-end mt-4">
        <p className={`font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          — {client}
        </p>
      </div>
    </div>
  );
}