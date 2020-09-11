import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import UserData from "../components/getUsers/getUsers"
class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <RegistrationForm/>
        <UserData/>
      
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
