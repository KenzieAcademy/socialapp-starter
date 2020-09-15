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
<<<<<<< HEAD
        <h2>The hottest microblogging platform on the web</h2>
=======
        <h2>Beyond here, there be Dragons~ </h2>     
>>>>>>> 996cdf54bc720ed6181817a458e23935c8f6eee2
        <LoginForm />
        <br />
        New user?
        <br />
        <Link to="/registration">Register an account here!</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
