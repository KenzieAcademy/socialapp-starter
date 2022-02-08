import React from "react";
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import NewUser from "./pages/NewUser";
import MessageFeed from "./pages/MessageFeed";
import ContactUs from "./pages/ContactUs";
import Registration from "./pages/Registration"
import UpdateProfile from "./pages/UpdateProfile"
import DiceRoller from "./pages/DiceRoller";

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
            path="/Registration"
            component={Registration}

          />
          <Route
            exact
            path="/UpdateProfile"
            component={UpdateProfile} />

          <Route
            exact
            path="/DiceRoller"
            component={DiceRoller} />

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
