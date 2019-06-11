import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/css/style.css";
import Landing from "./pages/Landing";
import Routes from "./routes";
import SideDrawer from "./components/SideDrawer";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
  }
  state = {
    sideDrawerOpen: false
  };
  toggleSideDrawer() {
    this.setState(previousState => ({
      sideDrawerOpen: !previousState.sideDrawerOpen
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          {this.state.sideDrawerOpen && (
            <SideDrawer
              toggleSideDrawer={this.toggleSideDrawer}
              sideDrawerOpen={this.state.sideDrawerOpen}
            />
          )}

          <Landing toggleSideDrawer={this.toggleSideDrawer} />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
