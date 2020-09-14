import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import SideBar from "../components/sideBar/SideBar";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Welcome to Space Squrrels</h2>
        <LoginForm />
<<<<<<< HEAD
        <SideBar />
=======
        <hr/>
        <RegistrationForm />
>>>>>>> c1ce5671ed7e57f59bf0f171fecae4faf95a73c3
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
