import React from 'react';
import Spinner from "react-spinkit";
import { Checkbox, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";

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
        <form
        name="normal_login"
        className="login-form"
        
          id="login-form" onSubmit={this.handleLogin}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            addonBefore="Username"
            name="username"
            placeholder="Enter username here..."
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br />
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            addonBefore="Password"
            name="password"
            placeholder="Enter password here..."
            minLength="9"
            
            required
            onChange={this.handleChange}
          />
          <br />
          
          
          <Checkbox
          color="white"
          name="remember" valuePropName="checked"
          > <span className="remember-me">Remember Me </span>
          </Checkbox>  

        
          <br />

          <Button
            type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          
        </form>
        
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);