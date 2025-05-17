import React, { useEffect } from "react";
import Herosection from "./Herosection";
import About from "./About";
import Projects from "./Projects";
import DigitalArt from "./DigitalArt";
import Social from "../components/Social";
import Contact from "../components/Contact";
import "./HomePage.css";

const HomePage = () => {
  // Add scroll handling for better mobile experience
  useEffect(() => {
    // Only on mobile devices
    if (window.innerWidth <= 768) {
      const handleScroll = () => {
        const heroSection = document.querySelector('.hero-section');
        const scrollY = window.scrollY;
        const heroHeight = heroSection?.offsetHeight || 0;
        
        // If scrolled past the hero section, we want to handle any open CV drawer
        if (scrollY > heroHeight) {
          const mobileDrawer = document.querySelector('.mobile-cv-drawer.show');
          if (mobileDrawer) {
            mobileDrawer.classList.remove('show');
            const button = document.querySelector('.pull-up-button.active');
            if (button) button.classList.remove('active');
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="homepage-main">
      <section id="hero" className="homepage-herosection">
        <Herosection />
      </section>
      <section id="about" className="homepage-about">
        <About />
      </section>
      <section id="project" className="homepage-project">
        <Projects />
      </section>
      <section id="art" className="homepage-art">
        <DigitalArt />
      </section>
      <section id="social" className="homepage-social">
        <Social />
      </section>
      <section id="contact" className="homepage-contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
