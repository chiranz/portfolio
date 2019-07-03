import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/constants";
import { closeSideDrawer } from "../../actions";

function Links(props) {
  const [activeNav, setActiveNav] = useState("portfolio");
  function handleClick(item) {
    setActiveNav(item);
    if (props.isSideDrawerOpen) {
      props.closeSideDrawer();
    }
  }
  return (
    <ul>
      {navLinks.map(item => (
        <li key={item.name} className={activeNav === item.name ? "active" : ""}>
          <NavLink
            style={{ textDecoration: "none" }}
            to={item.linkTo}
            onClick={() => handleClick(item.name)}
            activeStyle={{
              color: props.active,
              fontWeight: "bold",
              backgroundColor: props.background
            }}
          >
            {props.isSideDrawerOpen && <i className={item.icon} />}
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

Links.propTypes = {
  isSideDrawerOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isSideDrawerOpen: state.isSideDrawerOpen
});

export default connect(
  mapStateToProps,
  { closeSideDrawer }
)(Links);
