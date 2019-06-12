import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/css/style.css";
import Header from "./pages/Header";
import Routes from "./routes";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/Backdrop";

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
            <BackDrop toggleSideDrawer={this.toggleSideDrawer} />
          )}

          <SideDrawer
            toggleSideDrawer={this.toggleSideDrawer}
            sideDrawerOpen={this.state.sideDrawerOpen}
          />

          <Header toggleSideDrawer={this.toggleSideDrawer} />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
