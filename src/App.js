import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: null,
      email: null
    }
  }

  render() {
    return (
      <Switch>
      {/* <div>
      <span>{this.state.user}</span>
    </div> */}

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
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}

export default App;
