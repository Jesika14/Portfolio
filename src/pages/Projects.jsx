import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectData from "../components/data";
import "./Projects.css";

const Project = () => {
  return (
    <div className="project-main">
      
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index} // Add a unique key for each ProjectCard
            title={project.title}
            url={project.url}
            subtitle={project.subtitle}
            description={project.description}
          />
        ))}
      </div>
      <div className="project-title">Project</div>
    </div>
  );
};

export default Project;
