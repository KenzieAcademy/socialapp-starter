import React from "react"
import { Switch, Route } from "react-router-dom";




import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import MessageFeed from "./pages/MessageFeed"
import RegistrationForm from "./components/RegisterForm/RegisterForm"

class App extends React.Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  }

  render() {

    return (
      <div className="root" >

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
            path="/messagefeed"
            component={MessageFeed}
          />
          <Route
            exact
            path="/signup"            // A New Route To SignUp Page (Register Page)
            component={RegistrationForm}
          />
          <Route
            exact
            path="*"
            component={NotFound}
          />
        </Switch>
      </div>

    )

  }
}

export default App
