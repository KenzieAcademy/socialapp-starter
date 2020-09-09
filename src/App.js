import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About"
import Visit from "./pages/visit/Visit";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="/about"
          component={About}
        />
        <Route
          exact
          path="/visit"
          component={Visit}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;
