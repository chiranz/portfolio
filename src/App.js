import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import { createBrowserHistory as createHistory } from "history";
import ReactGA from "react-ga";
import "./styles/css/style.css";
import Header from "./pages/Header";
import Routes from "./routes";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/Backdrop";
import { store } from "./store";
import { GaTrackingID } from "./data/constants";

const history = createHistory();

ReactGA.initialize(GaTrackingID);
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="main">
            <BackDrop />

            <SideDrawer />

            <Header />
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
