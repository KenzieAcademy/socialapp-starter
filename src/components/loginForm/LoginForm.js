import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";

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
      <div className="LogFormBody">
        <div className="LogForm">
          <form onSubmit={this.handleLogin}>
            <div className="LogUserBox">
              <div className="LogUserHeader">
                <label htmlFor="username">Username</label>
              </div>
              <div className="LogUserInput">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={this.props.username}
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LogPassBox">
              <div className="LogPassHeader">
                <label htmlFor="password">Password</label>
              </div>
              <div className="LogPassInput">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.props.password}
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LogEnterButton">
              <input
                type="submit"
                value=""
                title="Enter"
                onClick={this.handleLogin}
                disabled={loading}
              ></input>
            </div>
          </form>
        </div>
        {loading && <Spinner name="circle" color="red" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
