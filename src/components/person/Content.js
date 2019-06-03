import React from "react";
import { person } from "../../data/constants";

export default function Content() {
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.profession}</h2>
    </div>
  );
}
