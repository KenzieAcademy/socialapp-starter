import React from "react";
import { userIsNotAuthenticated } from "../redux/HOCs";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/RegisterForm/RegisterForm";
import "./Home.css";

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
        <h1 className = "kwitter" >Kwitter</h1>
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
