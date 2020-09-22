import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import cowboy1 from "../components/assets/images/cowboy1.png";
import cowboy2 from "../components/assets/images/cowboy2.png";


class Home extends React.Component {
  render() {
    return (
      <div className="Home" >
        <Menu />
        <h2>Your favorite Convolooters Social App</h2>
        <LoginForm />

        <img className="cowboy1" src={cowboy1} alt="cowboy1" />

        <img className="cowboy2" src={cowboy2} alt="cowboy2" />
        <hr />
        <h2>New to (Insert Site Name Here)? Register!</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
