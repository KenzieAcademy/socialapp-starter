import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite travel microblogging platform</h2>
        <LoginForm />
        <br />
        <h3>New user?</h3> <Link to="/registrationForm/RegistrationForm">Register here</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
