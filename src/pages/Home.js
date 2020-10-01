import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

import RegisterButton from "../components/registerbutton/RegisterButton";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <br></br>
        <RegisterButton />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
