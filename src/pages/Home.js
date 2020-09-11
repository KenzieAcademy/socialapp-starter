import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import SaveButton from "../components/saveButton/SaveButton";
import LogoutButton from "../components/logoutbutton/Logout";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <SaveButton />
        <LogoutButton />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
