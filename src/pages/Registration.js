import React from "react";
import "antd/dist/antd.css";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Menu />
        <h2>Register a new account</h2>
        <RegistrationForm />
        <br />
        Already registered?
        <br />
        <Link to="/">Login to your account here!</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Registration);
