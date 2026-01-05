import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import useLazyImage from '../../hooks/useLazyImage';
import './Projects.scss';

/**
 * Projects Component
 * 
 * Showcases featured projects in a grid layout.
 * Each project card includes image, description, tech stack, and links.
 */
const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">{projects.title}</h2>

        <div className="projects-grid">
          {projects.items.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * ProjectCard Component with Lazy Loading
 */
const ProjectCard = ({ project }) => {
  const [imageSrc, imageRef, isLoaded] = useLazyImage(project.image);

  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          ref={imageRef}
          src={imageSrc} 
          alt={project.name}
          className={isLoaded ? 'loaded' : 'loading'}
        />
        <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

