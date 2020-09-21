import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";


class LoginPage extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Thank you for registering, Jerry! Please log in below</h2>
        <LoginForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(LoginPage);
