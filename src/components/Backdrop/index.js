import React from "react";

export default function index(props) {
  return <div className="backdrop" onClick={() => props.toggleSideDrawer()} />;
}
