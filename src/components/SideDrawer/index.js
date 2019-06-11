import React, { Fragment } from "react";

import NavLinks from "../Navigation/Links";
import BackDrop from "../Backdrop";

export default function index(props) {
  function onClick(e) {
    e.preventDefault();
    props.toggleSideDrawer();
  }
  return (
    <Fragment>
      {props.sideDrawerOpen && (
        <BackDrop toggleSideDrawer={props.toggleSideDrawer} />
      )}

      <div className={(props.sideDrawerOpen ? "open " : "") + "side-drawer"}>
        <button className="btn-close" onClick={e => onClick(e)}>
          &times;
        </button>
        <div className="clearfix" />
        <nav>
          <NavLinks />
        </nav>
      </div>
    </Fragment>
  );
}
