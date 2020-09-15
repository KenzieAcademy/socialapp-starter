import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
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
      </div >
    );
  }
}

export default userIsNotAuthenticated(Home);
