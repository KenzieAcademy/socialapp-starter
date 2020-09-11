import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import MessageButton from "../components/messageButton/MessageButton";
import { userIsNotAuthenticated } from "../redux/HOCs";
import SaveButton from "../components/saveButton/SaveButton";
import LogoutButton from "../components/logoutbutton/Logout";
import NameInput from "../components/namechange/NameChgInp";
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
        <SaveButton />
        <LogoutButton />
        <NameInput />
        <DeleteMessage />
        <UploadPhoto />
        <MessageButton />

      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
