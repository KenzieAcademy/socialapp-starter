import React from "react";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Menu />
        <h2>Your One Stop Shop For All your traveling Needs</h2>
        <RegistrationForm />
        <Link to='/'> Back to Log In</Link>
        
      </div>
    );
  }
}

export default userIsNotAuthenticated(Registration);