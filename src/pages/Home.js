import React from "react";
import "./Home.css";
import LoginForm from "../components/loginForm/LoginForm";

import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegisterForm/RegisterForm";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Kwitter</h1>
        <h2>Blog Away</h2>
        <br />
        <LoginForm />

        <br />

        <h2>Register</h2>
        <br />
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
