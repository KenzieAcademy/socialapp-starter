import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import UserDisplay from "./components/getUsers/usersDisplay";

import LoginForm from "./components/loginForm/LoginForm";

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

       <Route
      exact path="/user/:name"
        render={(props) => <UserDisplay {...props} name={props.match.params.name}/>}
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
