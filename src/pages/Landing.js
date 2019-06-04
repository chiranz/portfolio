import React from "react";
import Person from "../components/Person";
import Navigation from "../components/Navigation";
import Social from "../components/Social";

export default function Landing() {
  return (
    <div className="aside">
      <Person />
      <Navigation />
      <Social />
    </div>
  );
}
