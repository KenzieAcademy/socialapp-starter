import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const RegisterButton = (props) => {
  return (
    <Link to={`/register`}>
      <h2>
        {" "}
        First time user? &nbsp;
        <a className="signup" role="link">
          Register Here
        </a>
      </h2>
    </Link>
  );
};

export default RegisterButton;
