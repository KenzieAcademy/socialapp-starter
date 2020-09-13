import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
// import Menu from "./components/menu/Menu";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About"
import Visit from "./pages/visit/Visit";
import Style from "./pages/style/Style";
import Play from "./pages/play/Play";
import Meet from "./pages/meet/Meet"
import Logoff from "./pages/logoff/Logoff";

class App extends React.Component {
  render() {
    return (
      <div className="App">

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
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/visit"
            component={Visit}
          />
          <Route
            exact
            path="/style"
            component={Style}
          />
          <Route
            exact
            path="/play"
            component={Play}
          />
          <Route
            exact
            path="/meet"
            component={Meet}
          />
          <Route
            exact
            path="/logout"
            component={Logoff}
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
