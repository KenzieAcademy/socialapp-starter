import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import MessageButton from "../components/messageButton/MessageButton";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import LikeButton from "../components/likebutton/LikeButton";
import LogoutButton from "../components/logoutButton/Logout";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr />
        <RegistrationForm />
        <LikeButton />
        <LogoutButton />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
