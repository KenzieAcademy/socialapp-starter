import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";


class SignIn extends React.Component {
  render() {
    return (
      <div className="SignIn">
        <Menu/>
        <h2>Your favorite microblogging platform for world music!</h2>
        <LoginForm />
        
      </div>
    );
  }
}

export default userIsNotAuthenticated(SignIn);
