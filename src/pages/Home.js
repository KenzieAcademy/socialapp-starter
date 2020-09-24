import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu.js";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Button from "react-bootstrap/Button";
import "../pages/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true,
      loginActive: "light",
      registerActive: "dark",
    };
  }

  loginButton = () => {
    this.setState({
      isRegistered: true,
      registerActive: "dark",
      loginActive: "light",
    });
  };

  registerButton = () => {
    this.setState({
      isRegistered: false,
      registerActive: "light",
      loginActive: "dark",
    });
  };

  render() {
    let form = <LoginForm />;
    if (this.state.isRegistered === true) {
      form = <LoginForm />;
    } else {
      form = <RegistrationForm />;
    }

    return (
      <div className="Home">
        {form}
        <div className="JoinUs">
          <div>Not A Member Yet?</div>
          <div className="JoinButton">
            <Button
              variant={this.state.registerActive}
              size="lg"
              disabled={!this.state.isRegistered}
              onClick={() => this.registerButton()}
            >
              JOIN US!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
