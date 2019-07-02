import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeSideDrawer } from "../../actions";
import { withRouter } from "react-router-dom";

function index(props) {
  const { location } = props;
  if (location.pathname.match("/my-cv")) {
    return null;
  }
  if (!props.isSideDrawerOpen) {
    return null;
  }
  return <div className="backdrop" onClick={() => props.closeSideDrawer()} />;
}

index.propTypes = {
  closeSideDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSideDrawerOpen: state.isSideDrawerOpen
});

export default withRouter(
  connect(
    mapStateToProps,
    { closeSideDrawer }
  )(index)
);
