import React from "react";
import "./Backdrop.css";

export default function index(props) {
  return <div className="backdrop" onClick={props.click} />;
}
