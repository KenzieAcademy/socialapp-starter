
import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm"
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your One Stop Shop For All your traveling Needs</h2>

        <LoginForm />
        <Link to='/registration'>
          Register Now!
        </Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);