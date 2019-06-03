import React, { Component, Fragment } from "react";
import "./styles/style.css";
import Person from "./components/person";
import Navigation from "./components/Navigation";
import Social from "./components/Social";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Person />
        <Navigation />
        <Social />
      </Fragment>
    );
  }
}

export default App;
