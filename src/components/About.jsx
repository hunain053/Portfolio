import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
        <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter /> Twitter
        </a>
        <a href={`mailto:${contact.email}`}>
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
}

export default About;
