import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import NavLinks from "../Navigation/Links";

export default function index() {
  return (
    <div>
      <DrawerToggleButton />
      <div className="side-drawer">
        <a href="#" className="btn-close">
          &times;
        </a>
        <nav style={{ display: "none" }}>
          <NavLinks />
        </nav>
      </div>
    </div>
  );
}
