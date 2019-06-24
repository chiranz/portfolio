import React from "react";
import PropTypes from "prop-types";
import TechTag from "../components/TechTag";

export default function Project(props) {
  const {
    title,
    img,
    description,
    usedTech,
    liveLink,
    repoLink
  } = props.project;
  return (
    <div className="project-item">
      <div className="project-item-title">
        <h2 className="text-primary">{title}</h2>
      </div>
      <div className="project-item-body">
        <div className="project-item-image">
          <img src={img} alt="Site icon" />
        </div>
        <div className="project-item-details">
          <div className="project-item-description">
            {description}

            <TechTag tech={usedTech} />
          </div>
          <div className="project-item-links">
            <a className="btn btn-primary" href={liveLink}>
              Website
            </a>
            <a className="btn btn-secondary" href={repoLink}>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
