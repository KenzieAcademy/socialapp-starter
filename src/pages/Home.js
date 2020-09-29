import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { userIsNotAuthenticated } from "../redux/HOCs";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../pages/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true,
      // loginActive: "outline-dark",
      // registerActive: "dark",
    };
  }

  loginButton = () => {
    this.setState({
      isRegistered: true,
      // registerActive: "dark",
      // loginActive: "outline-dark",
    });
  };

  registerButton = () => {
    this.setState({
      isRegistered: false,
      // registerActive: "outline-dark",
      // loginActive: "dark",
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
        <div className="JoinUs">
          <div className="HomeLink">
            <Link to="/" onClick={() => this.loginButton()}>
              Home
            </Link>
            {/* <Button
              variant={this.state.loginActive}
              size="sm"
              disabled={this.state.isRegistered}
              onClick={() => this.loginButton()}
            >
              LOGIN
            </Button> */}
          </div>
          <div className="Welcome">Welcome!</div>
          <div className="RegisterLink">
            <div>
              <div className="NotMemberYet">Not Yet A Member?</div>
              <Link to="/" onClick={() => this.registerButton()}>
                Register
              </Link>
            </div>
            {/* <Button
              variant={this.state.registerActive}
              size="sm"
              disabled={!this.state.isRegistered}
              onClick={() => this.registerButton()}
            >
              REGISTER
            </Button> */}
          </div>
        </div>
        <div className="FormBody">{form}</div>
        <br></br>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
