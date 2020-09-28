import React from "react";
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import MessageList from "./pages/MessageList"
import MyMessages from "./pages/MyMessages"
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
          exact
          path="/registration"
          component={Registration}
        />

        <Route
          exact
          path="/messagefeed"
          component={MyMessages}
        />

        <Route
          exact
          path="/messagefeed"
          component={MessageList}
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