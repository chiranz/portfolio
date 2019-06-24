import React from "react";
import PageOutline from "../components/PageOutline";
import Project from "../components/Project";
import { projects } from "../data/constants";

export default function ProjectListing() {
  return (
    <PageOutline>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </PageOutline>
  );
}
