import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

function About({ about, contact }) {
  return (
    <section className="section about-section">
      <h2 className="section-title">About</h2>
      <p>{about}</p>
      <div className="contact-links">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
        <a href={`mailto:${contact.email}`}>
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}

export default About;
