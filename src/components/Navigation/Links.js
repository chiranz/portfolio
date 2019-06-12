import React, { useState } from "react";
import { navLinks } from "../../data/constants";
import { NavLink } from "react-router-dom";

export default function Links(props) {
  const [activeNav, setActiveNav] = useState("portfolio");
  return (
    <ul>
      {navLinks.map(item => (
        <li key={item.name} className={activeNav === item.name ? "active" : ""}>
          <NavLink
            style={{ textDecoration: "none" }}
            to={item.linkTo}
            onClick={() => setActiveNav(item.name)}
            activeStyle={{
              color: props.active,
              fontWeight: "bold"
            }}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
