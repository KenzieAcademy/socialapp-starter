import React from "react";
import { withRouter, Link } from "react-router-dom";

const RegisterButton = (props) => {
  return (
    <Link to={`/register`}>
      First time user
      <button role="link">Sign up</button>
    </Link>
  );
};

export default RegisterButton;
