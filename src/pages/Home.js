import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true,
      loginActive: "secondary",
      registerActive: "primary",
    };
  }

  loginButton = () => {
    this.setState({
      isRegistered: true,
      registerActive: "primary",
      loginActive: "secondary",
    });
  };

  registerButton = () => {
    this.setState({
      isRegistered: false,
      registerActive: "secondary",
      loginActive: "primary",
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
        <Menu />
        <br></br>
        <Button
          variant={this.state.loginActive}
          size="lg"
          disabled={this.state.isRegistered}
          onClick={() => this.loginButton()}
        >
          Login
        </Button>
        <Button
          variant={this.state.registerActive}
          size="lg"
          disabled={!this.state.isRegistered}
          onClick={() => this.registerButton()}
        >
          Register
        </Button>
        {form}
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
