import React from "react";

export default function TechTag(props) {
  return (
    <div className="tech-tags">
      {props.tech.map((name, index) => (
        <div key={index} className="tech-tag">
          {name}
        </div>
      ))}
    </div>
  );
}
