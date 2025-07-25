import React from 'react';
import './projectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={project.live} target="_blank" rel="noreferrer">Live Site</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
