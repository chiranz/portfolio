import React from "react";
import { navLinks } from "../../data/constants";

export default function Links() {
  return (
    <div>
      <ul>
        {navLinks.map(item => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
