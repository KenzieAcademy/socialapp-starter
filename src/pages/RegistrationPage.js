import React from "react";
import { Link } from "react-router-dom";
import Registration from "../components/registraionForm/RegistrationForm";

function CreateUserPage() {
  return (
    <div className="CreateUserPage">
      <Registration />
      <Link to="/">Home</Link>
    </div>
  );
}

export default CreateUserPage;
