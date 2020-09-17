import React from "react"
import { Switch, Route } from "react-router-dom";
/*/import Navigation from "./components/Navigation";*/

//import { withAsyncAction } from "./redux/HOCs"
//import { userIsAuthenticated } from "./redux/HOCs";

import Main from "./pages/Main"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PostMessageForm from "./components/postMessagesForm/PostMessageForm";
//import MessageFeed from "./pages/MessageFeed"
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
        <Route exact
          path="/main"
          component={Main}
        />
        <Route exact
          path="/messagefeed"
          component={PostMessageForm} />
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
