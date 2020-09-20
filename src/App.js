import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageFeed from "./pages/MessageFeed"

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
          component={props => <Profile {...props} username={props.match.params.username}/>}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
        <Route
          exact
          path="/messagefeed"
          component={MessageFeed}
        />
      </Switch>
    );
  }
}

export default App;
