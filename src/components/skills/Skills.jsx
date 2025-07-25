import React from 'react';
import './skill.css';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from 'react-icons/fa';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} /> },
  { name: 'JavaScript', icon: <RiJavascriptFill size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'GitHub', icon: <FaGithub size={40} /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={40} /> },
  { name: 'Figma', icon: <FaFigma size={40} /> },
];

const Skills = () => {
  return (
    <div className="skill-container" id="skills" data-aos="fade-up" data-aos-duration="800">
      <h2 data-aos="fade-up" data-aos-delay="100">Skills</h2>
      <section className="skill-set">
        {skills.map((skill, index) => (
          <div className="skill-box" key={skill.name} aria-label={skill.name} data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="600">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
