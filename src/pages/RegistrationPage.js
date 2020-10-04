import React from "react";
import { Link } from "react-router-dom";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Registration from "../components/registraionForm/RegistrationForm";
import Menu from "../components/menu/Menu";

function CreateUserPage() {
  return (
    <div className="CreateUserPage">
      <Menu />
      <Registration />
      <Link to="/">
        <button>Back to Login</button>
      </Link>
    </div>
  );
}

export default userIsNotAuthenticated(CreateUserPage);
