import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grommet } from 'grommet'

import DeleteUser from "./components/deleteUser/DeleteUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MessageFeed from "./pages/MessageFeed";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Grommet>
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
          path="/messagefeed"
          component={MessageFeed}
        />
        <Route
          exact
          path="/deleteUser"
          component={DeleteUser}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
        
      </Switch>
      </Grommet>
    );
  }
}

export default App;