import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.scss';

/**
 * Skills Component
 * 
 * Displays skills organized by categories with visual progress bars.
 * Each skill shows proficiency level (0-100).
 */
const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">{skills.title}</h2>

        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-name">{category.name}</h3>
              
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

