import React from 'react';

function Skills({ skills }) {
  return (
    <section className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-section">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
