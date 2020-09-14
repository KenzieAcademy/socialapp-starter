import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import {

} from 'semantic-ui-react';


class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: null,
  //     email: null
  //   }
  // }

  // componentDidMount() {
  //   axios.get("https://socialapp-api.herokuapp.com/docs/users")
  //   .then(response => {
  //     this.setState({
  //       name: response.data.user,
  //       // email: response.data.email
  //     })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  render() {
    return (
      <Switch>
      {/* <div>
      <span>{this.state.user}</span>
    </div> */}

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
