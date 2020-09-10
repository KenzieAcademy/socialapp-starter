import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegisterForm from "../components/registerForm/RegisterForm";
import homelogo from "../images/logo.png"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
    <img src = {homelogo}/>
        <LoginForm />

        <RegisterForm />

      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
