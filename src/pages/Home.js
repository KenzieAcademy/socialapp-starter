import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import MessageButton from "../components/messageButton/MessageButton";
import { userIsNotAuthenticated } from "../redux/HOCs";
import SaveButton from "../components/saveButton/SaveButton";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <SaveButton />
        <MessageButton />

      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
