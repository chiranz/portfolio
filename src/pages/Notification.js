import React from "react";
import { Link } from "react-router-dom";
import PageOutline from "../components/PageOutline";

export default function Notification() {
  return (
    <PageOutline>
      <div className="info">
        <div className="success">
          <h2 className="text-primary">Form Submitted Successfully</h2>
          <p>I will get back to you shortly!!</p>
          <div className="home-links">
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </PageOutline>
  );
}
