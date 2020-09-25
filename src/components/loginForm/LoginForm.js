import React from "react";
import { Container, Form, Button } from "react-bootstrap";
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

  handleLogin = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      // <div className="LoginForm">
      //   <form id="login-form" onSubmit={this.handleLogin}>
      //     <label htmlFor="username">Username</label>
      //     <input
      //       type="text"
      //       name="username"
      //       autoFocus
      //       required
      //       onChange={this.handleChange}
      //     />
      //     <label htmlFor="password">Password</label>
      //     <input
      //       type="password"
      //       name="password"
      //       required
      //       onChange={this.handleChange}
      //     />
      //     <button type="submit" disabled={loading}>
      //       Login
      //     </button>
      //   </form>
      //   {loading && <Spinner name="circle" color="blue" />}
      //   {error && <p style={{ color: "red" }}>{error.message}</p>}
      // </div>
      <Container>
        <Form id="login-form" onSubmit={this.handleLogin}>
          <Form.Group controlid="loginForm">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlid="loginForm">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Login
          </Button>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form>
      </Container>
    );
  }
}
export default withAsyncAction("auth", "login")(LoginForm);
