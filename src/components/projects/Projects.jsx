import React from 'react';
import './projects.css';

const projectList = [
  {
    title: 'Artisan Aid',
    description: 'A fully functional website that connect skilled artisans to potential clients',
    image: '/assets/artisanaidpic.jpg',
  },
  {
    title: 'Task Manager App',
    description: 'A task management app with drag-and-drop functionality.',
    image: '/assets/draganddrop.jpg',
  },
  {
    title: 'canny.io replica',
    description: 'My attempt at replicating canny.io landing page',
    image: '/assets/cannyimg.png',
  },
   {
    title: 'Voting App',
    description: 'A user-friendly voting app enabling secure, transparent elections with real-time results and seamless mobile access for all.',
    image: '/assets/voters.jpg',
  },
   {
    title: 'Digital Clock',
    description: 'A stylish digital clock with time, date, light/dark themes, animations, and optional ticking sound, built using HTML, CSS, and JavaScript.',
    image: '/assets/clockdark.jpg',
  },
   {
    title: 'ZURI',
    description: 'A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.',
    image: '/assets/zuri-first-attempt.jpg',
  },
   {
    title: 'React Blog app',
    description: 'Welcome to React Dev Journal, a modern blog website built with React, Tailwind CSS, and Vite. This project serves as a platform for React developers to explore tutorials, projects, trends, and more,',
    image: '/assets/react-blog-app.jpg',
  },
   {
    title: 'ZURI',
    description: 'A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.',
    image: '/assets/zuri-first-attempt.jpg',
  },
];

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-thumb" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
