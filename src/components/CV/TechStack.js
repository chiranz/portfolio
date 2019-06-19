import React from "react";
import { techStack } from "../../data/constants";

export default function TechStack() {
  return (
    <div className="cv-section">
      <div className="cv-section-title">
        <h2>Tech Stack</h2>
      </div>
      <div className="cv-section-content ">
        <div className="cv-timeline">
          <div className="cv-timeline-side">
            <div className="cv-section-sub-title">
              <h3>Skills</h3>
            </div>
          </div>
          <div className="cv-timeline-body">
            <ul className="cv-tech-tags tech-tags">
              {techStack.skills.map((item, index) => (
                <li key={index}>
                  <div className="tech-text">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="cv-section-content ">
        <div className="cv-timeline">
          <div className="cv-timeline-side">
            <div className="cv-section-sub-title">
              <h3>Comfortable</h3>
            </div>
          </div>
          <div className="cv-timeline-body">
            <ul className="cv-tech-tags tech-tags">
              {techStack.comfortableWith.map((item, index) => (
                <li key={index}>
                  <div className="tech-text">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="cv-section-content ">
        <div className="cv-timeline">
          <div className="cv-timeline-side">
            <div className="cv-section-sub-title">
              <h3>Learning</h3>
            </div>
          </div>
          <div className="cv-timeline-body">
            <ul className="cv-tech-tags tech-tags">
              {techStack.learning.map((item, index) => (
                <li key={index}>
                  <div className="tech-text">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
