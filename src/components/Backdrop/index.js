import React from "react";
import { withRouter } from "react-router-dom";

function index(props) {
  const { location } = props;
  if (location.pathname.match("/my-cv")) {
    return null;
  }
  return <div className="backdrop" onClick={() => props.toggleSideDrawer()} />;
}

export default withRouter(index);
