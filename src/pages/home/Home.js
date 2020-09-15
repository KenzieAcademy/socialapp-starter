import React from "react";
import './Home.css';
import LoginForm from "../../components/loginForm/LoginForm";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import Menu from "../../components/menu/Menu";
import { userIsNotAuthenticated } from "../../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h5>Welcome Back</h5>
        <h2>Join us for Blast Off!</h2>
        <h5>sign in</h5>
        <LoginForm />
        <h5>Ready to Join Us?</h5>
        <h2>Reserve Your Seat for the Adventure!</h2>
        <h5>register</h5>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
