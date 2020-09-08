import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import Menu from "./components/menu/Menu";
import MessageFeed from "./components/feed/MessageFeed";

class App extends React.Component {
  render() {
    return (
      <div>
      <Menu />
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
            path="/NewUser"
            component={NewUser}
          />
          <Route
            exact
            path="/MessageFeed"
            component={MessageFeed}
          />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
      </div>
    );
  }
}

export default App;
