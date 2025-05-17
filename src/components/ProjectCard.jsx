import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, url, subtitle, description, imgURL }) => {
  return (
    <div className="project-card-main project-card-gradient-outline">
      <div className="project-card-left">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-title"
        >
          {title}
        </a>
        <p className="project-card-subtitle">{subtitle}</p>
        <div className="project-card-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="project-card-right">
        <img
          className="project-card-image project-card-gradient-outline"
          src={imgURL}
          alt={title}
          width="600"
          height="338"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
