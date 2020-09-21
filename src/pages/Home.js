import React from "react";
import Menu from "../components/menu/Menu"
import LoginForm from "../components/loginForm/LoginForm";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu loggedIn={false} />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <br />
        <h2>First time user?</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
