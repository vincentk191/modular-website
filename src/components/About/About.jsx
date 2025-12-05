import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './About.scss';

/**
 * About Component
 * 
 * Displays personal background and introduction.
 * Content is pulled from portfolioData.about
 */
const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">{about.title}</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src={about.image} alt="About me" />
          </div>

          <div className="about-text">
            {about.description.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

