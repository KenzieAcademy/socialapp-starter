import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios"
import RegistrationForm from "./components/registrationForm/RegistrationForm"
import Home from "../src/components/Home/Home";
import Profile from "../src/components/profile/Profile";
import NotFound from "./pages/NotFound";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  componentDidMount() {
    axios.get("https://socialapp-api.herokuapp.com/docs/")
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

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
        
      </Switch>
    );
  }
}

export default App;
