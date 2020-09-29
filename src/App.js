import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import Messages from "./pages/Message";
import Profile from "./pages/Profile";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Profile/:username" component={Profile} />
        <Route exact path="/Message" component={Messages} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
