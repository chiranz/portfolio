import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/css/style.css";
import Header from "./pages/Header";
import Routes from "./routes";
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/Backdrop";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main">
            <BackDrop />

            <SideDrawer />

            <Header />
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
