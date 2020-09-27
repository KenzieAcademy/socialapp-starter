import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/loginForm/RegistrationForm";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <LoginForm />
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
