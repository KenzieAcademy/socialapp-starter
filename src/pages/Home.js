import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/registration form/RegistrationForm"
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr />
        <h2>Reigster Below</h2>
        <RegistrationForm />
              </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
