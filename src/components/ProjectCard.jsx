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
          <p>
           {props.description}
          </p>
        </div>
      </div>
      <div className="project-card-right">
        <img
          className="project-card-image project-card-gradient-outline"
          src="https://images.unsplash.com/photo-1718002127392-92a7eef514ad?q=80&w=2828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
