import React from 'react';
import { FaGlobe } from 'react-icons/fa';

function Projects({ projects }) {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <div className="year-status">
              <span className="year">{project.year}</span>
              {project.status && <span className="status">{project.status}</span>}
            </div>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.url} className="website-btn" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
              Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
