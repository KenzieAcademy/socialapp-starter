import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import LogoutButton from "../components/logoutButton/LogoutButton";
import DeleteMessage from "../components/deleteMessage/DeleteMessage";
import UploadPhoto from "../components/uploadPhoto/UploadPhoto";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <LogoutButton />
        <DeleteMessage />
        <UploadPhoto />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
