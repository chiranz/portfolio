import React, { useState } from "react";
import { navLinks } from "../../data/constants";
import { Link } from "react-router-dom";

export default function Links() {
  const [activeNav, setActiveNav] = useState("portfolio");
  console.log(activeNav);
  return (
    <ul>
      {navLinks.map(item => (
        <li key={item.name} className={activeNav === item.name ? "active" : ""}>
          <Link
            style={{ textDecoration: "none" }}
            to={item.linkTo}
            onClick={() => setActiveNav(item.name)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
