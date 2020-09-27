import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/Registration";
import MessageFeed from "./pages/MessageFeed";
import UserList from "./pages/UserList";

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
          path="/Registration"
          component={RegistrationPage}
        />
        <Route
          exact
          path="/Users"
          component={UserList}
        />
        <Route
          exact
          path="/Messages"
          component={MessageFeed}
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
