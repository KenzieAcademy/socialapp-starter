import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { Button } from 'antd';
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

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
          path="*"
          component={NotFound}
        />
        <Route
          exact
          path="*"
          component={Button}
        />
        <Route
          exact
          path="*"
          component={Header}
        />
        <Route
          exact
          path="*"
          component={Footer}
        />
        <Route
          exact
          path="*"
          component={Sider}
        />
        <Route
          exact
          path="*"
          component={Content}
        />



      </Switch>
    );
  }
}

export default App;
