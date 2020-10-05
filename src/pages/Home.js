
import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import "./Home.css"
import { userIsNotAuthenticated } from "../redux/HOCs";

import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        {/* <h2>Your One Stop Shop For All your traveling Needs</h2> */}

        <LoginForm />
        <br/>
        <div className="regLink">
          <Link id="registration" to='/registration'>New user? Register Here</Link>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);