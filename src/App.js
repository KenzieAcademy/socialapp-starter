import React from "react";
// import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
//import LoginForm from "./components/loginForm/LoginForm";
import "./App.css";
import NewsFeed from "./pages/NewsFeed";
import Register from "./pages/Register";
import UserDisplay from "./components/getUsers/usersDisplay";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/user/:name"
          render={(props) => (
            <UserDisplay {...props} name={props.match.params.name} />
          )}
        />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/messagefeed" component={NewsFeed} />
        <Route exact path="/user/:username" component={UserDisplay} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
