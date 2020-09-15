import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    const motto = {
      fontStyle: 'italic',
      textAlign: 'center',
      fontFamily: 'arial',
    }

    return (
      <div className="Home">
        <Menu />
        <h2 style={motto} className="Home">We're not bad ducks, we're bad ass!</h2>
        <LoginForm />
        <hr></hr>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
