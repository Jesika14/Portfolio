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
          {title}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.6em"
            height="0.6em"
            viewBox="0 0 48 48"
            style={{ verticalAlign: "middle" }}
          >
            <defs>
              <linearGradient
                id="primaryGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="40%" stopColor="rgba(254, 223, 178, 1)" />
                <stop offset="100%" stopColor="rgba(150, 255, 249, 1)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#primaryGradient)"
              d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"
            />
          </svg>
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
