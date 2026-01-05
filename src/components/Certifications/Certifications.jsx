import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Certifications.scss';

/**
 * Certifications Component
 * 
 * Displays professional certifications in a grid layout.
 * Each certification shows badge, issuer, date, and verification link.
 */
const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title">{certifications.title}</h2>

        <div className="certifications-grid">
          {certifications.items.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-image">
                <img src={cert.image} alt={cert.name} />
                <div className="cert-badge">
                  <FaCertificate />
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                
                <div className="cert-details">
                  <div className="cert-issuer">
                    <span className="label">Issued by:</span>
                    <span className="value">{cert.issuer}</span>
                  </div>

                  <div className="cert-date">
                    <FaCalendar />
                    <span>{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="cert-id">
                      <span className="label">Credential ID:</span>
                      <span className="value">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify"
                  >
                    Verify Credential
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

