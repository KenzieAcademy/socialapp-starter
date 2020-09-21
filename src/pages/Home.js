import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/loginForm/LoginForm";
import { userIsNotAuthenticated } from "../redux/HOCs";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2> Welcome to Yowl</h2>
        <LoginForm />
        <hr />
        <Link to="/Registration">New User?</Link>
      </div>
    )
  }
}

export default userIsNotAuthenticated(Home);
