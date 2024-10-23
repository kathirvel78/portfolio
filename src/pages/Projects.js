import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: 'Task Management App',
    description: 'A task management app with drag-and-drop functionality using React and Redux.',
    github: 'https://github.com/yourusername/task-management-app',
    demo: 'https://taskmanagementapp.com',
  },
  {
    title: 'Katy',
    description: 'A task management app with drag-and-drop functionality using React and Redux.',
    github: 'https://github.com/yourusername/task-management-app',
    demo: 'https://taskmanagementapp.com',
  },
  {
    title: 'Blog Platform',
    description: 'A blog built with Gatsby, allowing users to create and publish posts.',
    github: 'https://github.com/yourusername/blog-platform',
    demo: 'https://yourblogplatform.com',
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
