import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import MenuUnauthenticated from "../components/menu/MenuUnauthenticated";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
    <div>
      <MenuUnauthenticated />
      <div className="Home">
        <h2>Quests will appear here!</h2>
        <LoginForm />
        <hr />
        <RegistrationForm />
      </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
