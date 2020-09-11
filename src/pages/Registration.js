import React from "react";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/registration form/RegistrationForm"
import { userIsNotAuthenticated } from "../redux/HOCs";


class Registration extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Menu />
        
        <h2>Register Here</h2>
        <RegistrationForm />
        
              </div>
    );
  }
}

export default userIsNotAuthenticated(Registration);
