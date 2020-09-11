import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navigation from "./components/navigation/Navigation";
import MessageList from "./pages/MessageList";

class App extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/messagelist" component={MessageList} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
