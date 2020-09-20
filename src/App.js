import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import MessageFeed from "./pages/MessageFeed";
import ContactUs from "./pages/ContactUs";

class App extends React.Component {
  render() {
    return (
      <div>
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
          path="/ContactUs"
          component={ContactUs}
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
