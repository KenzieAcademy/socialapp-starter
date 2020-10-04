import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registraionForm/RegistrationForm";

class Home extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Home of Lady Lucky</h2>
        <LoginForm />
        <br />
        <button className="RegisterButton">
          <Link to="/RegisterUser">Create User</Link>
        </button>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
