// ModalMetaInfo.jsx
export default function ModalMetaInfo({ client, company, projectType, year, darkMode }) {
  const metaItems = [
    { label: "Client", value: client },
    { label: "Company", value: company },
    { label: "Project Type", value: projectType },
    { label: "Year", value: year },
  ];

  const hasData = metaItems.some((item) => item.value);
  if (!hasData) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {metaItems.map(
        (item) =>
          item.value && (
            <div
              key={item.label}
              className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
            >
              <h4
                className={`text-sm font-semibold ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {item.label}
              </h4>
              <p className={`text-base ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                {item.value}
              </p>
            </div>
          )
      )}
    </div>
  );
}