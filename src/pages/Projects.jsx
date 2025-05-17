import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import { projectData } from "../components/data";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="project-main">
      {/* Conditionally render title at the top for mobile, left for desktop */}
      {isMobile && <h1 className="project-title">Projects</h1>}
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index} // Add a unique key for each ProjectCard
            {...project}
          />
        ))}
      </div>
      {/* Only render title on right for desktop */}
      {!isMobile && <h1 className="project-title">Projects</h1>}
    </div>
  );
};

export default Projects;
