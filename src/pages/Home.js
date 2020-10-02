import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";

class Home extends React.Component {
  render() {
    return (
      <div className="ohana-page">
        <div className="Home">
          <Menu />
          <div className="home-page">
            <div>
              <h2>A place for people to find and connect to their family.</h2>
              <h3>Login:</h3>
              <LoginForm />
              <hr />
              <h2>Not family yet?</h2>
              <h3>Register Below:</h3>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
