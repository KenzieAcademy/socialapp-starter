import React from "react";
import { Switch, Route } from "react-router-dom";
import RegistrationPage from "./pages/Registration";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

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
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;
