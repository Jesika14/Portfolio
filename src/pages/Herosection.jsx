import React, { useEffect, useState } from "react";
import "./Herosection.css";

const Herosection = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    // Check if already scrolled at component mount
    if (window.scrollY > window.innerHeight * 0.5) {
      setScrolled(true);
    }
    
    // Add scroll listener
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll down button click
  const handleScrollDown = () => {
    const contentSection = document.querySelector('.hero-content');
    if (contentSection) {
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const scrollToPosition = contentSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-section-model">
        <iframe
          title="3D Portfolio Model"
          frameBorder="0"
          className="hero-iframe"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/b8f126200cd244ffbb80e659da6c8015/embed?autostart=1&preload=1&ui_inspector=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_watermark=0&ui_hint=0&ui_controls=0&ui_infos=0&scrollwheel=0&mousewheel=0&dnt=1&touch_rotation=0&zoom=0&camera_zoom=0&camera_pan=0&transparent=1"
        ></iframe>
      </div>

      {/* Scroll down button with conditional class based on scroll position */}
      <button 
        className={`scroll-down-button ${scrolled ? 'hide' : ''}`}
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <span className="chevron-icon"></span>
      </button>

      <div className="hero-content">
        <div className="hero-content-wrapper">
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
            <a
              href="https://drive.google.com/file/d/1iQyy9aMO_LdMSDpk35bBvBedvgH20FPW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button gradient-outline"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
