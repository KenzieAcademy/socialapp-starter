import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Clock from "./pages/clock/Clock";
import SideBar from "./components/sideBar/SideBar"

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
          path="*"
          component={NotFound}
        />
         <Route
          path="/"
          component={Clock}
        />
        <Route
          path="/"
          component={SideBar}
          />
      </Switch>
    );
  }
}

export default App;
