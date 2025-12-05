import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Footer.scss';

/**
 * Footer Component
 * 
 * Site footer with social links and copyright information.
 */
const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
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
          </div>

          <p className="footer-text">
            © {currentYear} {personal.name}. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

