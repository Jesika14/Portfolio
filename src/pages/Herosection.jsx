import React from "react";
import "./Herosection.css";

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-model">
        <iframe
          title="Plum and Cream | Magic Recipes"
          frameBorder="0"
          className="hero-iframe"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/b8f126200cd244ffbb80e659da6c8015/embed?autostart=1&preload=1&ui_hint=0&dnt=1"
        ></iframe>
      </div>
      <div className="hero-section-text">
        <div className="hero-section-text-text">
          <h2>Hi,</h2>
          <p>
            I'm Jesika Rai, your friendly neighborhood UI/UX wizard. I transform
            design dreams into pixel-perfect realities, combining creativity
            with usability. When not crafting intuitive interfaces, I'm geeking
            out over design trends or enjoying a latte at a cozy café. Let's
            make the digital world beautiful and user-friendly together!
          </p>
        </div>
        <div className="hero-section-download-cv">
          <h1
            className="about-left-title gradient-outline"
            onClick={() => window.open("https://drive.google.com/file/d/1VeQ7ONnKUNHCqUuLoNP35AkRe0WFUBI0/view", "_blank")}
          >
            Download CV
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
