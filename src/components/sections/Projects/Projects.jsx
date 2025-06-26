import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import SectionHeader from "../../ui/SectionHeader";
import CategoryFilter from "../../ui/CateogryFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectStats from "./ProjectStats";
import ModalImpact from "../../ui/Modal/ModalImpact";

// Mock data for demonstration
const projects = [
    {
        id: 1,
        title: "Neural Commerce Platform",
        purpose: "AI-Powered E-commerce Revolution",
        fullDescription: "A next-generation e-commerce platform that uses machine learning to predict user behavior and optimize the shopping experience in real-time.",
        techStack: ["React", "Node.js", "TensorFlow", "GraphQL", "MongoDB"],
        client: "TechCorp Inc",
        company: "Freelance",
        projectType: "Web Development",
        year: "2024",
        problemSolved: "Increased conversion rates by 340% through AI-driven personalization",
        impact: "Processed $2M+ in transactions within first quarter",
        technicalFeatures: ["Real-time ML recommendations", "Voice commerce integration", "AR product visualization"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "Quantum Health Dashboard",
        purpose: "Healthcare Data Visualization",
        fullDescription: "Revolutionary healthcare analytics platform that transforms complex medical data into actionable insights for healthcare professionals.",
        techStack: ["Vue.js", "Python", "D3.js", "FastAPI", "PostgreSQL"],
        client: "MedTech Solutions",
        company: "Innovation Labs",
        projectType: "Data Science",
        year: "2024",
        problemSolved: "Reduced diagnosis time by 60% through intelligent data visualization",
        impact: "Used by 500+ healthcare professionals across 50+ hospitals",
        technicalFeatures: ["Real-time patient monitoring", "Predictive health analytics", "HIPAA-compliant architecture"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "MetaVerse Social Hub",
        purpose: "Virtual Reality Social Platform",
        fullDescription: "Immersive social platform that enables users to connect, collaborate, and create in virtual environments using cutting-edge VR technology.",
        techStack: ["Three.js", "WebXR", "React", "Socket.io", "Redis"],
        client: "Future Social Inc",
        company: "VR Studios",
        projectType: "Mobile App",
        year: "2024",
        problemSolved: "Created seamless cross-platform VR experiences with 99.9% uptime",
        impact: "10K+ daily active users, 95% user retention rate",
        technicalFeatures: ["Cross-platform VR support", "Real-time voice chat", "Gesture recognition"],
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop"
    }
];

export default function Projects() {
    const [openProject, setOpenProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [filterCategory, setFilterCategory] = useState("All");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse for interactive effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleOpenModal = (project) => setOpenProject(project);
    const handleCloseModal = () => setOpenProject(null);

    // Extract all unique categories from projects
    const allCategories = [
        "All",
        ...new Set(projects.map((project) => project.projectType)),
    ];

    // Filter projects by category and limit display
    const filteredProjects =
        filterCategory === "All"
            ? projects
            : projects.filter((project) => project.projectType === filterCategory);

    const displayedProjects = showAllProjects
        ? filteredProjects
        : filteredProjects.slice(0, 2);

    // Stats for impact section
    const projectStats = {
        totalProjects: projects.length,
        technologies: [...new Set(projects.flatMap((p) => p.techStack))].length,
        completionRate: 100,
        clientSatisfaction: 98,
    };


    return (
        <div id="projects" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader badgeText="My Portfolio"
                        title="Innovative Solutions &"
                        highlight="Creative Work"
                        description="Explore my collection of meticulously crafted projects that demonstrate cutting-edge technology, innovative problem-solving, and exceptional attention to detail."
                    />

                    <CategoryFilter
                        categories={allCategories}
                        activeCategory={filterCategory}
                        onCategorySelect={setFilterCategory}
                    />

                    <ProjectGrid projects={displayedProjects} />

                    {/* Show more/less button */}
                    {filteredProjects.length > 2 && (
                        <div className="flex justify-center mb-20">
                            <button
                                onClick={() => setShowAllProjects(!showAllProjects)}
                                className="px-8 py-4 bg-slate-800/50 backdrop-blur-md text-white rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105 group"
                            >
                                <span className="flex items-center gap-3">
                                    {showAllProjects
                                        ? "Show Less"
                                        : `Show More (${filteredProjects.length - 2})`}
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    )}

                    <ProjectStats
                        stats={[
                            { label: "Projects Completed", value: projectStats.totalProjects, suffix: "+" },
                            { label: "Technologies Mastered", value: projectStats.technologies, suffix: "+" },
                            { label: "On-Time Delivery", value: projectStats.completionRate, suffix: "%" },
                            { label: "Client Satisfaction", value: projectStats.clientSatisfaction, suffix: "%" }
                        ]}
                    />

                    {/* Enhanced GitHub CTA */}
                    <div className="text-center">
                        <a
                            href="https://github.com/MagicTurtle002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 group"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span className="text-xl font-semibold">Explore More Projects</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onOpenModal={handleOpenModal}
                    />
                ))}
            </div>

            {/* Enhanced Modal */}
            {openProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700/50 shadow-2xl scrollbar-hide">
                        {/* Modal Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 rounded-3xl"></div>

                        <button
                            onClick={handleCloseModal}
                            className="absolute top-6 right-6 w-10 h-10 bg-slate-800/50 hover:bg-red-500/20 border border-slate-700/50 hover:border-red-500/50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-400 transition-all duration-300 z-10 group"
                        >
                            <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative z-10 p-8">
                            {/* Project Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-2 text-sm font-semibold bg-violet-500/20 text-violet-300 rounded-full border border-violet-500/30">
                                        {projects.find(p => p.id === openProject)?.projectType}
                                    </span>
                                    <span className="px-4 py-2 text-sm font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                                        {projects.find(p => p.id === openProject)?.year}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-slate-400">Live Project</span>
                                    </div>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 mb-4 leading-tight">
                                    {projects.find(p => p.id === openProject)?.title}
                                </h3>

                                <p className="text-xl text-violet-300 font-semibold mb-4">
                                    {projects.find(p => p.id === openProject)?.purpose}
                                </p>

                                <p className="text-lg text-slate-300 leading-relaxed">
                                    {projects.find(p => p.id === openProject)?.fullDescription}
                                </p>
                            </div>

                            {/* Project Details Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                {/* Technical Features */}
                                <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        Technical Features
                                    </h4>
                                    <ul className="space-y-3">
                                        {projects.find(p => p.id === openProject)?.technicalFeatures?.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300 group">
                                                <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 group-hover:bg-fuchsia-400 transition-colors duration-300"></div>
                                                <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="p-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {projects.find(p => p.id === openProject)?.techStack?.map((tech, i) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-2 text-sm bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                                                style={{ animationDelay: `${i * 0.1}s` }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Impact & Results */}
                            <ModalImpact impact={openProject?.impact} darkMode={true} />

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500/50 group">
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        View Live Demo
                                    </span>
                                </button>

                                <button className="px-8 py-4 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-600/50 hover:border-slate-500/50 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500/50 group">
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Source Code
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            )
            }
            <style jsx>{`
  .animate-in {
    animation: modalFadeIn 0.3s ease-out;
  }

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`}</style>
        </div>
    );
}