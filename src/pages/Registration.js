import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from 'semantic-ui-react';
// import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import RegisterForm from "../components/registerForm/RegisterForm"
// import { userIsNotAuthenticated } from "../redux/HOCs";


class Registration extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Registration Form</h2>
       
        <RegisterForm />

        <br/>
        
        <Button color="orange">
        <Link to="/">Go to Login</Link>
        </Button>
        

      </div>
    );
  }
}

export default Registration;