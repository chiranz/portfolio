import React from "react";
import { person } from "../../data/constants";

export default function Content() {
  return (
    <div className="person-content">
      <h1 className="text-light">{person.name}</h1>
      <h2 className="text-light">{person.profession}</h2>
    </div>
  );
}
