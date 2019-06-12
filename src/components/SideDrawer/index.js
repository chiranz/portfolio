import React, { Fragment } from "react";

import NavLinks from "../Navigation/Links";

export default function index(props) {
  function onClick(e) {
    e.preventDefault();
    props.toggleSideDrawer();
  }
  return (
    <Fragment>
      <div className={(props.sideDrawerOpen ? "open " : "") + "side-drawer"}>
        <button className="btn-close" onClick={e => onClick(e)}>
          &times;
        </button>
        <div className="clearfix" />
        <nav>
          <NavLinks active={"#bc311e"} />
        </nav>
      </div>
    </Fragment>
  );
}
