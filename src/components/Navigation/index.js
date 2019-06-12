import React from "react";
import Links from "./Links";

export default function index() {
  return (
    <div className="navigation">
      <nav>
        <Links active={"#ffffff"} />
      </nav>
    </div>
  );
}
