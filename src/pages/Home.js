import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import DeleteUser from "../components/deleteUser/DeleteUser"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <hr RegistrationForm />
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
