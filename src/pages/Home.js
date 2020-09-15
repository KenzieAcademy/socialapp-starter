import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";

import RegistrationForm from "../components/registrationForm/RegistrationForm";
// import Menu from "../components/menu/Menu";


import { userIsNotAuthenticated } from "../redux/HOCs";
import { Switch } from "@material-ui/core";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {/* <Menu /> */}
        
        <h2> Welcome to Yowl</h2>
        <LoginForm />

    

        <hr />
        <Link to="/Registration">New User?</Link>
      </div>
    )
  }
}

export default userIsNotAuthenticated(Home);
