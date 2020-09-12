import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PostMessageForm from "./components/postMessagesForm/PostMessageForm";

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
        <Route exact
          path="/main"
          component={Main}
        />
        <Route exact
          path="/messagefeed"
          component={PostMessageForm} />
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
