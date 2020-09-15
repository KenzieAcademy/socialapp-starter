import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: true
    }
  }

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        {this.state.showLogin && <LoginForm />}
        <br></br>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);