import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import GoogleAuth from "./GoogleAuth";
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    const { loading, error } = this.props;

    return (
      <div className="LoginForm">

        <form id="login-form" onSubmit={this.handleLogin}>
          <Space direction="vertical" size="middle">
            <Input
              type="text"
              name="username"
              placeholder="Insert Username"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <Input.Password
              type="password"
              name="password"
              placeholder="Insert Password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              required
              onChange={this.handleChange}
            />
            <button type="submit" disabled={loading}>
              Login
          </button>
            <GoogleAuth />

          Or <Link to="/Registration">Register now!</Link>
          </Space >
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm)
