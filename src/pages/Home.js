import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
// import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {/* <Menu /> */}
        
        <h2> Welcome to Yowl</h2>
        <LoginForm />
        <br />
        <RegistrationForm />
      </div>
    )
  }
}

export default userIsNotAuthenticated(Home);
