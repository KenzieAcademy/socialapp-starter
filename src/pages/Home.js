import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import Menu from "../components/menu/menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2>Quests will appear here!</h2>
        <LoginForm />
        
        <RegistrationForm />
      </div>
    );
  }
}



















export default userIsNotAuthenticated(Home);
