import React, { useState } from "react";
import { navLinks } from "../../data/constants";

export default function Links() {
  const [activeNav, setActiveNav] = useState("portfolio");
  console.log(activeNav);
  return (
    <div>
      <ul>
        {navLinks.map(item => (
          <li key={item} className={activeNav === item ? "active" : ""}>
            <a href="#" onClick={() => setActiveNav(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
