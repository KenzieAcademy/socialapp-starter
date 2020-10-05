import React from "react";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { Link } from "react-router-dom";
import "./Registration.css"

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Menu />

        <RegistrationForm />
        <br />
        <div className="moveLoginLink">
          <Link id='returnLogin' to='/'> Back to Log In</Link>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Registration);