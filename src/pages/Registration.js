import React from "react";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";


class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="Registration">
        <Menu />
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(RegistrationPage);
