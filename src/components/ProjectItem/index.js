import React from 'react';
import './style.css'
import { FaGithub, FaYoutube } from 'react-icons/fa';

export const ProjectItem = ({ project }) => {
    return (
        <li className="project">
            <div className="project-content">
                <div>
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">
                        <a href={project.link}>{project.title}</a>
                    </h3>
                    <div className="project-description">
                        <p>{project.description}</p>
                    </div>
                    <ul className="project-tech-list">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <div className="project-links">
                        <a href={project.glink} className="github">
                            <FaGithub />
                        </a>
                        <a href={project.ylink} className="cta"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="project-image">
                <a href={project.glink}>
                    <img src={project.img} alt="Project Image" className="pimage" />
                </a>
            </div>
        </li>
    );
}

