import React from "react";

export default function Education() {
  return (
    <div className="cv-section">
      <div className="cv-section-title">
        <h2>Education</h2>
      </div>
      <div className="cv-section-content">
        <div className="cv-timeline">
          <div className="cv-timeline-side">
            <div className="cv-timeline-company">SIEM, Siliguri</div>
            <div className="cv-timeline-date">2011-2014</div>
            <a
              href="http://www.siemsiliguri.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              siemsiliguri.org
            </a>
          </div>
          <div className="cv-timeline-body">
            <h3>B.Tech in Civil Engineering</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
