import React, { Fragment } from "react";
import Person from "../components/Person";
import Navigation from "../components/Navigation";
import Social from "../components/Social";

export default function Header(props) {
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
