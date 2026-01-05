import React from 'react';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Testimonials.scss';

/**
 * Testimonials Component
 * 
 * Displays testimonials/recommendations from colleagues, clients, or managers.
 * Each testimonial shows person's info, quote, and LinkedIn link.
 */
const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">{testimonials.title}</h2>

        <div className="testimonials-grid">
          {testimonials.items.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>

              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/100';
                    }}
                  />
                </div>

                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>

                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="author-linkedin"
                    aria-label={`${testimonial.name}'s LinkedIn`}
                  >
                    <FaLinkedin />
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

export default Testimonials;

