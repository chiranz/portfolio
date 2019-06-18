import React from "react";

import Header from "./Header";
import Education from "./Education";
import Projects from "./Projects";
import TechStack from "./TechStack";
import About from "./About";

export default function index() {
  return (
    <div className="cv-page">
      <div className="cv-page-inner">
        <Header />
        <Projects />
        <TechStack />
        <Education />
      </div>
    </div>
  );
}
