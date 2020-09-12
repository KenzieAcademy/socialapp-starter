import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  componentDidMount() {
    axios.get("https://socialapp-api.herokuapp.com/docs/")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

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
