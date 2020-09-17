import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import MessageList from "./pages/MessageList";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/messagefeed" component={MessageList} />
        <Route exact path="/register" component={Register} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
