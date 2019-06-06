import React, { Fragment } from "react";
import Person from "../components/Person";
import Navigation from "../components/Navigation";
import Social from "../components/Social";
import SideDrawer from "../components/SideDrawer";

export default function Landing() {
  return (
    <Fragment>
      <div className="aside">
        <Person />
        <Navigation />
        <Social />
        <SideDrawer />
      </div>
    </Fragment>
  );
}
