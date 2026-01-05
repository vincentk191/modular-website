import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import useTypewriter from '../../hooks/useTypewriter';
import './Hero.scss';

/**
 * Hero Component
 * 
 * Landing section with:
 * - Personal introduction
 * - Social links
 * - Call-to-action buttons
 * - Resume download
 */
const Hero = () => {
  const { personal, social, resume } = portfolioData;

  // Typewriter animation for subtitle
  const typewriterText = useTypewriter(
    [
      personal.title,
      'Full Stack Developer',
      'Problem Solver',
      'Tech Enthusiast'
    ],
    100, // typing speed (ms per character)
    50,  // deleting speed (ms per character)
    2000 // delay before deleting (ms)
  );

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">
              {typewriterText}
              <span className="cursor">|</span>
            </h2>
            <p className="hero-tagline">{personal.tagline}</p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              {resume && resume.downloadUrl && (
                <a
                  href={resume.downloadUrl}
                  download
                  className="btn btn-secondary"
                >
                  <FaDownload /> {resume.buttonText || 'Download Resume'}
                </a>
              )}
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View GitHub
              </a>
            </div>

            <div className="social-links">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src={personal.avatar} alt={personal.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

