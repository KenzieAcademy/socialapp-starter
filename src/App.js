import React from "react"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
// import PostMessage from "./services/PostMessageService"
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import MessageList from "./pages/MessageList"
import PostMessage from "./components/PostMessage";

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
            component={MessageList}
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
          <Route exact 
          path="/postmessage" 
          component={PostMessage} />
        </Switch>
      </div>

    )

  }
}

export default App
