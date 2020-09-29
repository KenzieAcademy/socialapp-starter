import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import Button from "react-bootstrap/Button";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username || "",
      password: this.props.password || "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("password", this.state.password);
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="Body">
        <div className="LoginForm">
          <form id="login-form" onSubmit={this.handleLogin}>
            <div className="UserNameInput2">
              <label htmlFor="username">Username</label>
              <div className="UserNameInputBox2">
                <input
                  type="text"
                  name="username"
                  value={this.props.username}
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="PasswordInput">
              <label htmlFor="password">Password</label>
              <div className="PasswordInputBox">
                <input
                  type="password"
                  name="password"
                  value={this.props.password}
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="EnterButtonBox">
              <div className="EnterButton">
                <Button variant="dark" size="lg" disabled={loading}>
                  ENTER
                </Button>
              </div>
            </div>
          </form>
          {loading && <Spinner name="circle" color="red" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
