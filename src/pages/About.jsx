import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-main">
      <div className="about-left">
        <h1 className='about-left-title gradient-outline'>EDUCATION</h1>
        <div className="about-left-education-item">
          <h3 className='about-left-subtitle gradient-outline'>IIT JODHPUR</h3>
          <p className='about-left-content'>B.Tech In Civil & Infrastructure Engineering</p>
          <p className='about-left-subcontent'>2021-2025</p>
        </div>
        <div className='about-left-education-item'>
          <h3 className="about-left-subtitle gradient-outline">SCHOOLING</h3>
          <p className='about-left-content'>SURAJ GYAN MODERN PUBLIC SCHOOL | Class 12th | 2021</p>
          <p className='about-left-subcontent'>Percentage: 82%</p>
          <p className='about-left-content'>MORNING STAR CHILDREN'S ACADEMY | Class 10th | 2019</p>
          <p className='about-left-subcontent'>Percentage: 80.8%</p>
        </div>
      </div>
      <div className="about-right">
        <h1 className='about-right-title gradient-outline'>SKILLS</h1>
        <div className="about-right-subtitle gradient-outline">
          <p>Figma</p>
        </div>
        <div className="about-right-subtitle gradient-outline">
          <p>Canva</p>
        </div>
        <div className="about-right-subtitle gradient-outline">
          <p>Adobe XD</p>
        </div>
        <div className="about-right-subtitle gradient-outline">
          <p>Sketchup</p>
        </div>
        <div className="about-right-subtitle">
          <p className='about-right-content'>Familiar</p>
          <p className='gradient-outline mp'>Blender | Illustrator |  Photoshop</p>
        </div>
        <div className="about-right-subtitle">
          <p className='about-right-content '>Languages</p>
          <p className='gradient-outline mp'>HTML | CSS | C | C++ | Python</p>
        </div>
      </div>
    </div>
  );
};

export default About;
