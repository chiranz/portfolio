import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Links from "./Links";
import { openSideDrawer } from "../../actions";

function index(props) {
  function onClick(e) {
    e.preventDefault();
    props.openSideDrawer();
  }
  return (
    <div className="social">
      <div className="hamburger large text-light">
        <a href="/" id="hamburger" onClick={e => onClick(e)}>
          <i className="fa fa-bars" />
        </a>
      </div>
      <p className="text-light uppercase small pb-1">get in touch</p>
      <Links />
    </div>
  );
}
index.propTypes = {
  openSideDrawer: PropTypes.func.isRequired
};

export default connect(
  null,
  { openSideDrawer }
)(index);
