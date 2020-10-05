import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import cowboy1 from "../components/assets/images/cowboy1.png";
import cowboy2 from "../components/assets/images/cowboy2.png";
import "../index.css"


class Home extends React.Component {
  render() {
    return (
      <div className="Home" >
        <Menu />
        <div className="login">
          <h2>The most rootin' tootin' conversation lootin' app on all the wild wild web!</h2>
          <LoginForm />
        </div>

        <img className="cowboy1" src={cowboy1} alt="cowboy1" />
        <img className="cowboy2" src={cowboy2} alt="cowboy2" />
        <div className="registration">
          <h2>New to Convolooters? Register Here!</h2>
          <RegistrationForm className="registration-form" />
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
