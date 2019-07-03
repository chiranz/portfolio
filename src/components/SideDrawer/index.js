import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Person from "../Person";
import NavLinks from "../Navigation/Links";
import { closeSideDrawer } from "../../actions";

function index(props) {
  function onClick(e) {
    e.preventDefault();
    props.closeSideDrawer();
  }
  const { location } = props;
  if (location.pathname.match("/my-cv")) {
    return null;
  }
  return (
    <Fragment>
      <div className={(props.isSideDrawerOpen ? "open " : "") + "side-drawer"}>
        <button className="btn-close" onClick={e => onClick(e)}>
          &times;
        </button>
        <div className="clearfix" />
        <Person small="true" />

        <nav className="side-nav">
          <NavLinks active={"#fff"} />
        </nav>
      </div>
    </Fragment>
  );
}
index.propTypes = {
  isSideDrawerOpen: PropTypes.bool.isRequired,
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
