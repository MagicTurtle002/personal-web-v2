import React from "react";

const SectionHeader = ({ badgeText, title, highlight, description }) => {
  return (
    <div className="text-center mb-20">
      {badgeText && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 text-violet-300 rounded-full text-sm font-medium mb-6 border border-violet-500/30">
          <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
          {badgeText}
        </div>
      )}

      {title && (
        <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 mb-8 leading-tight">
          {title}
          <br />
          {highlight && <span className="text-gradient-animate">{highlight}</span>}
        </h2>
      )}

      {description && (
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;