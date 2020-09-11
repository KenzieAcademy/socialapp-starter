import React from "react";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div className="Register">
        <Menu />
        <h2>Register your account below:</h2>
        <RegistrationForm />
        <hr />
        <h4>
          Already have an account? Click <Link to="/">here</Link>!
        </h4>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Register);
