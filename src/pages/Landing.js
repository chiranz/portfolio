import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-page-inner">
        <div className="landing-hero">
          <h1>Hi I'am Chiranjibi,</h1>
          <p>
            a freelance web developer specialized in
            <br />
            <strong>front-end and back-end development.</strong>
          </p>
        </div>
        <div className="landing-action">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/my-cv">Curriculum Vitae</Link>
        </div>
      </div>
    </div>
  );
}
