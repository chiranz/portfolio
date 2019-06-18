import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Person from "../components/Person";
import Navigation from "../components/Navigation";
import Social from "../components/Social";

function Header(props) {
  const { location } = props;
  if (location.pathname.match("/my-cv")) {
    return null;
  }
  return (
    <Fragment>
      <div className="aside">
        <Person />
        <Navigation />
        <Social toggleSideDrawer={props.toggleSideDrawer} />
      </div>
    </Fragment>
  );
}

export default withRouter(Header);
