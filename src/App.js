import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios"
import "../src/App.css";
import loginForm from "../src/components/loginForm/LoginForm";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import Profile from "../src/components/profile/Profile";
import Home from "../src/components/Home/Home";
import NotFound from "./pages/NotFound";
import 'semantic-ui-css/semantic.min.css';
import "./images/heros.jpg";
import MessageFeed from "../src/pages/MessageFeed";


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
          path="/Registration"
          component={RegistrationForm}
        />
        <Route
          exact
          path="/login"
          component={loginForm}
        />
         <Route
          exact
          path="/MessageFeed"
          component={MessageFeed}
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
