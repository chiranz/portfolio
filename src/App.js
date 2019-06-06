import React, { Component } from "react";
import "./styles/css/style.css";
import Landing from "./pages/Landing";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Landing />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
