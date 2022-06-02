import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { userIsNotAuthenticated } from "../redux/HOCs";
import { Link } from "react-router-dom";
import "../pages/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: true,
    };
  }

  loginButton = () => {
    this.setState({
      isRegistered: true,
    });
  };

  registerButton = () => {
    this.setState({
      isRegistered: false,
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
      <div className="HomePageBody">
        <div className="JoinUs">
          <div className="HomeLink">
            <Link to="/" onClick={() => this.loginButton()} title="Go To Home">
              Home
            </Link>
          </div>
          <div className="Welcome">Welcome!</div>
          <div className="RegisterLink">
            <div>
              <div className="NotMemberYet">Not A Member Yet?</div>
              <Link
                to="/"
                onClick={() => this.registerButton()}
                title="Register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="HomeLogFormBody">{form}</div>
        <br></br>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
