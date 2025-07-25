import React, { useState } from 'react';
import './projects.css';
import ProjectModal from './ProjectModal'; 


const projectList = [
  { title: 'Artisan Aid', description: 'A fully functional website that connect skilled artisans to potential clients', image: '/assets/artisanaidpic.jpg', github: 'https://github.com/ozi-Shalom2333/artisian-aid',  live: 'https://artisian-aid.vercel.app/' },
  { title: 'Task Manager App', description: 'A task management app with drag-and-drop functionality.', image: '/assets/draganddrop.jpg', github:'https://github.com/ozi-Shalom2333/TodolistdragAnd-Drop', live:'https://todolistdrag-and-drop.vercel.app/' },
  { title: 'canny.io replica', description: 'My attempt at replicating canny.io landing page', image: '/assets/cannyimg.png', github:'https://github.com/ozi-Shalom2333/canny', live:'https://canny-ten.vercel.app/' },
  { title: 'Voting App', description: 'A user-friendly voting app enabling secure, transparent elections with real-time results and seamless mobile access for all.', image: '/assets/voters.jpg' , github:'https://github.com/ozi-Shalom2333/voteApp', live:'https://oziomavote-app.vercel.app/'},
  { title: 'Digital Clock', description: 'A stylish digital clock with time, date, light/dark themes, animations, and optional ticking sound, built using HTML, CSS, and JavaScript.', image: '/assets/clockdark.jpg', github:'https://github.com/ozi-Shalom2333/digitalclock', live:'https://digitalclock-sepia-six.vercel.app/' },
  { title: 'ZURI', description: 'A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.', image: '/assets/zuri-first-attempt.jpg', github:'https://github.com/ozi-Shalom2333/ZURI', live:'https://zuri-dun.vercel.app/' },
  { title: 'React Blog app', description: 'Welcome to React Dev Journal, a modern blog website built with React, Tailwind CSS, and Vite. This project serves as a platform for React developers to explore tutorials, projects, trends, and more,', image: '/assets/react-blog-app.jpg', github:'https://github.com/ozi-Shalom2333/react-blog-app', live:'https://react-blog-app-xi-liard.vercel.app/' },
  { title: 'ZURI', description: 'A modern fashion brand blending vibrant African prints with contemporary silhouettes. Ethically crafted, endlessly elegant.', image: '/assets/zuri-first-attempt.jpg',  github:'https://github.com/ozi-Shalom2333/ZURI', live:'https://zuri-dun.vercel.app/'},
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
  <section className="project-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="project-grid">
      {projectList.map((project, index) => (
        <div className="project-item" key={index} onClick={() => setSelectedProject(project)} data-aos="zoom-in">
          <img src={project.image} alt={project.title} className="project-thumb" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>
      ))}
    </div>

    {selectedProject && (
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    )}
  </section>
  );
};

export default Projects;
