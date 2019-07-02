import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Content from "./Content";
import { closeSideDrawer } from "../../actions";

function index(props) {
  function handleClick() {
    if (props.isSideDrawerOpen) {
      props.closeSideDrawer();
    }
  }
  return (
    <div className="center person">
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={() => handleClick()}
      >
        <Avatar small={props.small} />
        <Content small={props.small} />
      </Link>
    </div>
  );
}

index.propTypes = {
  isSideDrawerOpen: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSideDrawerOpen: state.isSideDrawerOpen
});

export default connect(
  mapStateToProps,
  { closeSideDrawer }
)(index);
