import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
};

export default ProjectCard;
