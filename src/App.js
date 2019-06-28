import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/css/style.css";
import Header from "./pages/Header";
import Routes from "./routes";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/Backdrop";
import Loading from "./components/Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
  }
  state = {
    sideDrawerOpen: false,
    loading: true
  };
  toggleSideDrawer() {
    this.setState(previousState => ({
      sideDrawerOpen: !previousState.sideDrawerOpen
    }));
  }
  componentDidMount() {
    setInterval(() => this.setState(() => ({ loading: false })), 2000);
  }
  render() {
    return (
      <BrowserRouter>
        {this.state.loading ? (
          <Loading />
        ) : (
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
        )}
      </BrowserRouter>
    );
  }
}

export default App;
