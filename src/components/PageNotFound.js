import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not__found-main">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/">
        {" "}
        <i className="fa fa-long-arrow-left" />
        Home
      </Link>
    </div>
  );
}
