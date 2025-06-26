import React from "react";
import { ProjectCard } from "./ProjectCard"; // adjust if path differs

const ProjectGrid = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    style={{
                        animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                    }}
                >
                    <ProjectCard project={project} index={index} />
                </div>
            ))}
        </div>
    );
};

export default ProjectGrid;