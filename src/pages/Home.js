import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <Link to="/RegisterUser">Create User</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
