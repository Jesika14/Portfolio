import React from "react";
import "./ProjectCard.css";

function ProjectCard({ ...props }) {
  return (
    <div className="project-card-main project-card-gradient-outline">
      <div className="project-card-left">
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-title"
        >
          {props.title}
        </a>
        <p className="project-card-subtitle">{props.subtitle}</p>
        <div className="project-card-description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="project-card-right">
        <img
          className="project-card-image project-card-gradient-outline"
          src={props.imgURL}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
