import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Social Distancing Style Blogging</h2>
        <LoginForm />
        <hr/>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
