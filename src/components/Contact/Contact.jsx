import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Contact.scss';

/**
 * Contact Component
 * 
 * Contact form and information display.
 * Note: This is a static form for GitHub Pages.
 * To make it functional, integrate with a service like Formspree or EmailJS.
 */
const Contact = () => {
  const { contact, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For GitHub Pages, you'll need to integrate with a service like:
    // - Formspree (https://formspree.io/)
    // - EmailJS (https://www.emailjs.com/)
    // - Netlify Forms (if hosting on Netlify)
    
    alert('Form submission functionality needs to be integrated with a service like Formspree or EmailJS for GitHub Pages.');
    console.log('Form data:', formData);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">{contact.title}</h2>
        <p className="section-description">{contact.description}</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>{personal.location}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {contact.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

