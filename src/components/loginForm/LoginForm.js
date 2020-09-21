import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.username);
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">USERNAME</label>
          <div className="UsernameInput">
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </div>
          <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
          <label htmlFor="password">PASSWORD</label>
          <div className="PasswordInput">
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </div>

          <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
          <div className="LoginButton">
            <button type="submit" disabled={loading}>
              LOGIN
            </button>
          </div>
        </form>
        {loading && <Spinner name="circle" color="red" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
