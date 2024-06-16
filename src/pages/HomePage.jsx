import React from "react";
import Herosection from "./Herosection";
import About from "./About";
import Project from "./Projects";
import Social from "../components/Social"; 
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-main">
      <div className="homepage-herosection" id="hero">
        <Herosection />
      </div>
      <div className="homepage-about" id="about">
        <About />
      </div>
      <div className="homepage-project" id="project">
        <Project />
      </div>
      <div className="homepage-social" id="contact">
        <Social />
      </div>
    </div>
  );
};

export default HomePage;
