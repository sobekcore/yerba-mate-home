import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Import Pages
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import DatabasePage from "./pages/database";
import APIPage from "./pages/api";
import ErrorPage from "./pages/error";

export default class App extends Component {
  // Loading till' React takes over
  componentDidMount() {
    let bg = document.getElementById("loader-bg");
    bg.id = "loader-exit";

    bg = document.getElementById("loader-exit");
    if(bg.style.opacity == 0) {
      setTimeout(() => bg.remove(), 400);
    }
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mate" component={DatabasePage} />
          <Route exact path="/api" component={APIPage} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}
