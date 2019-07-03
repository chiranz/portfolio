// React
import React, { Component, Fragment } from "react";

// Routing & Links
import { Route, Switch } from "react-router-dom";
import * as links from "../links";

// Pages
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Cv from "../pages/Cv";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Notification from "../pages/Notification";
import Error404 from "../pages/Error404";

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={links.homeLink.url} component={Home} />
          <Route exact path={links.blogLink.url} component={Blog} />
          <Route exact path={links.projectsLink.url} component={Portfolio} />
          <Route exact path={links.cvLink.url} component={Cv} />
          <Route exact path={links.aboutLink.url} component={About} />
          <Route exact path={links.contactLink.url} component={Contact} />
          <Route exact path={links.formSuccess.url} component={Notification} />
          <Route path="*" component={Error404} />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
