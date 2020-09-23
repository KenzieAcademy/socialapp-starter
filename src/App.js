import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageList from "./pages/MessageList";

import RegistrationForm from "./components/registrationForm/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/messagefeed" component={MessageList} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/logout" component={Home} />

          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
