import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Content from "./Content";

export default function index() {
  return (
    <div className="center person">
      <Link style={{ textDecoration: "none" }} to="/">
        <Avatar />
        <Content />
      </Link>
    </div>
  );
}
