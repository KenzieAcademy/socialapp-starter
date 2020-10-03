import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Registration from "../components/registraionForm/RegistrationForm";
import Menu from "../components/menu/Menu";

function CreateUserPage() {
  return (
    <div className="CreateUserPage">
      <Menu isAuthenticated={this.props.isAuthenticated} />
      <Registration />
      <Link to="/">Home</Link>
    </div>
  );
}

export default CreateUserPage;
