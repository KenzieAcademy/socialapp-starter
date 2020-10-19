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
        <h2>Welcome to The Dragon's Den</h2>
        <p>Beyond here, there be dragons...</p>
        <LoginForm />
        <br />New user?<br />
        <Link to="/registration">Register an account here!</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
