import React from "react";
import LoginForm from "../components/LoginForm";
import Menu from "../components/Menu";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
