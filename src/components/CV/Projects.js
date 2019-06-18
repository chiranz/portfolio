import React from "react";
import { projects } from "../../data/constants";

export default function Projects() {
  return (
    <div className="cv-section">
      <div className="cv-section-title">
        <h2>Projects</h2>
      </div>
      {projects.map((project, index) => (
        <div className="cv-section-content mb-1" key={index}>
          <div className="cv-timeline">
            <div className="cv-timeline-side">
              <div className="cv-timeline-company">{project.title}</div>
              <a
                target="_blank"
                href={project.liveLink}
                rel="noopener noreferrer"
              >
                Site Link
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.repoLink}
              >
                Source Code
              </a>
            </div>
            <div className="cv-timeline-body">
              <p>{project.description}</p>
              <ul className="cv-tech-tags project-tech-tags">
                {project.usedTech.map((tech, index) => (
                  <li key={index}>
                    <div className="tech-text uppercase">{tech}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
