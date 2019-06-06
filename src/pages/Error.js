// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Routing & Links
import { homeLink } from "../links";

// Strings
import { errorStrings } from "../strings";

class Error extends Component {
  static propTypes = {
    error: PropTypes.string
  };

  componentWillMount() {
    document.title = homeLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var { error } = this.props;
    error = error || "Sorry! Someting went wrong..";
    return (
      <div>
        <h1>{errorStrings.error}</h1>
        <a href="/">{errorStrings.backHome}</a>
        <p>{error}</p>
      </div>
    );
  }
}

export default Error;
