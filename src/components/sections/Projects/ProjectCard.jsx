import { useState } from "react";

export const ProjectCard = ({ project, index, onOpenModal }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered
                    ? `radial-gradient(circle at ${mousePosition.x % 400}px ${mousePosition.y % 300}px, rgba(139, 92, 246, 0.15), rgba(15, 23, 42, 0.9))`
                    : undefined
            }}
        >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

            {/* Project image with parallax effect */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* Floating tech stack badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-md text-white rounded-full border border-white/20"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-bold bg-violet-500/90 text-white rounded-full">
                        {project.year}
                    </span>
                </div>
            </div>

            {/* Content area */}
            <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                        {project.projectType}
                    </span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {project.purpose}
                </p>

                {/* Impact metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-bold text-emerald-400">340%</div>
                        <div className="text-xs text-slate-400">Growth</div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                        <div className="text-lg font-bold text-cyan-400">99.9%</div>
                        <div className="text-xs text-slate-400">Uptime</div>
                    </div>
                </div>

                {/* Tech stack visualization */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50 hover:border-violet-500/50 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* CTA Button */}
                <button

                    onClick={() => { console.log("Opening project:", project); onOpenModal(project) }}
                    className="w-full py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500/50 group"
                >
                    <span className="flex items-center justify-center gap-2">
                        Explore Project
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </button>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5 rounded-3xl"></div>
            </div>
        </div>
    );
};