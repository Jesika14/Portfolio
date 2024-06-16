import React from "react";
import ProjectCard from "../components/ProjectCard";
import {projectData} from "../components/data";
import "./Projects.css";

const Project = () => {
  console.log(projectData)
  return (
    <div className="project-main">
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index} // Add a unique key for each ProjectCard
            {...project}
          />
        ))}
      </div>
      <div className="project-title">Project</div>
    </div>
  );
};

export default Project;
