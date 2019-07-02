import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function index(props) {
  if (!props.isLoading) {
    return null;
  }
  return (
    <div className="center-div">
      <div className="loader">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

index.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(index);
