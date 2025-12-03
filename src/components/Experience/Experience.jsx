import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

/**
 * Experience Component
 * 
 * Displays work experience in a timeline format.
 * Each experience card shows company, position, duration, and responsibilities.
 */
const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">{experience.title}</h2>

        <div className="timeline">
          {experience.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <h3 className="position">{item.position}</h3>
                <h4 className="company">{item.company}</h4>
                
                <div className="experience-meta">
                  <span className="duration">
                    <FaCalendar /> {item.duration}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>

                <ul className="responsibilities">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

