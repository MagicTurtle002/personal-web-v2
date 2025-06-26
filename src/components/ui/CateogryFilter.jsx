import React from "react";

const CategoryFilter = ({ categories, activeCategory, onCategorySelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25"
              : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-violet-500/50 backdrop-blur-sm"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;