import React from "react"
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import MessageFeed from "./pages/MessageFeed"

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
            path="/signup"
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