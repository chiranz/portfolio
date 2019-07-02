import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Person from "../Person";
import NavLinks from "../Navigation/Links";

function index(props) {
  function onClick(e) {
    e.preventDefault();
    props.toggleSideDrawer();
  }
  const { location } = props;
  if (location.pathname.match("/my-cv")) {
    return null;
  }
  return (
    <Fragment>
      <div className={(props.sideDrawerOpen ? "open " : "") + "side-drawer"}>
        <button className="btn-close" onClick={e => onClick(e)}>
          &times;
        </button>
        <div className="clearfix" />
        <Person small="true" />

        <nav>
          <NavLinks active={"#fff"} />
        </nav>
      </div>
    </Fragment>
  );
}

export default withRouter(index);
