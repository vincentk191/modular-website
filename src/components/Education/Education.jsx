import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Education.scss';

/**
 * Education Component
 * 
 * Displays educational background with institution details.
 */
const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">{education.title}</h2>

        <div className="education-list">
          {education.items.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <h3 className="degree">{item.degree}</h3>
                <h4 className="institution">{item.institution}</h4>
                
                <div className="education-meta">
                  <span className="duration">
                    <FaCalendar /> {item.duration}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt /> {item.location}
                  </span>
                </div>

                {item.description && (
                  <p className="education-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

