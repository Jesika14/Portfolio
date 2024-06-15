import React from "react";
import "./HomePage.css"
import Herosection from "./Herosection";
import About from "./About";
import Project from "./Projects";
import Social from "../components/Social";

const HomePage = () => {
    return(
        <div className="homepage-main">
            <div className="homepage-herosection">
                <Herosection />
            </div>
            <div className="homepage-about">
                <About />
            </div>
            <div className="homepage-project">
                <Project />
            </div>
            <div className="homepage-social">
                <Social />
            </div>
        </div>
    )
}

export default HomePage;